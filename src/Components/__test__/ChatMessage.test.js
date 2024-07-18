import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatMessage from "../ChatMessage";

it("Should render ChatMessages testid", () => {
    render(
        <ChatMessage data={"Md Sahil"} message={"Frontend Developer(React)"} />
    )
    const data = screen.getByTestId("TestChatMessage");
    expect(data).toBeInTheDocument();
})