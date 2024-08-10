"use client";
import { SetStateAction, useState } from "react";

interface BreedType {
  id: string | number;
  name: string;
  image?: { url: string };
}

interface Props<T extends BreedType> {
  info: {
    totalBreedsList: T[];
    visibleBreedsList: T[];
  };
  setInfo: React.Dispatch<
    SetStateAction<{
      totalBreedsList: T[];
      visibleBreedsList: T[];
    }>
  >;
}

const FilterForm = <T extends BreedType>({ info, setInfo }: Props<T>) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = info.totalBreedsList
      .filter((breed) => breed.name.toLowerCase().includes(query))
      .map((breed) => breed.name);

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setInfo((prevState) => ({
      ...prevState,
      visibleBreedsList: prevState.totalBreedsList.filter((breed) =>
        breed.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }));
  };

  const handleClear = () => {
    setInfo((prev) => ({ ...prev, visibleBreedsList: info.totalBreedsList }));
    setSuggestions([]);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a breed..."
        className="p-2 border border-gray-300 rounded-lg w-full"
      />
      <div className="w-full mt-2 flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-[45%]"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-[45%]"
        >
          Clear
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default FilterForm;
