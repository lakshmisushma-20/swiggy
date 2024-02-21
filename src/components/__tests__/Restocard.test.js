import { render } from "@testing-library/react";
import Restocard from "../Restocard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Restocard components with props data ", () => {
  render(<Restocard resData={MOCK_DATA} />);
  const name = screen.getByText("Beijing Bites");

  expect(name).toBeInDocument();
});
