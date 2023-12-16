import { configureStore } from '@reduxjs/toolkit'
import nameList from "../reducers/reducer"

const store = configureStore({
    reducer: {
        user: nameList
    }
})

export default store