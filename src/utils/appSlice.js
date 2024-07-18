import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        toggleValue: false,
        videoId: "",
        VideoDetails: "",
        youtubeVideos: "",
        history: [],
        like: [],
    },
    reducers: {
        toggleMenu: (state) => {
            state.toggleValue = !state.toggleValue;
        },
        addVideoId: (state, action) => {
            state.videoId = action.payload;
        },
        addVideoDetails: (state, action) => {
            state.VideoDetails = action.payload;
        },
        RemoveVideoDetails: (state, action) => {
            state.VideoDetails = "";
        },
        RemoveVideoId: (state, action) => {
            state.videoId = "";
        },
        addYoutubeVideos: (state, action) => {
            state.youtubeVideos = action.payload;
        },
        removeYoutubeVideos: (state, action) => {
            state.youtubeVideos = "";
        },
        addToHistory: (state, action) => {
            state.history.push(action.payload);
        },
        removeFromHistory: (state, action) => {
            state.history.length = 0;
        },
        addToLink: (state, action) => {
            state.like.push(action.payload);
        },
        RemoveFromLink: (state, action) => {
            state.like.pop(action.payload);
        },
    }
});

export const { toggleMenu, addVideoId, RemoveVideoId, addYoutubeVideos, removeYoutubeVideos, addVideoDetails, RemoveVideoDetails, addToHistory, removeFromHistory,addToLink,RemoveFromLink } = appSlice.actions;
export default appSlice.reducer;