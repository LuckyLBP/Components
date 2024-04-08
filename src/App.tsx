import React from "react";
import SearchBtn from "./Components/SearchBtn/SearchBtn";
import "./App.scss";
import MeatballMenu from "./Components/meatballMenu/MeatballMenu";
import { DragAndDrop } from "./Components/DragDrop/DragAndDrop";

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
      <MeatballMenu />
      <DragAndDrop />
    </>
  );
}

export default App;
