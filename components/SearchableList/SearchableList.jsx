import { useState } from "react";

export default ({ items, children }) => {
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
          return <li key={item.id}>{children(item)}</li>;
        })}
      </ul>
    </div>
  );
};
