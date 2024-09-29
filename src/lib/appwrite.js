import { Client, Account, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f933a40000d303a08c');

export const account = new Account(client);

export { ID };