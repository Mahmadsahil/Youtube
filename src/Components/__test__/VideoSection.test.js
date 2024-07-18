import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import store from "../../utils/store"
import { Provider } from "react-redux";
import VideoSection from "../VideoSection";

describe("Testing Video Section Component", () => {

    test("Should render test id", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VideoSection />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByTestId("TestVideoSection")
        expect(data).toBeInTheDocument();
    })

    test("Should render button", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VideoSection />
                </Provider>
            </BrowserRouter>
        )
        const button = screen.getByRole("button", { name: "Subscriber" })
        expect(button).toBeInTheDocument();
    })
})