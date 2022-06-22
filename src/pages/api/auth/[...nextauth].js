import NextAuth from 'next-auth';
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: "ZN8BasIATQM1lFfimzWuJ96sQ",
      clientSecret: "Dhwiqplweoq1YedgH19qrYK2LTODezvvOvuDbI57N4SY8cVQ4g"
    })
  ]
});