import fs from "fs";
import path from "path";

export function getAllFiles(folderPath: string): string[] {
    let files: string[] = [];

    const items = fs.readdirSync(folderPath);

    for (const item of items) {
        const fullPath = path.join(folderPath, item);

        if (fs.statSync(fullPath).isDirectory()) {
            files = files.concat(getAllFiles(fullPath));
        } else {
            files.push(fullPath);
        }
    }

    return files;
}

// const id = "123";
// const rootPath = path.join("output", id);

// const allFiles = getAllFiles(rootPath);

// console.log(allFiles);