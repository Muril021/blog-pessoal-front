import { Action } from "./actions";

export type clicksState = {
    clicks: number;    
};

const initialState = {
    clicks: 0
};

export const clicksReducer = (state: clicksState = initialState, action: Action) => {
    switch (action.type) {
        case 'CHANGE_CLICKS': {
            return { clicks: action.payload };
        }
        default: {
            return state;
        }
    }
};