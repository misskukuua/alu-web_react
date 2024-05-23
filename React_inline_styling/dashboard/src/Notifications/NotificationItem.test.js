// NotificationItem.test.js
import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  it("should call markAsRead function with the right ID on click", () => {
    const id = 1;
    const spy = jest.fn();
    const wrapper = shallow(<NotificationItem id={id} markAsRead={spy} />);
    wrapper.find("li").simulate("click");
    expect(spy).toHaveBeenCalledWith(id);
  });
});
