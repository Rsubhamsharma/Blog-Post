const config ={
    apppwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    apppwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apppwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    apppwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    apppwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey : String(import.meta.env.VITE_TINYMCE_API_KEY)
    
}


export default config 