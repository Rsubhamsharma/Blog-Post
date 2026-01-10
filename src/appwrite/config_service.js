import config from "../config/config";
import { Client, Databases, ID, Query, TablesDB } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
    .setEndpoint(config.apppwriteUrl)
    .setProject(config.apppwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userid}){
        try {
           return await this.databases.createDocument(config.apppwriteDatabaseId,
            config.apppwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userid
            }
           
           )
           
        } catch (error) {
            console.log("Appwrite Error::createPost error",error);
           
        }
         }
       
    
async updatePost(slug,{title,content,featuredImage,status}){
    try {
        return await this.databases.updateDocument(config.apppwriteDatabaseId,
            config.apppwriteCollectionId,
            slug,
        {
            title,
            content,
            featuredImage,
            status,
        })
        
    } catch (error) {
        console.log("Appwrite Error::updatePost error",error);
        
        
    }
}
async deletePost(slug){
    try {
        await this.databases.deleteDocument(config.apppwriteDatabaseId,
            config.apppwriteCollectionId,
            slug)
            return true
    } catch (error) {
        console.log("Appwrite Error::deletePost error",error);
        return false
    }
}
async getPost(slug){
    try {
        return await this.databases.getDocument(config.apppwriteDatabaseId,
            config.apppwriteCollectionId,
            slug)
        
    } catch (error) {
        console.log("Appwrite Error::getPost error",error);
        return false
        
    }
}
   async getPosts(queries=[Query.equal("status","active")]){
  try {
      return await this.databases(config.apppwriteDatabaseId,
        config.apppwriteCollectionId,
        queries)
        
   }
   catch(error) {
    console.log("Appwrite Error::getPosts error",error);
    return false
  }
    
}
async uploadFile(File){
    try {
        return await this.bucket.createFile(config.apppwriteBucketId,ID.unique(),File)
        
    } catch (error) {
        console.log("Appwrite Error::uploadFile error",error);
        
    }
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(config.apppwriteBucketId,fileId)
        return true
    } catch (error) {
        console.log("Appwrite Error :: DelteFile Error ",error);
        
    }
}
async getFilePreview(fileId){
    return await this.bucket.getFilePreview(config.apppwriteBucketId,fileId)
}
}
const service = new Service()
export default service