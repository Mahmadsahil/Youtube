import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import History from "../History";
import { Provider } from "react-redux";
import store from "../../utils/store"

it("Should render", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <History />
            </Provider>
        </BrowserRouter>
    )
    const data = screen.getByTestId("TestEmpty");
    expect(data).toBeInTheDocument();
})