import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Delete from "./Delete";

const Box = ({ title, button, task, isDeleting, setTasks, isDeleted }) => {
  const addNote = () => {
    alert("click");
  };

  if (button) {
    const boxStyle =
      "rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 title overflow-hidden bg-white";
    return (
      <div className={boxStyle}>
        <h1>{title}</h1>
        <div>
          <Button onClick={addNote} />
        </div>
      </div>
    );
  } else {
    let deletedStyle;
    if (isDeleted) {
      deletedStyle = "delete";
    } else {
      deletedStyle = "";
    }

    // Animation
    const boxStyle = `Box rounded-lg ring-1 ring-gray-900 ring-opacity-5 bg-white note ${deletedStyle}`;
    isDeleting = true;

    if (isDeleting === true) {
      console.log("Deleting");
    }

    if (!isDeleted) {
      return (
        <div className={boxStyle}>
          <h2>
            {title}
            <Delete task={task} setTasks={setTasks} isDeleted={isDeleted} />
          </h2>
        </div>
      );
    }
    return null;
  }
};

Box.defaultProps = {
  title: "Note Taking",
  button: false,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
};

export default Box;
