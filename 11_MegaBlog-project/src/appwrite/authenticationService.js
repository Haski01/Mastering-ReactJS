import config from "../env-variable-import/config";

import { Client, Account, ID } from "appwrite";

// better approach of below code

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // create account method (sign-up user)
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // if user account created call login method to login into website
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // login method (sign-in user)
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // getting current user to check is user from the session login or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    // if by chance try-catch fail
    return null;
  }

  // log-out user
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;

// document code

/*
const client = new Client()
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("<PROJECT_ID>"); // Your project ID

const account = new Account(client);

const user = await account.create(ID.unique(), "email@example.com", "password");
*/
