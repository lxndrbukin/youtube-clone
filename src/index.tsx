import "./assets/styles.scss";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./components/App";

const rootDiv = document.querySelector("#root");

if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
