import {IPromise, Run, TRun} from './Run'
export interface ILoop extends IPromise{
  delay(time:number):void
  stop(then:() => void):void
  stopAfter(times:number, then:() => void):void
}
export class Loop extends Run implements ILoop{
  private _delay:number
  private _stop:number
  private _stopThen?:() => void
  constructor(list:TRun[], ...args:any[]){
    super(list, ...args)
    this._delay = 0
    this._stop = -1
  }

  delay(time:number):void{
    this._delay = time
  }

  stop(then:() => void):void{
    this.stopAfter(0, then)
  }

  stopAfter(times:number, then:() => void):void{
    this._stopThen = then
    this._stop = times
  }

  protected _start(){
    if(this._stop > 0){
      this._stop -= 1
    }
    Promise.all(this._list).then((result:any) => {
      setTimeout(() => {
        this._resolve(result)
        if(this._stop === 0){
          const {_stopThen} = this
          if(typeof _stopThen === 'function'){
            this._stop = -1
            this._stopThen = null
            _stopThen()
          }
          return
        }
        this._start()
      }, this._delay)
    }).catch((error:any) => {
      this._reject(error)
    })
  }
}
