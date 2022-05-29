// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await res.unstable_revalidate('/');

  res.status(200).json({ name: 'Hello, world!' })
}
