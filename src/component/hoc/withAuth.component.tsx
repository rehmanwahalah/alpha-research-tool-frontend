import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/auth/selector";
// import { selectAccessToken, selectUser } from "../../store/auth/selector";
// import { HttpService } from "../../services/base.service";
// import Layout from "../layout/Layout";
// import Login from "../../pages/login";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const accessToken = useSelector(selectAccessToken);

    useEffect(()=>{
      if (!accessToken) {
        router.push("/");
      }
    },[])
    if (accessToken) {
      return <Component {...props} />;
      // If user is logged in, return original component
    }

    return <></>;
  };
  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
