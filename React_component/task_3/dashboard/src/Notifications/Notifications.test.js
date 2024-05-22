// Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  it("should log the message when calling markAsRead function", () => {
    const spy = jest.spyOn(console, "log");
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith("Notification 1 has been marked as read");
    spy.mockRestore();
  });
});
