import { combineReducers } from 'redux'
import {
  selectedGlossary,
  termsByGlossary
} from './glossaryReducer'

const rootReducer = combineReducers({
  termsByGlossary,
  selectedGlossary
})

export default rootReducer