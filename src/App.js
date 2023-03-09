import SideBar from "./components/DashboardLayout/SideBar/SideBar";
import TopBar from "./components/DashboardLayout/TopBar/TopBar";
import MainContent from "./components/DashboardLayout/MainContent/MainContent";
import { Stack } from "@mui/system";

const App = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Stack direction="column">
        <SideBar />
      </Stack>
      <Stack direction="column" flex={1} spacing={2}>
        <TopBar />
        <MainContent></MainContent>
      </Stack>
    </Stack>
  );
};

export default App;
