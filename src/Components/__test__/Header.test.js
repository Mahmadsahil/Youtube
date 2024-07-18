import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/store"
import Header from "../Header";

describe("Testing Header Component", () => {

    it("Should render image", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByAltText("youtube-logo");
        expect(data).toBeInTheDocument();
    })

    it("Should render input", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByRole("textbox");
        expect(data).toBeInTheDocument();
    })

    it("Should render button", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByRole("button");
        expect(data).toBeInTheDocument();
    })
})