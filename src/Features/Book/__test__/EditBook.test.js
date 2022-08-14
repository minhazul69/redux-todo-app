import { render, screen } from "@testing-library/react";
import EditBook from "../EditBook";

test("shows the children when the checkbox is checked", () => {
  render(<EditBook />);
  expect(screen.getByAltText("testMessage")).toBe();
  // fireEvent.click(screen.getByLabelText(/show/i))
  expect(screen.getByAltText("testMessage")).toBe();
});
