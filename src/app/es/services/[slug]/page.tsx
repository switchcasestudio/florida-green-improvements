import type { Metadata } from "next";
import { ServicePage, serviceMetadata, serviceParams } from "@/views/service";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = serviceParams;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return serviceMetadata("es", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <ServicePage locale="es" slug={(await params).slug} />;
}
