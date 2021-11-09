import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
import { ConversationsProvider } from "../../stores/ConversationsContext";
import MessageSection from "./index";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            firstName: "Edmond",
            lastName: "Murphy",
            createdAt: 1635790742958,
            profileImg:
              "https://cdn.fakercloud.com/avatars/victor_haydin_128.jpg",
            message: "Perspiciatis ipsum ipsum quidem ullam.",
            unread: true,
            badges: {
              backgroundColor: "#ffffff",
              color: "blue",
              text: "bug"
            },
            id: "1"
          },
          {
            firstName: "Retha",
            lastName: "Erdman",
            createdAt: 1635550431426,
            profileImg: "https://cdn.fakercloud.com/avatars/bigmancho_128.jpg",
            message: "Ea exercitationem unde inventore sunt et suscipit.",
            unread: false,
            badges: {
              backgroundColor: "#ffffff",
              color: "blue",
              text: "bug"
            },
            id: "2"
          }
        ])
    })
  ) as jest.Mock;
});

describe("Message section", () => {
  test("renders Message section component", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );
  });
  expect(screen.findByTestId("messages"));
  //----------------------------------------------------------------------------//
  test("At least one of the conversations is being shown", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    expect(await screen.findByText("Edmond Murphy")).toBeInTheDocument();
  });
  //----------------------------------------------------------------------------//
  test("All conversations from the context mock being displayed", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    expect(await screen.findAllByTestId("card")).toHaveLength(2);
  });

  //----------------------------------------------------------------------------//

  test("element has class unread message if unread true", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const unreaded = await (
      await screen.findByText("Edmond Murphy")
    ).parentElement!.parentElement!;

    expect(await unreaded).toHaveClass("contactCard unread");
  });

  //----------------------------------------------------------------------------//

  test("element has class selected after being clicked", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const selection = await (
      await screen.findByText("Retha Erdman")
    ).parentElement!.parentElement!;

    fireEvent.click(selection);

    expect(await selection).toHaveClass("contactCard selected");
  });

  //----------------------------------------------------------------------------//

  test("element selected class is removed and apllied to the last selected card after clickng it", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const selection1 = await (
      await screen.findByText("Retha Erdman")
    ).parentElement!.parentElement!;

    const selection2 = await (
      await screen.findByText("Edmond Murphy")
    ).parentElement!.parentElement!;

    fireEvent.click(selection1);
    fireEvent.click(selection2);

    expect(await selection1).toHaveClass("contactCard");
    expect(await selection2).toHaveClass("contactCard selected unread");
  });

  //----------------------------------------------------------------------------//

  test("searching edmond should update input value and bring one card back", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const searchbar = screen.getByPlaceholderText(
      "Search messages"
    ) as HTMLInputElement;
    let cards = await screen.findAllByTestId("card");

    await act(async () => {
      fireEvent.change(searchbar, {
        target: { value: "edmond" }
      });
    });

    await new Promise((r) => setTimeout(r, 2000));
    cards = await screen.findAllByTestId("card");

    expect(searchbar.value).toBe("edmond");
    expect(screen.getByText("Edmond Murphy"));
    expect(cards).toHaveLength(1);
  });

  //----------------------------------------------------------------------------//

  test("searching  R should update input value bring both cards back", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const searchbar = screen.getByPlaceholderText(
      "Search messages"
    ) as HTMLInputElement;
    let cards = await screen.findAllByTestId("card");

    await act(async () => {
      fireEvent.change(searchbar, {
        target: { value: "r" }
      });
    });

    await new Promise((r) => setTimeout(r, 2000));
    cards = await screen.findAllByTestId("card");

    expect(searchbar.value).toBe("r");
    expect(cards).toHaveLength(2);
    expect(screen.getByText("Retha Erdman"));
    expect(screen.getByText("Edmond Murphy"));
    screen.debug();
  });
  //----------------------------------------------------------------------------//

  test("searching Retha should update input value bring one card back", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const searchbar = screen.getByPlaceholderText(
      "Search messages"
    ) as HTMLInputElement;
    let cards = await screen.findAllByTestId("card");

    await act(async () => {
      fireEvent.change(searchbar, {
        target: { value: "retha" }
      });
    });

    await new Promise((r) => setTimeout(r, 2000));
    cards = await screen.findAllByTestId("card");

    expect(searchbar.value).toBe("retha");
    expect(cards).toHaveLength(1);
    expect(screen.getByText("Retha Erdman"));
  });

  //----------------------------------------------------------------------------//

  test("shouldn't distinguish uppercase", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    const searchbar = screen.getByPlaceholderText(
      "Search messages"
    ) as HTMLInputElement;
    let cards = await screen.findAllByTestId("card");

    await act(async () => {
      fireEvent.change(searchbar, {
        target: { value: "ReTHa" }
      });
    });

    await new Promise((r) => setTimeout(r, 2000));
    cards = await screen.findAllByTestId("card");

    expect(searchbar.value).toBe("ReTHa");
    expect(cards).toHaveLength(1);
    expect(screen.getByText("Retha Erdman"));
  });
});
