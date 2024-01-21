import { google } from "googleapis";
import { NextResponse, NextRequest } from "next/server";
import { NextApiResponse } from "next";
import { Readable } from "stream";
export async function POST(request: NextRequest, res: NextApiResponse) {
  const formData = await request.formData();
  let payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    file: formData.get("file"),
    projectPlan: formData.get("projectPlan"),
    launchDate: formData.get("launchDate"),
    budgetInfo: formData.get("budgetInfo"),
  };

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key:
          process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY?.replace(
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
    const sheets = google.sheets({ auth, version: "v4" });
    // if (payload.file) {
    //   let fileName = payload.file?.name.split(".").pop();
    //   console.log({ file: payload.file });
    //   const service = google.drive({ version: "v3", auth });
    //   const requestBody = {
    //     name: payload.file?.name,
    //     fields: "id",
    //   };
    //   const file = formData.get("file");
    //   const fileBuffer = file?.buffer; // Ensure file buffer is not undefined

    //   if (!fileBuffer) {
    //     throw new Error("File buffer is undefined.");
    //   }
    //   const media = {
    //     mimeType: payload.file.type,
    //     body: Readable.from([payload?.file.buffer]),
    //   };
    //   const NewFile = await service.files.create({
    //     requestBody,
    //     media: media,
    //   });
    console.log("File Id:", payload?.budgetInfo?.valueOf());
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: "A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            payload?.name,
            payload?.email,
            payload?.message,
            payload?.subject,
            JSON.parse(payload?.budgetInfo as any)?.value,
            JSON.parse(payload?.launchDate as any)?.value,
            JSON.parse(payload?.projectPlan as any)?.value,
          ],
        ],
      },
    });
    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (e) {
    // console.log({ error: e.message });
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
