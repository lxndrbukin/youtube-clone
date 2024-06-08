import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, login } from "../../store";
import { useGoogleLogin } from "@react-oauth/google";
import { RootState, SessionProps } from "../../store";
import { PiUserCircleThin } from "react-icons/pi";

export default function HeaderRight(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { loggedIn, userData } = useSelector(
    (state: RootState): SessionProps => state.session
  );

  const handleClick = useGoogleLogin({
    onSuccess: async (token) => {
      dispatch(login(token.access_token));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const signIn = (
    <button className="header-signin" onClick={handleClick as any}>
      <PiUserCircleThin /> <span>Sign In</span>
    </button>
  );

  const userActions = (
    <div className="header-user">
      <img src={userData?.picture} alt="" />
    </div>
  );

  return <div className="header-right">{loggedIn ? userActions : signIn}</div>;
}
