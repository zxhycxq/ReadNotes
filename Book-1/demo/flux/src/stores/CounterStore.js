import AppDistacher from '../AppDispatcher.js';
const cpunterValues={
  'First':0,
  'Second':10,
  'Third':20,
};

const CounterStore =Object.assign({},BaseEventEmitter.prototype,{
  getCounterValues(){
    return counterValues;
  },
  
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  
  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback)
  },
  
  removeChangeListener(callback){
    this.removeChangeListener(CHANGE_EVENT,callback)
  }

});


CounterStore.dispatchToken=AppDistacher.register((action)=>{
  if (action.type===ActionTypes.INCREMENT) {
      CounterValues[action.cpunterCaption]++;
      CounterStore.emitChange();
  } else if (action.type===ActionTypes.DECREMENT) {
    CounterValues[action.cpunterCaption]--;
    CounterStore.emitChange();
  }
})
