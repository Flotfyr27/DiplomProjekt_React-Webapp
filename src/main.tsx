import { ChakraProvider } from "@chakra-ui/provider";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
// import { createRoot } from "react-dom/client";
import {render} from "react-dom"

// const container = document.getElementById("root");
// const root = createRoot(container!);
const colours = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colours });
// root.render(
//   <ChakraProvider theme={theme}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ChakraProvider>
// );
const container = document.getElementById("root");
render(
<ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>, 
container);