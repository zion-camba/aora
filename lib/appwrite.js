import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.zion.aora",
  projectId: "66266a2188e8419bd1d8",
  databaseId: "66266fd58d631c5509b4",
  userCollectionId: "66267030a1da5b1f3b91",
  videioCollectionId: "66267077cbeca515ff29",
  storageId: "6626735aef4991ed931f",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

// Register User
