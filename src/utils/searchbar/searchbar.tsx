import { RiSearchLine } from "react-icons/ri"

import "./searchbar.scss";

type searchBarProps = {
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    message: string
} 

const SearchBar = ({handleSearchChange, message}:searchBarProps) => {
    return (
        <div className="searchBar">
        <div className="searchBar__lupa">
          <RiSearchLine />
        </div>
        <input
          onChange={handleSearchChange}
          type="search"
          placeholder={message}
        />
      </div>
    )
}

export {SearchBar}