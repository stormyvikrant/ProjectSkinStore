import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-pdzdss8p3vtolnn1.us.auth0.com"
    clientId="Ogju5GoD0TPgb64x7FrXpgoEidGiu8f8"
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
