import { google, drive_v3 } from "googleapis";
import { NextResponse, NextRequest } from "next/server";
import { NextApiResponse } from "next";
import { Readable } from "stream";
type Base64 = string;
export async function POST(request: NextRequest, res: NextApiResponse) {
  const formData = await request.formData();
  let payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    file: formData.get("file") as unknown as File,
    projectPlan: formData.get("projectPlan"),
    launchDate: formData.get("launchDate"),
    budgetInfo: formData.get("budgetInfo"),
  };
  let sheetData = [
    payload?.name,
    payload?.email,
    payload?.message,
    payload?.subject,
    JSON.parse(payload?.budgetInfo as any)?.value,
    JSON.parse(payload?.launchDate as any)?.value,
    JSON.parse(payload?.projectPlan as any)?.value,
  ];
  try {
    let link = null;
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
    const service = google.drive({ version: "v3", auth });
    if (payload?.file) {
      link = await handleGoogleDriveAPI(payload.file, service);
    }
    sheetData = [...sheetData, link ? link : "N/A"];
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [sheetData],
      },
    });
    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

const handleGoogleDriveAPI = async (file: File, service: any) => {
  try {
    if (file) {
      const fileMetadata = {
        name: file.name,
        fields: "id",
        parents: [process.env.NEXT_PUBLIC_FOLDER_ID],
      } as any;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const media = {
        mimeType: file.type,
        body: Readable.from(buffer),
      };

      const NewFile = await service.files.create({
        requestBody: fileMetadata,
        media,
      });
      service.permissions.create({
        requestBody: {
          role: "reader",
          type: "anyone",
        },
        fileId: NewFile.data.id!,
        fields: "id",
      });
      const result = await service.files.get({
        fileId: NewFile.data.id!,
        fields: "webViewLink",
      });
      return result?.data?.webViewLink ? result?.data?.webViewLink : null;
    }
  } catch (e) {
    throw e;
  }
};
