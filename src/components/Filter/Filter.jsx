import { useState } from "react";
import PropTypes from "prop-types";

import { Label } from "./Filter.styled";
export function Filter({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    const filter = value.toLowerCase();
    setFilter(filter);
    onFilter(filter);
  };

  return (
    <Label>
      Find contacts by name
      <input name="filter" value={filter} onChange={handleOnChange}></input>
    </Label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
