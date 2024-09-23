import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title");

  const font = fetch(
    new URL("../fonts/og/inter-semibold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#f6f6f6",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 64,
            color: "black",
            letterSpacing: -0.5,
            marginLeft: 75,
            marginBottom: 50,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
};
