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