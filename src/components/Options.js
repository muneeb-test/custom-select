import React from "react";

const Options = ({
  searchHandler,
  options,
  tags,
  setTags,
  setIsActive,
  setOptions,
  data,
}) => {
  const addTag = (label) => {
    setOptions(data);
    if (tags.includes(label)) {
      return;
    } else {
      setTags([...tags, label]);
    }
    setIsActive(false);
  };

  return (
    <div className="dropdown-items">
      <input
        type="text"
        className="search-box"
        placeholder="Search here"
        onChange={searchHandler}
      />
      {options.map((option, index) => (
        <div
          key={index}
          value={option}
          className="d-item"
          onClick={() => addTag(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Options;
