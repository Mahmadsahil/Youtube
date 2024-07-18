import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Provider } from "react-redux";
import store from "../../utils/store";

describe("Test Navmenu", () => {

    it("Should render testid", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavMenu />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByTestId("testNavMenu");
        expect(data).toBeInTheDocument();
    })

    it("Should render testid unList", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavMenu />
                </Provider>
            </BrowserRouter>
        )
        const data = screen.getByTestId("unList");
        expect(data).toBeInTheDocument();
    })
})