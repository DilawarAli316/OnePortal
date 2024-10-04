/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Button from "../Button/Button";
import '../CustomizeHeader.css';

const ActionPanel = () => {
  const handleDoneClick = () => {
    // Handle "Done, Let's go" button click
  };

  const handleCancelClick = () => {
    // Handle "Cancel" button click
  };

  return (
    <div className="flex gap-1 items-start self-start mt-2 ">
      <Button variant="primary" onClick={handleDoneClick}>
        <span className="font-[350] font-Avenir">Done, Let's go</span>
      </Button>
      <Button variant="secondary" onClick={handleCancelClick}>
        <span className="font-[350] font-Avenir">Cancel</span>
      </Button>
    </div>
  );
};

export default ActionPanel;
