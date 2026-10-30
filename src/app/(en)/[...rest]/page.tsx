import { notFound } from "next/navigation";

/*
 * Two root layouts leave no single layout for unmatched URLs, so a catch-all
 * sends them to this language's 404. Static so that junk URLs cost no render.
 */
export const dynamic = "force-static";

export default function Page() {
  notFound();
}
