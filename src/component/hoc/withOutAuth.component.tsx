// import { PaperAirplane } from "heroicons-react";
// import Signin from "../pages/signin";
// import { selectAccessToken, selectUser } from "../store/auth/selector";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const withoutAuth = (Component: any) => {

  const Auth = (props: any) => {
    const router = useRouter();
    const {data: user} = useSession()
    // console.log("came to without ayth",user);
    if (user) {
      router.push("/project");
    } else {
      return <Component {...props} />
    }
    return <></>
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withoutAuth;
