import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';


export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: "com.kod.aora",
  projectId: "67bb56900003f125727b",
  databaseId: "67bb58b60014ed62ce3f",
  userCollectionId: "67bb58eb00115e4e596e",
  videoCollectionId: "67bb5932001fd5c6dcf8",
  storageId: "67bb5b6c00124cc7bffc"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )

    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )
    return newUser
  } catch (error) {
    console.log(error);
    throw new Error(error);
    
  }
}

export async function signIn(email, password) {
  try {
    const active = await account.get(); // Check if user is logged in
    if (active) {
      await account.deleteSession('current'); // Log out the active session
    }
  } catch (error) {
    console.log("No active session found, proceeding with login.");
  }
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session;
  } catch (error) {
    throw new Error(error);
  }
}