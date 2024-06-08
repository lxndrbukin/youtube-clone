import "./assets/styles.scss";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./components/App";

const rootDiv = document.querySelector("#root");

if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID!}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  );
}
