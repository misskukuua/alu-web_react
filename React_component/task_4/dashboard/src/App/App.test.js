/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  // Existing test cases...
  
});

describe("When ctrl + h is pressed", () => {
  let alertMock;
  let logOutMock;

  beforeAll(() => {
    // Mock window.alert before all tests
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore window.alert after all tests
    alertMock.mockRestore();
  });

  beforeEach(() => {
    // Mock logOut function
    logOutMock = jest.fn();
  });

  it("calls logOut function", () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  it("checks that alert function is called", () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalled();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
  });
});
