import { shallow, mount } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Notifications />", () => {
  let listNotifications;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong>" } }
    ];
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders the correct number of notifications", () => {
    const wrapper = mount(<Notifications displayDrawer listNotifications={listNotifications} />);
    expect(wrapper.find("NotificationItem").length).toBe(3);
  });

  // Add more tests as needed...
});
