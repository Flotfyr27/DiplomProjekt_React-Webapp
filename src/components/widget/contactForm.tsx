import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { FC, useState } from "react";
import Header from "../header";

const ContactForm: FC = () => {
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const phoneRegex = new RegExp("/^[0-9]{8}$/gm");

  const phoneError = !verifyPhoneNumber(phoneNum) && phoneNum != "";

  console.log(phoneError);
  function verifyPhoneNumber(phone: string): boolean {
    if (phone.length == 8) {
      const input = phone.match(phoneRegex);
      if (input?.length == 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const onApply = () => {};

  return (
    <Grid
      templateRows={"100px 100px 100px 1fr 70px"}
      templateColumns={"repeat(2, 1fr)"}
      p={"1rem"}
      h={"100%"}
      boxShadow={"2xl"}
      rounded={"lg"}
    >
      <GridItem colSpan={2} p={"1rem"} rowSpan={1}>
        <Header
          header={"Kontakt os"}
          subheader={"Så vender vi tilbage hurtigst muligt"}
        />
      </GridItem>
      <GridItem p={"1rem"} colSpan={1}>
        <FormControl isRequired>
          <FormLabel>Navn</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents={"none"}
              children={<Icon as={MdPerson} />}
            />
            <Input
              placeholder={"Navn"}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </InputGroup>
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={1}>
        <FormControl isRequired isInvalid={phoneError}>
          <FormLabel>Telefonnummer</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents={"none"}
              children={<PhoneIcon color={"gray.300"} />}
            />
            <Input
              type={"tel"}
              pattern={"[0-9]{8}"}
              value={phoneNum}
              onChange={(event) => setPhoneNum(event.target.value)}
            />
          </InputGroup>

          {phoneError && (
            <FormErrorMessage>
              Indtast venligst et gyldigt telefonnummer.
            </FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={2}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents={"none"}
              children={<EmailIcon color={"gray.300"} />}
            />
            <Input type={"email"} />
          </InputGroup>
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={2}>
        <FormControl isRequired>
          <FormLabel>Din besked</FormLabel>
          <Textarea h={"100%"} />
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={2}>
        <Button type="submit">Send besked</Button>
      </GridItem>
    </Grid>
  );
};
export default ContactForm;
