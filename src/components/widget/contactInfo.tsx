import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { MdLocationOn } from "react-icons/md";

interface BusinessInfo {
  location: string;
  city: string;
  cvr: number;
  email?: string;
  phone?: string;
}

const businessInfo: BusinessInfo = {
  location: "Bjerreager 82",
  city: "7120 Vejle Øst",
  cvr: 42531901,
  phone: "+4550467162",
  email: "kontakt@nj.dk",
};

interface SocialInfo {
  facebook?: string;
}
const socialInfo: SocialInfo = {
  facebook: "https://www.facebook.com",
};

const addressIntroduction = "Vi er din lokale tømrer i Vejle";

const ContactInfo: FC = () => {
  const [largeScreen] = useMediaQuery("(min-width: 1050px)");
  const flexWidth = largeScreen ? "75%" : "100%";
  const displayPhone = businessInfo.phone
    ?.toString()
    .replace(/\B(?=(\d{2})+(?!\d))/g, " "); // Add space after every 2 digits for better display

  return (
    <Box w={"100%"} boxShadow={"xl"} p={"2rem"}>
      <Heading pb={5}>{addressIntroduction}</Heading>
      <Divider />
      <VStack w={"100%"}>
        <Flex align={"center"} justify={"space-between"} w={flexWidth}>
          <Icon as={MdLocationOn} boxSize={"2rem"} />
          <VStack>
            <Text>{businessInfo.location}</Text>
            <Text>{businessInfo.city}</Text>
          </VStack>
        </Flex>
        <Flex align={"center"} justify={"space-between"} w={flexWidth}>
          <Text fontSize={"1rem"} fontWeight={"bold"}>
            CVR:
          </Text>
          <Text>{businessInfo.cvr}</Text>
        </Flex>
        <Flex align={"center"} justify={"space-between"} w={flexWidth}>
          <EmailIcon boxSize={"1.5rem"} />
          <Text>{businessInfo.email}</Text>
        </Flex>
        <Flex align={"center"} justify={"space-between"} w={flexWidth}>
          <PhoneIcon boxSize={"1.5rem"} />
          <Text>{displayPhone}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};
export default ContactInfo;
