// vanilla redux: npm i redux 
import { Store, createStore } from 'redux';
import { CounterReducer } from './counter/counter.reducer';
import { incrementAction } from './counter/counter.actions';

const store: Store = createStore( CounterReducer);

store.subscribe( () => {
    console.log('Subs:', store.getState() );
})

store.dispatch( incrementAction ); // 11
store.dispatch( incrementAction ); // 12
store.dispatch( incrementAction ); // 13
store.dispatch( incrementAction ); // 14