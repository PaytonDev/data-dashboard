import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";

export const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome {session?.user?.name}</p>
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Please Login</h2>
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Login
      </Button>
    </div>
  );
};
