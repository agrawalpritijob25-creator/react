import { useEffect, useState } from "react";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const debounceQuery = useState(inputVal, 1000);
  useEffect(() => {
    if (debounceQuery) {
      console.log("api", debounceQuery);
    }
  }, [debounceQuery]);
  return (
    <>
      <input
        type="text"
        value={inputVal ?? ""}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>{debounceQuery}</p>
    </>
  );
};

export default Search;
