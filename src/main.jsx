import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Providers from "./app/provider.jsx";
import "./index.css";

import App from "./App.jsx";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Providers>
        <App />
      </Providers>
    </Provider>
  </StrictMode>
);