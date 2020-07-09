import React from 'react';

const DropDownArea = ({ area, setActArea }) => (
  <option
    data-testid={`${area}-option`}
    value={area}
  >
    {area}
  </option>
);

export default DropDownArea;
