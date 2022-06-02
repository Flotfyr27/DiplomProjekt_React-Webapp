import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/common/generalStyle.module.scss";

const Logo: FC = () => {
  const navigate = useNavigate();
  return (
    <Box boxSize="100px" color={styles.logoBackgroundColour}>
      <Image
        src="/nj_favicon.svg"
        cursor={"pointer"}
        onClick={() => navigate("/")}
        sx={{ backgroundColor: "white", borderRadius: "10px", margin: "5px" }}
      />
    </Box>
  );
};

export default Logo;
