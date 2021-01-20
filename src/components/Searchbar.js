import React, {useState} from "react";
import {Paper, TextField} from "@material-ui/core";

const SearchBar = ({onFormSubmit}) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(query)
    }
    return (
       <div>
           <form onSubmit={handleSubmit} className="form">
               <input placeholder='Search...' value={query} onChange={(event) => setQuery(event.target.value)} className="form-input"/>
           </form>
       </div>
    )
}

export default SearchBar
