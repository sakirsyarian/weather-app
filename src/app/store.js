import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '@features/search/searchSlice'
import weatherReducer from '@features/weather/weatherSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        weather: weatherReducer
    }
})