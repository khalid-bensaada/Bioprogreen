import { useState } from "react";

import SearchHero from "../components/search/SearchHero";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";
import NoResults from "../components/search/NoResults";
import Newsletter from "../components/home/Newsletter";

function Search() {

    const [query, setQuery] = useState("");
    const [hasResults, setHasResults] = useState(true);


    const handleSearch = (value) => {

        setQuery(value);

        // Temporary logic
        // Later replace with API search

        if (value.trim() === "") {
            setHasResults(false);
        } else {
            setHasResults(true);
        }

    };


    return (
        <>
            <SearchHero />


            <SearchInput
                onSearch={handleSearch}
            />


            {hasResults ? (
                <SearchResults
                    query={query}
                />
            ) : (
                <NoResults />
            )}


            <Newsletter />
        </>
    );
}

export default Search;