import { createAuthClient } from "better-auth/react";
import { jwtClient, inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,

  plugins: [
    inferAdditionalFields({
      user: {
        username: {
          type: "string",
          required: true,
        },
        isAdmin: {
          type: "boolean",
          defaultValue: false,
        },
      },
    }),

    jwtClient(),
  ],
});

export const {
  signIn,
  signUp,
  useSession,
  signOut,
} = authClient;