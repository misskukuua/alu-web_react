import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("When isHeader is true renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(1);
    expect(item.prop("colSpan")).toEqual("2");
    expect(item.prop("style")).toHaveProperty("backgroundColor", "#deb5b545");
  });

  it("When isHeader is true renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const items = wrapper.find("th");

    expect(items).toHaveLength(2);
    expect(items.first().text()).toEqual("test");
    expect(items.at(1).text()).toEqual("second");
    expect(items.first().prop("style")).toHaveProperty("backgroundColor", "#deb5b545");
    expect(items.at(1).prop("style")).toHaveProperty("backgroundColor", "#deb5b545");
  });

  it("When isHeader is false renders correctly two td elements within a tr element", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const item = wrapper.find("tr");

    expect(item).toHaveLength(1);
    const tds = item.find("td");
    expect(tds).toHaveLength(2);
    expect(tds.first().prop("style")).toHaveProperty("backgroundColor", "#f5f5f5ab");
    expect(tds.at(1).prop("style")).toHaveProperty("backgroundColor", "#f5f5f5ab");
  });
});
