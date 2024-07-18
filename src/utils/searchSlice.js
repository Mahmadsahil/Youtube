import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: null,
        searchApiResult: null,
        searchKeyword: null,
        searchCache: {},    
    },
    reducers: {
        addSearchResult(state, action) {
            state.searchResult = action.payload;
        },
        addSearchApiResult(state, action) {
            state.searchApiResult = action.payload;
        },
        addSearchKeyword(state, action) {
            state.searchKeyword = action.payload;
        },
        addSearchcache(state, action) {
            const { key, value } = action.payload;
            state.searchCache[key] = value; 
        },
    }
});

export const { addSearchResult, addSearchApiResult, addSearchKeyword, addSearchcache } = searchSlice.actions;
export default searchSlice.reducer;