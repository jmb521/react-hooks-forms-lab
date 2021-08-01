import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearch, setSearchResults] = useState("")
  // const [filter, setFilterResults] = useState("")
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const onSearchChange = (values) => {
    // debugger;
    setSearchResults(values.target.value)
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(isSearch.toLowerCase()))
    setItems(filteredItems)
  }

  const onItemFormSubmit = (data) => {
    setItems([...itemData, data])
  }

  
 
  
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
        items={items} 
        search={isSearch} 
        onSearchChange={onSearchChange} 
        onItemFormSubmit={onItemFormSubmit}
        />
    </div>
  );
}

export default App;
