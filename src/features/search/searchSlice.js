import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searching: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { searching } = searchSlice.actions

export default searchSlice.reducer