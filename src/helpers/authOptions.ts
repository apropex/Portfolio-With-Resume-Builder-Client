//

import { login, register } from "@/actions/auth";
import { Account, NextAuthOptions, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedProfile extends Profile {
  picture?: string; // Google
  avatar_url?: string; // GitHub
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "john@mail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as Record<"email" | "password", string>;

        if (!email || !password) return null;

        try {
          const user = await login({ email, password });

          if (user && user?.email) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
              role: user.role,
            };
          } else return null;

          //
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user && (user.id || user.email)) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role || "USER";
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.image = token.image as string;
      }
      return session;
    },

    async signIn({
      user,
      account,
      profile,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: ExtendedProfile | undefined;
    }) {
      if (account?.provider === "google" || account?.provider === "github") {
        try {
          const newUser = await register({
            name: user.name || profile?.name,
            email: user.email || profile?.email || "",
            role: "USER",
            image: user.image || profile?.picture || profile?.avatar_url,
            provider: account.provider,
            providerId: account.providerAccountId,
            isVerified: true,
          });

          if (newUser && (newUser.id || newUser.email)) {
            user.id = newUser.id;
            return true;
          }
          return false;
        } catch (error) {
          console.error("Error registering OAuth user:", error);
          return false;
        }
      }
      return true;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  secret: process.env.NEXT_AUTH_SECRET,

  pages: {
    signIn: "/signin",
    error: "/signin",
  },
};
