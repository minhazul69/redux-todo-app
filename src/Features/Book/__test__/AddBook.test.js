import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AddBook from "../AddBook";
import store from "../../../app/store";
import { BrowserRouter } from "react-router-dom";
const getBook = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AddBook />
      </BrowserRouter>
    </Provider>
  );
};
test("Add Book input Data 1", () => {
  render(getBook());
  const inputElement = screen.getByPlaceholderText(/Book Title/i);
  expect(inputElement).toBeInTheDocument();
});
test("Add Book input Data 2", () => {
  render(getBook());
  const inputElement = screen.getByPlaceholderText(/Author Name/i);
  expect(inputElement).toBeInTheDocument();
});

test("test form button", () => {
  render(getBook());
  const formButton = screen.getByTestId("button");
  expect(formButton).toBeInTheDocument();
});
