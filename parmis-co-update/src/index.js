import React from "react";

// Api Graphql
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// Style
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cla1ikge70yom01ui51ez8eb5/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
