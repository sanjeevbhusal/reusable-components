import { useState } from "react";
import DropDown from "../components/DropDown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelect(option) {
    setSelectedOption(option);
  }

  return (
    <DropDown
      options={options}
      value={selectedOption}
      onChange={handleSelect}
    />
  );
}

export default DropdownPage;
