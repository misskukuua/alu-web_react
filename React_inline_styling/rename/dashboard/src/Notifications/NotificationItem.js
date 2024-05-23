// NotificationItem.js
import React, { memo } from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, value, html, id, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li onClick={handleClick} data-notification-type={type}>
      {value ? value : <span dangerouslySetInnerHTML={html}></span>}
    </li>
  );
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default memo(NotificationItem);
