import React from "react";
import styles from "./Searchbar.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function SearchBar({ onSearch }) {

    const [search, setSearch] = React.useState("");


    function onSubmit(e) {
        e.preventDefault();
        onSearch(search);
    }

    return (
        <div className={styles.wrapper}>
            <form
                onSubmit={onSubmit}
            >
                <input
                    className="search"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='search' />
                <button type="submit">
                    <SearchIcon />{null}
                </button>
            </form>
        </div>
    );
}