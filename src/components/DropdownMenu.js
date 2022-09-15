import React, { useState } from "react";
import data from "../data";
import Options from "./Options";
import TagsList from "./TagsList";

const DropdownMenu = () => {
  const [options, setOptions] = useState(data);
  const [tags, setTags] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const filteredOptions = data.filter((op) =>
      op.value.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const removeTag = (remove) => {
    setTags((tags) => tags.filter((tag) => tag !== remove));
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <div className="tags-container" onClick={() => setIsActive(!isActive)}>
        {!tags.length ? (
          "Select Fruits"
        ) : (
          <TagsList tags={tags} removeTag={removeTag} />
        )}
        <span className="open">v</span>
      </div>
      {isActive && (
        <Options
          searchHandler={searchHandler}
          options={options}
          setOptions={setOptions}
          setIsActive={setIsActive}
          tags={tags}
          setTags={setTags}
          data={data}
        />
      )}
    </div>
  );
};

export default DropdownMenu;
