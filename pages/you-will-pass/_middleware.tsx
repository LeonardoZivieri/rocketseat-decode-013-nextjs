import { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (Math.random() > 0.5) {
    return new Response("Not Passed", { status: 401 })
  }
}
