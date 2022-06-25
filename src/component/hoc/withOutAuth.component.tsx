import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/auth/selector";

const withoutAuth = (Component: any) => {

  const Auth = (props: any) => {
    const router = useRouter();
    const accessToken = useSelector(selectAccessToken);

    if (accessToken) {
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
