
//! Express js
/*
import path from "path"
import { readFile, writeFile } from "fs/promises";





const DATA_FILE = path.join("data", "links.json")


//! file reading and writing if no json exist
export const loadLink = async () => {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        return JSON.parse(data)
    } catch (error) {
        if (error.code === "ENOENT") {
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {}
        }
        throw error;
    }
}

//! file save to json

export const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links));
}

*/


//! MongoDB


import { dbClient } from "../config/db-client.js";
import { env } from "../config/env.js";

const db=dbClient.db(env.MONGODB_DATABASE_NAME);
const shortenerCollection=db.collection("shorteners");

//! file reading 
export const loadLink=async()=>{
    return shortenerCollection.find().toArray()
}

//! file save to json
export const saveLinks=async(link)=>{
    return shortenerCollection.insertOne(link);   
}

//! short-code checking

export const getLinkByShortCode=async(shortcode)=>{
    return await shortenerCollection.findOne({shortCode:shortcode})
}






