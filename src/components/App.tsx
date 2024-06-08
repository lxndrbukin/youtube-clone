import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, login } from "../store";
import Header from "./Header/Header";

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token") as string;
    dispatch(login(accessToken));
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="container">APP</main>
    </div>
  );
}
