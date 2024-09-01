import { useState } from "react";

export default ({ items, renderChildren, renderKey }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={onChange} />
      <ul>
        {filteredItems.map((item) => {
          return <li key={renderKey(item)}>{renderChildren(item)}</li>;
        })}
      </ul>
    </div>
  );
};
