import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SidebarItem = ({ item, icon: Icon, button, img, addIcon }) => {
  return (
    <Box sx={{ width: "226px", height: "52px", borderRadius: "8px" }}>
      <Stack direction="row" spacing={2}>
        {addIcon && addIcon}
        {Icon && Icon}
        {img && <img src={img} alg="icon" />}
        <Typography
          flex={1}
          sx={{ fontSize: "18px", fontWeight: "200", lineHeight: "25px" }}
        >
          {item.name}
        </Typography>
        {button && <KeyboardArrowRightIcon />}
      </Stack>
    </Box>
  );
};

export default SidebarItem;
