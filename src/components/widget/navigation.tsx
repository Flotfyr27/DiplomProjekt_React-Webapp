import { ChevronDownIcon, ChevronRightIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import style from "../../styles/components/Navbar.module.scss";
import Logo from "./logo";
// based on navbar from chakra templates https://chakra-templates.dev/navigation/navbar

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Projekter",
    href: "projekter",
    children: [{ label: "Gulve", href: "projekter/gulve" }],
  },
  {
    label: "Om os",
    href: "om-os",
  },
];

export default function NavBarWithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box>
      <Flex
        bg={"green"}
        color={"gray.600"}
        minHeight={"50px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          marginLeft={{ base: 2 }}
          display={{ base: "flex", md: "none" }}
        >
          <div
            className={`${style.hamburger} ${isOpen ? style.active : ""}`}
            onClick={onToggle}
          >
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </div>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} marginLeft={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link
            as={Button}
            fontSize={"sm"}
            fontWeight={400}
            onClick={() => navigate("/kontakt")}
          >
            Kontakt
          </Link>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";
  const popoverContentBgColor = "white";
  const navigate = useNavigate();

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {/* <NavLink to={`${navItem.href}`}>{navItem.label}</NavLink> */}
              <Link
                as={Button}
                p={4}
                onClick={() => navigate(`${navItem.href}`)}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{ textDecoration: "none", color: linkHoverColor }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minWidth={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const navigate = useNavigate();
  return (
    <Link
      onClick={() => navigate(`${href}`)}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "green.50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex justify={"space-between"} align={"center"}>
        <Flex
          py={2}
          as={Link}
          onClick={() => {
            navigate(`${href}`);
          }}
          // to={`${href ?? "#"}`}
          justify={"space-between"}
          align={"center"}
          _hover={{ textDecoration: "none" }}
        >
          <Text fontWeight={600} color={"gray.600"}>
            {label}
          </Text>
        </Flex>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          marginTop={2}
          paddingLeft={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                onClick={() => navigate(`${child.href}`)}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
