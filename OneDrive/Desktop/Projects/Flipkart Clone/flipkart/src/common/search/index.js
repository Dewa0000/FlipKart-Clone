import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




const SearchBar = () => {
    return (
        <Autocomplete
            disablePortal
            id="search_bar"
            options={options}
            sx={{ width: 500, borderRadius: 8, }}
            renderInput={(params) => 
                (<TextField {...params} placeholder="Search for products"  />)}
        />

    );
};

const options = ["Kitchenware","Sanitaryware","Agricultural Products"];

export default SearchBar;
