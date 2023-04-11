import React, { useState, useSyncExternalStore } from "react"
import { User } from "./User"
import "../App.css";
import Table from "./Table";

const Search = () => {

    const [query,setQuery] = useState();

    return(
        <div>
            <input type="text" placeholder="Search" className="search" onChange={(e) => setQuery(e.target.value)}  />
            <Table/>
        </div>
    )
}

export default Search;
