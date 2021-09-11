import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import SearchReducer from './search/SearchReduce'

const combineAll = combineReducers({
    search: SearchReducer
})

const Store = createStore(
    combineAll,
    composeWithDevTools()
)

export type RootState = ReturnType<typeof Store.getState>
export default Store