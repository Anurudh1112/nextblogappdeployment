import dns from 'dns';
dns.setDefaultResultOrder('ipv4first'); 

import mongoose from "mongoose";

export const ConnectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        // PASTE YOUR NEW STRIPPED MULTI-SEED STRING HERE FROM MONGODB ATLAS
        const standardUri = "mongodb://anurudh12:anurudh12345@ac-noiegah-shard-00-00.0pwsuka.mongodb.net:27017,ac-noiegah-shard-00-01.0pwsuka.mongodb.net:27017,ac-noiegah-shard-00-02.0pwsuka.mongodb.net:27017/?ssl=true&replicaSet=atlas-kjqhka-shard-0&authSource=admin&appName=Cluster0";

        await mongoose.connect(standardUri, {
            serverSelectionTimeoutMS: 5000, 
            bufferCommands: false,          
        });
        console.log("DB Connected successfully!");
    } catch (error) {
        console.error("Database connection failure details:", error.message);
        throw error;
    }
}
