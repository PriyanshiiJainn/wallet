import { NextResponse } from "next/server";
import auth from "next-auth";
import { authOptions } from "@repo/db/auth";

export const GET = async () => {
  const session = await auth(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "You are not logged in" },
      { status: 403 }
    );
  }

  return NextResponse.json(
    {
      id: session.user.id,
      phone: session.user.phone,
    },
    { status: 200 }
  );
};
