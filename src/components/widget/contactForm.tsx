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
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { FC, useEffect, useState } from "react";
import Header from "../header";
import emailjs from "@emailjs/browser";
import fetchMock from "fetch-mock";

const phoneRegex = /^\d{8}$/gm;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;

export const isPhoneCorrect = (phone: string): boolean => {
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
};

export const isEmailError = (_email: string): boolean => {
  const input = _email.match(emailRegex);
  return input?.length == 1 ? false : true;
};
export const isNameError = (_name: string): boolean => {
  return _name.length <= 1 ? true : false;
};
export const isMessageError = (_message: string): boolean => {
  return _message.length <= 1 ? true : false;
};

const ContactForm: FC = () => {
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // const phoneError = isPhoneCorrect(phoneNum) == false && phoneNum != "";
  // const emailError = isEmailError(email) && email != "";
  // const nameError = isNameError(name) && name != "";
  // const messageError = isMessageError(message) && message != "";
  const [isSmallDevice] = useMediaQuery("(max-width: 600px)");
  const toast = useToast();

  // useEffect(() => {
  //   if (name == "" || phoneNum == "" || email == "" || message == "") {
  //     if (phoneError || emailError || nameError || messageError) {
  //       setIsButtonDisabled(false);
  //     } else {
  //       setIsButtonDisabled(true);
  //     }
  //   }
  // }, [phoneError, nameError, emailError, messageError]);

  function clearDataFromForm() {
    setEmail("");
    setPhoneNum("");
    setName("");
    setMessage("");
  }
  function missingDataToast(field: string) {
    toast({
      title: `Tilføj ${field}`,
      description: `${field} var forkert/mangler`,
      status: "info",
    });
  }

  const onApply = () => {
    if (!isNameError(name)) {
      if (!isPhoneCorrect(phoneNum)) {
        if (!isEmailError(email)) {
          if (!isMessageError(message)) {
            sendFormData(packageFormData(), true);
            return;
          } else {
            missingDataToast("Besked");
          }
        } else {
          missingDataToast("Email");
        }
      } else {
        missingDataToast("Telefonnummer");
      }
    } else {
      missingDataToast("Navn");
    }
  };
  function packageFormData() {
    return {
      from_name: name,
      phone_num: phoneNum,
      message: message,
      reply_to: email,
    };
  }

  function mockSendFormData() {
    const ms = 1600;
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function sendFormData(_emailParams: any, mock: boolean) {
    setIsButtonLoading(true);
    if (mock) {
      mockSendFormData()
        .then(() => {
          console.log("SUCCESS!", 200, "OK");
          console.log(_emailParams);
          clearDataFromForm();
          toast({
            title: "Email sendt!",
            description: "Funktion ikke tilgænglig endnu",
            status: "success",
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log("Error!: ", err);
          toast({
            title: "FEJL!",
            description: "Der forekom en fejl, prøv igen",
            status: "error",
            isClosable: true,
          });
        })
        .finally(() => setIsButtonLoading(false));
    } else {
      emailjs
        .send("service_qk4jtlo", "default", _emailParams, "MwU9pUYvfqDHumEA2")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Email sendt!",
            description: "Tak for din mail",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log("FAILED...", err);
          toast({
            title: "Fejl!",
            description: "Der skete en fejl, prøv igen",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        })
        .finally(() => {
          clearDataFromForm();
          setIsButtonLoading(false);
        });
    }
  }
  return (
    <Grid
      templateRows={`auto ${
        isSmallDevice ? "100px 100px" : "100px"
      } 100px 1fr 70px`}
      templateColumns={`${isSmallDevice ? "1fr" : "1fr 1fr"}`}
      p={"1rem"}
      h={"100%"}
      w={"100%"}
      boxShadow={"lg"}
      rounded={"lg"}
    >
      <GridItem colSpan={isSmallDevice ? 1 : 2} p={"1rem"} rowSpan={1}>
        <Header
          header={"Udfyld formularen -"}
          subheader={"Så vender vi tilbage hurtigst muligt"}
        />
      </GridItem>
      <GridItem p={"1rem"} colSpan={1} rowSpan={1}>
        <FormControl isRequired isInvalid={isNameError(name)}>
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
          {isNameError(name) && (
            <FormErrorMessage>Indtast navn</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={1}>
        <FormControl isRequired isInvalid={isPhoneCorrect(phoneNum)}>
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

          {isPhoneCorrect(phoneNum) && (
            <FormErrorMessage>
              Indtast venligst et gyldigt telefonnummer.
            </FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={isSmallDevice ? 1 : 2}>
        <FormControl isRequired isInvalid={isEmailError(email)}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents={"none"}
              children={<EmailIcon color={"gray.300"} />}
            />
            <Input
              type={"email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputGroup>
          {isEmailError(email) && (
            <FormErrorMessage>
              Indtast venligst en gyldig email.
            </FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <GridItem p={"1rem"} colSpan={isSmallDevice ? 1 : 2}>
        <Box>
          <FormControl isRequired isInvalid={isMessageError(message)}>
            <FormLabel>Din besked</FormLabel>
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            {isMessageError(message) && (
              <FormErrorMessage>Besked mangler!</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </GridItem>
      <GridItem p={"1rem"} colSpan={isSmallDevice ? 1 : 2} rowSpan={1}>
        <Button
          isDisabled={false}
          isLoading={isButtonLoading}
          onClick={() => onApply()}
        >
          Send besked
        </Button>
      </GridItem>
    </Grid>
  );
};
export default ContactForm;
