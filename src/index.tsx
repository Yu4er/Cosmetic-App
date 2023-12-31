import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ModalContainer } from "./components/Modals/ModalContainer";
import { store } from "./store/store";
import { App } from "./App";

import "./index.scss";

//eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- need
const container = document.querySelector("#root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ModalContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
