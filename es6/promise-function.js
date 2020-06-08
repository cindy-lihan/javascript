{
  const STATUS = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
  }
 function Promise(executor){
  //  存储指向，在子函数中可用
  var _this = this;
  //  初始状态
   this.status = STATUS.PENDING;
  //  resolve时返回的数据
   this.resolveData = null;
  //  reject时返回的数据
  this.rejectData = null;
  // resolve和reject时执行的回调队列
  // promise的resolve和reject为异步响应时，即调用then时promise为
  // pending状态，则将传入then的函数加入该队列，等待promise resolve或
  // reject时执行该队列
  // 保存成功回调
  this.onFulfilledFunc = []; 
  // 保存失败回调
  this.onRejectedFunc = [];
   
    //  实例化promise马上执行
   executor(resolve,reject)

   function resolve(value){
     if(_this.status === STATUS.PENDING){
      _this.resolveData = value
       // 依次执行回调
       this.onFulfilledFunc.map(fn => fn(value))
       _this.status = STATUS.FULFILLED
     }
    
  }

   function reject(reason){
    if(_this.status === STATUS.PENDING){
      _this.rejectData= reason
        // 依次执行回调
        this.onRejectedFunc.map(fn => fn(reason))
      _this.status = STATUS.REJECTED

    }
   }


 }

 Promise.prototype.then = function(onFulfilled,onRejected){
  //  等待态，有异步代码还没执行完
  if(this.status === 'pending'){
    if(typeof onFulfilled === 'function'){
      this.onFulfilledFunc.push(onFulfilled)
    }
    if(typeof onRejected === 'function'){
      this.onRejectedFunc.push(onRejected)
    }
  }
  //当Promise的状态发生了改变，不论是成功或是失败都会调用then方法
  if(this.status === STATUS.FULFILLED){
    if(typeof onFulfilled === 'function'){
      onFulfilled(this.resolveData)
    }
  }
  if(this.status === STATUS.REJECTED){
    if(typeof onRejected === 'function'){
      onRejected(this.rejectData)
    }
  }

 }
 
}