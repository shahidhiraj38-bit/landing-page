import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FLODESK_SUBMISSION_URL =
  "https://form.flodesk.com/forms/6a85d8748db7e5d9c2ab89fa/submit";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = new URLSearchParams();

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      payload.append(key, value);
    }
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(FLODESK_SUBMISSION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
      redirect: "manual",
      signal: controller.signal,
      cache: "no-store",
    });

    const redirectUrl = response.headers.get("location");
    const isRedirect = [301, 302, 303, 307, 308].includes(response.status);

    if (!isRedirect || !redirectUrl) {
      return NextResponse.json(
        { error: "Flodesk did not confirm the form submission." },
        { status: 502 },
      );
    }

    const result = new URL(
      redirectUrl,
      FLODESK_SUBMISSION_URL,
    ).searchParams;

    if (result.get("status") !== "success") {
      return NextResponse.json(
        {
          error:
            result.get("message") ||
            "Flodesk could not accept this form submission.",
        },
        { status: 422 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "The form could not be sent. Please try again." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
