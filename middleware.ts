import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const configPath = path.join(process.cwd(), "config.json");
  const raw = fs.readFileSync(configPath, "utf-8");
  const config = JSON.parse(raw);
  
  if (config.site_status === "maintenance" && req.nextUrl.pathname !== "/admin") {
    url.pathname = "/maintenance";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
