// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('does not rerender when updating the props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications });
    expect(shouldComponentUpdateSpy).toHaveReturnedWith(false);

    shouldComponentUpdateSpy.mockRestore();
  });

  it('rerenders when updating the props with a longer list', () => {
    const initialListNotifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];

    const newListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />);
    
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: newListNotifications });
    expect(shouldComponentUpdateSpy).toHaveReturnedWith(true);

    shouldComponentUpdateSpy.mockRestore();
  });
});
