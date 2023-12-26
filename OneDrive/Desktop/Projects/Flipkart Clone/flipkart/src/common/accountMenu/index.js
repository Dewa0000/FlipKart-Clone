import { Popover, Typography } from "@mui/material";
import React, { useState } from "react";




const Accountmenu = () => {

    const [el, setEl] = useState(null)

    const handlePopoverOpen = (e) => {
        setEl(e.currentTarget);
    }

    const handlePopoverClose = (e) => {
        setEl(null);
    }
    return (
        <div>
            <Typography
                aria-owns={el ? 'account-menu-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Account <span style={{
                    rotate: el ? "0deg" : "180deg",
                    display: "inline-block"
                }}>^</span>
            </Typography>
            <Popover
                id="account-menu-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={!!1}
                anchorEl={el}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>My Profile</Typography>
                <Typography sx={{ p: 1 }}>Wishlist</Typography>
                <Typography sx={{ p: 1 }}>My Orders</Typography>
                <Typography sx={{ p: 1 }}>Subscribe</Typography>
            </Popover>
        </div>
    )
}

export default Accountmenu;