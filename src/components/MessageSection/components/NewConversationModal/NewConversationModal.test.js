import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
import { NewConversationModal } from "./NewConversationModal";

test('click on close updates the state of the component ', async () => {

    const mockHandler = jest.fn();

    render(
        <NewConversationModal showConversationModal={true} setShowConversationModal={mockHandler} ></NewConversationModal>
    )

    const button = await screen.getByLabelText("closeButton");
    fireEvent.click(button);

    await new Promise((r) => setTimeout(r, 1000));

    expect(mockHandler).toBeCalledTimes(1);
})
