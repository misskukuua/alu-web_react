// Create actions for the UI

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../../../../task_5/dashboard/src/actions/uiActionTypes';

export const login = (email, password) => {
  return { 
    type: LOGIN, 
    user: {
    email,
    password
    } 
  };
};

export const logout = () => {
    return { type: LOGOUT };
};

export const displayNotificationDrawer = () => {
    return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
    return { type: HIDE_NOTIFICATION_DRAWER };
};
