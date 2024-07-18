import React from "react";
import "@testing-library/jest-dom"
import store from "../../utils/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer";
import { render, screen } from "@testing-library/react";

describe("Testing MainContainer Component", () => {

    it("Should render testid", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <MainContainer />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByTestId("TestMainData");
        expect(data).toBeInTheDocument();
    })

    it("Should render video card", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <MainContainer />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByTestId("TestVideoData");
        expect(data).toBeInTheDocument();
    })
})