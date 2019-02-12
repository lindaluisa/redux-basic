// Actions
interface Action {
    type: string;
    payload?: any;
}

const incrementAction: Action = {
    type: 'Increment'
}