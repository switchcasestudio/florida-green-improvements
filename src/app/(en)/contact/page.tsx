import { ContactPage, contactMetadata } from "@/views/contact";

export const metadata = contactMetadata("en");

export default function Page() {
  return <ContactPage locale="en" />;
}
