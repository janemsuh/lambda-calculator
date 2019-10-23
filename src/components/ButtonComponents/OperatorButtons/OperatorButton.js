import React from "react";

const OperatorButton = (banana) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {banana.operator}
    </button>
  );
};

export default OperatorButton;