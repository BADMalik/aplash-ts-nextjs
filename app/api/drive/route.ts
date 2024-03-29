import { google } from "googleapis";
import { NextResponse } from "next/server";
import CONFIGS from "../../configs/keys.json";
import fs from "fs";

import { NextApiResponse } from "next";

export async function POST(request: Request, res: NextApiResponse) {
  NextResponse.json({ data: "sda" });
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CONFIGS.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: CONFIGS.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });
  const service = google.drive({ version: "v3", auth });
  const requestBody = {
    name: "photo.jpg",
    fields: "id",
  };
  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream("files/photo.jpg"),
  };
  try {
    const file = await service.files.create({
      requestBody,
      media: media,
    });
    return file.data.id;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
}
