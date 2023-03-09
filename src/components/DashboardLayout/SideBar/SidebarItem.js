import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SidebarItem = ({ item, icon: Icon, button, img, addIcon }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        width: "226px",
        height: "52px",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(62, 123, 250, 0.2)",
        },
        alignItems: "center",
      }}
    >
      {addIcon && addIcon}
      {Icon && Icon}
      {img && <img src={img} alg="iconimage" />}
      <Typography
        flex={1}
        sx={{ fontSize: "18px", fontWeight: "200", lineHeight: "25px" }}
      >
        {item.name}
      </Typography>
      {button && <KeyboardArrowRightIcon />}
    </Stack>
  );
};

export default SidebarItem;
