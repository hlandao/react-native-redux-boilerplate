'use strict';
import {TEST_ACTION} from './global_actions'

const initialState = {}

export function global(state = initialState, action = {}) {
    switch (action.type) {
        case TEST_ACTION:
          return Object.assign(state, {test: "test"});
        break
    }

    return state;
}
