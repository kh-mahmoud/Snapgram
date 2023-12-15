import { Client,Avatars,Storage,Account,Databases } from "appwrite";


export const appwriteConfig=
{
  url:import.meta.env.VITE_APPWRITE_URL,
  projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID,
  usersCollection:import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  savesCollection:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
  postsCollection:import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
  followersCollection:import.meta.env.VITE_APPWRITE_FOLLOWERS_COLLECTION_ID

}


export const client =new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const avatars =new Avatars(client);
export const storage =new Storage(client);
export const account =new Account(client);
export const databases =new Databases(client);