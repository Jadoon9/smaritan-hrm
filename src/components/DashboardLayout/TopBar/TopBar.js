import { Box, Paper, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Stack } from "@mui/system";
import TopBarUserCard from "./TopBarUserCard";

const TopBar = () => {
  return (
    <Paper
      style={{
        height: "100px",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        marginRight="108px"
        alignItems="center"
      >
        <Box style={{ color: "#3E7BFA" }}>
          <DashboardIcon />
        </Box>
        <Typography color="#3E7BFA" flex={1}>
          Dashboard
        </Typography>
        <TopBarUserCard />
      </Stack>
    </Paper>
  );
};

export default TopBar;
