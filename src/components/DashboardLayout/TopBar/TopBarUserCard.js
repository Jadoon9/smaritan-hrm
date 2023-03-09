import { Avatar, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TopBarUserCard = () => {
  return (
    <Paper
      sx={{
        padding: "7px 15px 7px 15px",
        // backgroundColor: 'rgba(62, 123, 250, 0.2)';
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar />
        <Stack direction="column">
          <Typography>John Doe</Typography>
          <Typography>Software Developer</Typography>
        </Stack>
        <KeyboardArrowRightIcon />
      </Stack>
    </Paper>
  );
};

export default TopBarUserCard;
