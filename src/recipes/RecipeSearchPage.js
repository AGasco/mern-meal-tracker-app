import React, { useState } from 'react';
import { BackButton } from '../ui';
import { RecipeSearchResultsList } from './RecipeSearchResultsList';
import { useIngredients } from '../ingredients';
import { useRecipeSearchResults } from './useRecipeSearchResults';

export const RecipeSearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchString, setSearchString] = useState('');
  const { ingredients } = useIngredients();
  const { searchResults } = useRecipeSearchResults(searchString);

  const onSearchClicked = () => {
    setSearchString(searchInput);
  };

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Add Meal to Plan</h1>
        <input
          type="text"
          className="full-width space-before space-after"
          placeholder="Enter keyword here"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="full-width space-after" onClick={onSearchClicked}>
          Search
        </button>
        <RecipeSearchResultsList
          recipes={searchResults}
          ingredients={ingredients}
        />
      </div>
    </div>
  );
};
