import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.service";
import { jwtDecode } from "jwt-decode";
import { EnumUserRole } from "./types/user.types";

export type TypeJwtDecoded = {
  id: string;
  role: EnumUserRole;
  iat: number;
  exp: number;
};

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isSignInPage = url.includes("/signin");
  const isSignUpPage = url.includes("/signup");
  const isDashboard = url.includes("/dashboard");

  if (isDashboard && refreshToken) {
    const data = jwtDecode(refreshToken) as TypeJwtDecoded;
    console.log(data.role)
    if (data.role === EnumUserRole.admin) {
      return NextResponse.redirect(new URL("/dashboard/home", url));
    } else {
      return NextResponse.redirect(new URL("/", url));
    }
  }

  if (isDashboard) {
    return NextResponse.redirect(new URL("/", url));
  }

  if ((isSignInPage && refreshToken) || (isSignUpPage && refreshToken)) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (isSignInPage || isSignUpPage) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/dashboard"],
};
