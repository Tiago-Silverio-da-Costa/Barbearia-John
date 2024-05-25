import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: "#000",
};

export const metadata: Metadata = {
	title:
		"Barbearia John – Agende seu horário e venha fazer um corte conosco.",
	metadataBase: new URL("https://barbeariajohn.com"),
	description:
		"Corte de cabelo masculino e infantil. Agende seu horário e venha fazer um corte conosco.",
	openGraph: {
		title:
			"Barbearia John – Agende seu horário e venha fazer um corte conosco.",
		description:
			"Corte de cabelo masculino e infantil. Agende seu horário e venha fazer um corte conosco.",
		siteName: "Barbearia John – Agende seu horário e venha fazer um corte conosco.",
		images: [
			{
				url: "https://barbeariajohn.com/barbeariajohn-banner.png",
				width: 1280,
				height: 720,
			},
		],
		locale: "pt-BR",
		type: "website",
	},
	robots: {
		index: process.env.VERCEL_ENV === "production",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Barbearia John – Agende seu horário e venha fazer um corte conosco.",
		description:
			"Corte de cabelo masculino e infantil. Agende seu horário e venha fazer um corte conosco.",
		images: ["https://barbeariajohn.com/barbeariajohn-banner.png"],
	},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
