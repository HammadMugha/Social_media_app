import { ConnectDB } from "@/constants/connectDB";
import User from "@/constants/models/User";
import NextAuth from "next-auth"
// import connectDB from "./lib/db"
import github from "next-auth/providers/github";
// import { User } from "./models/user.model";

export const authOptions = {
    providers: [
        github({
            clientId: process.env.AUTH_GITHUB_CLIENT_ID,
            clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({session}) {
            try {
                await ConnectDB();
                if (session.user) {
                    const user = await User.findOne({ email: session.user.email });
                    if (user) {
                        session.user._id = user._id;
                        return session;
                    } else {
                        console.log("User not found.");
                    }
                } else {
                    console.log("Invalid session");
                }
            } catch (error) {
                console.log(error); 
                throw error;
            }
        },
        async signIn({ account, profile }) {
            if (account?.provider === 'github') {
                await ConnectDB();
                try {
                    const user = await User.findOne({email:profile?.email});
                    if (!user) {
                        const newUser = await User.create({
                            username: profile?.login,
                            fullname: profile?.name,
                            email: profile?.email,
                            profilePhoto: profile?.avatar_url
                        });
                        await newUser.save();
                    }
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return false;
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET,handler as POST}