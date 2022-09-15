import React from "react";

const TagsList = ({ tags, removeTag }) => {
  return (
    <div className="tags-list">
      {tags.map((tag, index) => {
        return (
          <div className="tag" key={index}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(tag)}>
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TagsList;
