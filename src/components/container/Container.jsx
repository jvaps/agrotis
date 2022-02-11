import { Box } from "@mui/system";
import "./Container.css";
const Container = (props) => {
  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
      {props.children}
    </Box>
  );
};

export default Container;
