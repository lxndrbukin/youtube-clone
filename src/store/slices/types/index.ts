export type UserData = {
  email: string;
  picture: string;
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
};

export type SessionProps = {
  loggedIn: boolean;
  userData: UserData | undefined;
};
