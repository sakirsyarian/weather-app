import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather: {},
    loading: true,
    error: null
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        weather: (state, action) => {
            state.weather = action.payload
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        error: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { weather, loading, error } = searchSlice.actions

export default searchSlice.reducer