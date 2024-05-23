import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Define styles for rows
  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };

  let element;

  if (isHeader) {
    // If it's a header row
    if (textSecondCell === null) {
      element = <th colSpan="2" style={headerStyle}>{textFirstCell}</th>;
    } else {
      element = (
        <>
          <th style={headerStyle}>{textFirstCell}</th>
          <th style={headerStyle}>{textSecondCell}</th>
        </>
      );
    }
  } else {
    // If it's a regular row
    element = (
      <>
        <td style={rowStyle}>{textFirstCell}</td>
        <td style={rowStyle}>{textSecondCell}</td>
      </>
    );
  }

  return <tr>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
