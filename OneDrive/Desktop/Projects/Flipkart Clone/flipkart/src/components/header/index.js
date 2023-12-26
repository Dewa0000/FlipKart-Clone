

import { Box, Card, Typography } from "@mui/material";
import React from "react";
import logo from "../../Assets/fkheaderlogo_exploreplus-44005d.svg";
import "./header.css";
import SearchBar from "../../common/search";
import Popover from '@mui/material/Popover';
import Accountmenu from "../../common/accountMenu";





const Header = () => {
    return (
        <Box>
            <Card sx={{ borderRadius: 0,
                        padding: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8 }}>
                <img src={logo} alt="logo" className="heder_logo" />
                <SearchBar />
                <Accountmenu />
            </Card>
        </Box>
    );
};

export default Header;