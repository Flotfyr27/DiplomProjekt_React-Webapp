import { Box, Text, useToast } from "@chakra-ui/react";
import { FC } from "react";

const MapLocation: FC = () => {
  const toast = useToast();
  return (
    <Box>
      <Text>Google Maps</Text>
    </Box>
  );
};
export default MapLocation;
