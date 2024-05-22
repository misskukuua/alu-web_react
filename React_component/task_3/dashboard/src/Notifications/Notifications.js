// Notifications.js
import React, { Component } from "react";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        {/* Your JSX code */}
        {listNotifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
            markAsRead={this.markAsRead}
          />
        ))}
      </>
    );
  }
}

export default Notifications;
