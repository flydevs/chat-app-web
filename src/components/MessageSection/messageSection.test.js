import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
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
            createdAt: 1635790742958,
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
  );
});

describe("Message section", () => {
  test("renders Message section component", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    screen.debug();
  });
  waitFor(() => {
    expect(screen.getByTestId("title").innerHTML).toBe("Title: ");
  });
  //----------------------------------------------------------------------------//
  test("At least one of the conversations is being shown", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    expect(await screen.findByText("Edmond Murphy")).toBeInTheDocument();

    screen.debug();
  });
  //----------------------------------------------------------------------------//
  test("All conversations from the context mock being displayed", async () => {
    render(
      <ConversationsProvider>
        <MessageSection />
      </ConversationsProvider>
    );

    expect(await screen.findAllByTestId("card")).toHaveLength(2);

    screen.debug();
  });

  // test("element has class", async () => {     not working yet
  //   render(
  //     <ConversationsProvider>
  //       <MessageSection />
  //     </ConversationsProvider>
  //   );

  //   const unreaded = await screen.getByTestId("container").querySelector([])
  //   expect(await unreaded).toHaveClass("contact");

  //   screen.debug();
  // });
});
