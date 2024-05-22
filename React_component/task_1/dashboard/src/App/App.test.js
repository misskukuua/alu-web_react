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
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = shallow(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
  });

  it("checks that alert function is called", () => {
    const spy = jest.spyOn(window, "alert");
    const wrapper = shallow(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('checks that the alert is "Logging you out"', () => {
    const spy = jest.spyOn(window, "alert");
    const wrapper = shallow(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    spy.mockRestore();
  });
});
