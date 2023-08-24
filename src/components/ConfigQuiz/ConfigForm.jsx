import React from "react";

const ConfigForm = ({ maxAmount = 50, handleAmountValue }) => {
  const max = maxAmount < 50 ? maxAmount : 50;

  const changeHandler = (e) => {
    const value = parseInt(e.target.value);
    if (value >= max) {
      handleAmountValue(max); //
    } else {
      handleAmountValue(value);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          max={max}
          placeholder={`max to ${max}`}
          onChange={(e) => changeHandler(e)}
        />
      </form>
      <ul className="dangers-list">
        {max < 50 && (
          <li>
            Only ${max} questions are available for your chosen difficulty
            level.
          </li>
        )}
      </ul>
    </div>
  );
};

export default ConfigForm;
