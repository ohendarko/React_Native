import { Client, Account, ID } from 'react-native-appwrite';


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

export const createUser = () => {
  // Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

