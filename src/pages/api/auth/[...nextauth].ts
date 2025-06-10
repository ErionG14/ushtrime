import { getUser } from "@/api/services/User";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = await getUser(credentials?.email!);
                if (!user) {
                    throw new Error("Emaili nuk ekziston");
                }
                const isValid = await compare(
                    credentials!.password,
                    user.password
                );
                if (!isValid) {
                    throw new Error("Fjalëkalimi i gabuar");
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    emailVerified: user.emailVerified ?? null,
                };
            },
        }),
    ],
    pages: {
        signIn: "/sign-in",
    },
    session: {
        strategy: "jwt" as const,
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);