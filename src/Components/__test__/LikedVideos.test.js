import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/store"
import LikedVideos from "../LikedVideos";

it("Should render", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <LikedVideos />
            </Provider>
        </BrowserRouter>
    )
    const data = screen.getByTestId("TestEmpty");
    expect(data).toBeInTheDocument();
})