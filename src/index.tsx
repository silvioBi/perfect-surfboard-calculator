import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { ChakraProvider } from "@chakra-ui/react";
import {myTheme} from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
