import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns/promises";
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("jobHunterList");

dns.setServers(["1.1.1.1","8.8.8.8"])

export const auth = betterAuth({
  //...other options
  database: mongodbAdapter(db,{
     client 
    }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY,
      
    }
  },
  user:{
    additionalFields:{
      role:{
        defaultValue:"seeker"
      }
    }
  }
});