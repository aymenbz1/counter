import {createStore} from 'redux'
import ReducerCounter from '../Reducer/ReducerCounter'

const Store=createStore(ReducerCounter,window.__redux_devtools_extension__ && window.__redux_devtools_extension__())


export default Store;