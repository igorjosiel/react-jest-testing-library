import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  it("should render the header component", () => {
    expect(render(<Header />)).toBeTruthy();
  });

  it("should render the header component with the correct class", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass("header");
  });
});
