import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SideVideoCard from "../SideVideoCard";

it("Should render ChatMessages testid", () => {
    render(
        <SideVideoCard />
    )
    const data = screen.getByTestId("TestSideVideoCard");
    expect(data).toBeInTheDocument();
})