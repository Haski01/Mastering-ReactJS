import config from "../env-variable-import/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DbService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl);
    this.client.setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // create post
  async createArticle({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite database service :: createArticle :: error", error);
    }
  }

  // update post
  async updateArticle(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite database service :: updateArticle :: error", error);
    }
  }

  //  delete post
  async deleteArticle(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("Appwrite database service :: deleteArticle :: error", error);

      return false;
    }
  }

  // get single post
  async getArticle(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite database service :: getArticle :: error", error);

      return false;
    }
  }

  // get all post/ list post
  async getArticles(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite database service :: getAllArticle :: error", error);
      return false;
    }
  }

  /* *************************************************** */

  // file or image upload service/method
  async uploadImage(image) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.userId(),
        image
      );
    } catch (error) {
      console.log("Appwrite database service :: uploadImage :: error", error);
      return false;
    }
  }

  // delete image/file method
  async deleteImage(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);

      return true;
    } catch (error) {
      console.log("Appwrite database service :: deleteImage :: error", error);

      return false;
    }
  }

  // get file preview (preview image)
  getImagePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const dbService = new DbService();

export default dbService;
