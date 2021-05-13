import {combineReducers} from 'redux'
import {CHANGE_THEME} from './types'



const initialThemeState = {
  value: 'light',
  disabled: false
}

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payload}
    default: return state
  }
}

export const rootReducer = combineReducers({
  theme: themeReducer
})
