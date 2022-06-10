import { Heading } from "@chakra-ui/react";
import { FC } from "react";

interface headerProps {
  header: string;
  subheader?: string;
}

const Header: FC<headerProps> = ({ header, subheader }) => {
  return (
    <>
      <Heading as="h2" size="lg">
        {header}
      </Heading>
      {subheader && (
        <Heading as={"h3"} size={"md"}>
          {subheader}
        </Heading>
      )}
    </>
  );
};
export default Header;
