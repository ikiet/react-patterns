import { useRef, useState } from "react";

export default ({ items, renderChildren, renderKey }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const lastChange = useRef();

  const onChange = (event) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchKeyword(event.target.value);
    }, 500);
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
