import { client } from "@/utils/db";
import { betterAuth, object, string } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb"; 


export const auth = betterAuth({
    database: mongodbAdapter(client),

    user: {
      additionalFields: { 
        username: {
          type: "string",
          required: true,
        },
        country: {
          type: "string",
        },
        university: {
          type: "string",
        },
        department: {
          type: "string",
        },
        role: {
          type: "string",
        },
        experience: {
          type: "string",
        },
      },
    },
    
    emailAndPassword: { 
      enabled: true, 
    }, 
    socialProviders: { 
      github: { 
        clientId: process.env.GITHUB_CLIENT_ID as string, 
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }
    }, 
});