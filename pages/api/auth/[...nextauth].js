import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
        providers: [
                GoogleProvider({
                        clientId: process.env.GOOGLE_CLIENT_ID,
                        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
                })
        ],
        // jwt: {
        //         encryption: true
        // },
        secret: process.env.JWT_SECRET,

        callbacks: {
                async session({ session, token, user, account }) {
                        session.data = {
                                ...
                                session.user,
                                account,
                        };
                        console.log("Executing session:");
                        session.user.id = token.id;
                        session.accessToken = token.accessToken;
                        console.log(session.data);
                        console.log(session);

                        const response = await fetch('http://127.0.0.1:8000/triplanit/user/', {
                                method: 'GET',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.parse(
                                        {
                                                "email": session.email,
                                        }
                                ),
                        })

                        if(response )
                        

                        return session;
                },
                async jwt(token, user, account, profile, isNewUser) {
                        console.log("Executing jwt");
                        console.log(token);
                        if (account?.accessToken) {
                                token.accessToken = account.accessToken;
                        }
                        return token;
                },
        },
        // callbacks: {
        //         async jwt(token, account) {
        //                 if (account?.accessToken) {
        //                         token.accessToken = account.accessToken
        //                 }
        //                 return token;
        //         },
        //         redirect: async (url, _baseUrl) => {
        //                 if (url === '/user') {
        //                         return Promise.resolve('/')
        //                 }
        //                 return Promise.resolve('/')
        //         }
        // }
});