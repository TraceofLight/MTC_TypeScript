import Box from "@mui/system/Box";

const Logo: React.FC = () => {
  return (
    <Box>
      <img
        src={require("assets/images/logo.png")}
        width="200"
        height="200"
        alt=""
      ></img>
    </Box>
  );
};

export default Logo;
