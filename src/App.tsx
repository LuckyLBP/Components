import React from "react";
import SearchBtn from "./Components/SearchBtn/SearchBtn";
import "./App.scss";

function App() {
  const handleSearch = () => {
    console.log("Search button clicked");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter pressed");
      event.preventDefault();
    }
  };

  return (
    <>
      <SearchBtn
        placeholder="Search..."
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
      />
    </>
  );
}

export default App;
