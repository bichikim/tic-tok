export interface IPromise {
  then(resolve:TCallback):void
  catch(resolve:TCallback):void
}
export type TRun = (...args:any[]) => Promise<{[name:string]:any}>
export type TCallback = (...args:any[]) => void

export class Run implements IPromise{
  private _myList:Promise<any>[]
  private _then?:TCallback
  private _catch?:TCallback
  constructor(list:TRun[], ...args:any[]){
    this._myList = this._getRunners(list, ...args)
  }

  then(resolve:TCallback):void{
    this._then = resolve
  }

  catch(resolve:TCallback):void{
    this._then = resolve
  }

  start(){
    this._start()
  }

  protected _getRunners(list:TRun[], ...args:any[]){
    return list.map((item:TRun) => {
      return item(...args)
    })
  }

  protected _resolve(result:any){
    const {_then} = this
    if(typeof _then === 'function'){
      _then(result)
    }
  }

  protected _reject(error:any){
    const {_catch} = this
    if(typeof _catch === 'function'){
      _catch(error)
    }
  }
  protected _start(){
    Promise.all(this._list).then((result:any) => {
      this._resolve(result)
    }).catch((error:any) => {
      this._reject(error)
    })
  }

  protected get _list():Promise<any>[]{
    return this._myList
  }

  protected set _list(list:Promise<any>[]){
    this._myList = list
  }
}
