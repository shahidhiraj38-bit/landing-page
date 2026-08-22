import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();

  const response = await fetch(
    "https://form.flodesk.com/forms/6a85d8748db7e5d9c2ab89fa/submit",
    {
      method: "POST",
      body: new URLSearchParams(
        Array.from(data.entries()).filter(
          (entry): entry is [string, string] => typeof entry[1] === "string",
        ),
      ),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "manual",
    },
  );

  const location = response.headers.get("location");

  if (!location || ![301, 302, 303, 307, 308].includes(response.status)) {
    return NextResponse.json({ error: "Form submission failed." }, { status: 502 });
  }

  const status = new URL(location).searchParams.get("status");

  if (status !== "success") {
    return NextResponse.json({ error: "Flodesk rejected the form." }, { status: 422 });
  }

  return NextResponse.json({ ok: true });
}
