import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "harun" },
        password: { label: "Password", type: "password", placeholder: "1234" },
      },
      async authorize(credentials) {
        // Hardcoded default user
        const user = {
          id: "1",
          name: "Harun",
          username: "harun",
          email: "harun2@gmail.com",
          password: "1234",
        };

        if (
          credentials.username === user.username &&
          credentials.password === user.password
        ) {
          return { id: user.id, name: user.name, email: user.email };
        }

        // Invalid credentials
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // তোমার custom login page
    error: "/error", // লগইন error হলে redirect
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
