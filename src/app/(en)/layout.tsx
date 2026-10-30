import { RootDocument, rootMetadata, rootViewport } from "@/views/root-document";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
