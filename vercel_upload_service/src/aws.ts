import  AWS from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    endpoint: process.env.R2_ENDPOINT,
});

export const uploadFile = async (
    fileName: string,
    localFilePath: string
) => {
    const fileContent = fs.readFileSync(localFilePath);

    const response = await s3
        .upload({
            Bucket: process.env.R2_BUCKET_NAME!,
            Key: fileName,
            Body: fileContent,
        })
        .promise();

    console.log(response);
};