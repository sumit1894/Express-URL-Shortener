
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
