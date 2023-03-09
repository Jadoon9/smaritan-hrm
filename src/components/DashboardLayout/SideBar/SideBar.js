import { Box, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import logo from "../../../assets/logo.png";
import SidebarItem from "./SidebarItem";

// Iconsss
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import Slack from "../../../assets/slack.png";
import Trello from "../../../assets/trello.png";
import Clickup from "../../../assets/clickup.png";

const navItems = [
  { id: 1, name: "Dashboard", icon: <DashboardIcon /> },
  { id: 2, name: "Salaries", icon: <MonetizationOnIcon /> },
  { id: 2, name: "Attendance", icon: <CalendarTodayIcon /> },
  { id: 2, name: "Projects", icon: <FolderCopyIcon /> },
  { id: 2, name: "Polices", icon: <StickyNote2Icon /> },
];
const socialPlatforms = [
  { id: 1, name: "Slack", img: Slack },
  { id: 2, name: "Clickup", img: Clickup },
  { id: 2, name: "Trello", img: Trello },
];

const SideBar = () => {
  return (
    <Paper
      sx={{ height: "100vh", width: "280px" }}
      // style={{ backgroundColor: "yellow" }}
    >
      <Box>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box marginTop={2} marginBottom={4}>
            <img src={logo} alt="logo" />
          </Box>

          <Box alignItems="center" flex={1}>
            {navItems.map((item, idx) => {
              return (
                <SidebarItem key={idx} item={item} idx={idx} icon={item.icon} />
              );
            })}
          </Box>

          <Box sx={{ float: "end" }}>
            {socialPlatforms.map((item, idx) => {
              return (
                <SidebarItem
                  key={idx}
                  item={item}
                  idx={idx}
                  img={item.img}
                  button={true}
                />
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default SideBar;
