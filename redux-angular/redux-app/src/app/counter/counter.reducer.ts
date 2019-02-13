import { Action } from '@ngrx/store';



export function counterReducer (state: number = 10, action: Action ) {

  switch( action.type ) {

    default: 
      return state;
  }
}