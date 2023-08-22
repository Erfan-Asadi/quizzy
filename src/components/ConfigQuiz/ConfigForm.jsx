import React from "react";

const ConfigForm = ({ maxAmount = 50 }) => {
  const max = maxAmount < 50 ? maxAmount : 50;
  return (
    <div>
      <form>
        <input type="text" max={max} placeholder={`max to ${max}`} />
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
