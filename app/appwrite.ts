import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64c3fd48ed9059183d85")



export const account = new Account(client);
export { ID } from "appwrite";
