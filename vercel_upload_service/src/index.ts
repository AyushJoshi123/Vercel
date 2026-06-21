import express from "express";
import cors from "cors";
import { generateid } from "./utils.ts";
import { getAllFiles } from "./file.ts";

import { uploadFile } from "./aws.ts";
import { createClient } from "redis";
const publisher = createClient();
await publisher.connect();


import path from "path"

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import {simpleGit} from 'simple-git';
const app = express();
app.use(cors())
app.use(express.json());

// POSTMAN
app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generateid();
    await simpleGit().clone(repoUrl, path.join(__dirname,`output/${id}`));
    const allfiles = getAllFiles(path.join(__dirname,`output/${id}`))
    for (const file of allfiles) {
    await uploadFile(
        file.slice(__dirname.length + 1),
        file
    );
}

    await new Promise((resolve) => setTimeout(resolve, 5000))
    publisher.lPush("build-queue", id);
    // INSERT => SQL
    // .create => 
    publisher.hSet("status", id, "uploaded");
    
    res.json({id : id});


});


app.listen(3000);


