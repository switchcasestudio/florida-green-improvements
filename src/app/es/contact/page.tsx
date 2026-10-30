import { ContactPage, contactMetadata } from "@/views/contact";

export const metadata = contactMetadata("es");

export default function Page() {
  return <ContactPage locale="es" />;
}
