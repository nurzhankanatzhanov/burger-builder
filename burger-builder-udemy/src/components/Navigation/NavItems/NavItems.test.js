import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavItems from "./NavItems";
import NavItem from "./NavItem/NavItem";

/**
 * using Jest and Enzyme to test
 */

configure({ adapter: new Adapter() });

describe("<NavItems>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavItems />);
  });

  it("should render TWO <NavItem> elements if NOT authenticated", () => {
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });

  it("should render THREE <NavItem> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });

  it("should render a LOGOUT tab if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavItem link="/logout">Log Out</NavItem>)).toEqual(
      true
    );
  });
});
