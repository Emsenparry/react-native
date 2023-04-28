import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const items = [
    { label: "Select 1", value: "one" },
    { label: "Select 2", value: "two" },
    { label: "Select 3", value: "three" },
  ];

  return (
    <View>
      <SelectDropdown
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={(val) => setCurrentValue(val)}
        maxHeight={200}
        autoScroll

        placeholder="Select something"
      />
    </View>
  );
};
