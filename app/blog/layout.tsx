import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: "#10100e",
};

export const metadata: Metadata = {
	title:
		"Barbearia John Camboriú – Blog",
	metadataBase: new URL("https://www.barbeariajohn.com.br/blog"),
	description:
		"Blog da Barbearia John",
	keywords: ["Tecnologia", "Programação", "Desenvolvimento Web", "Blog de Tecnologia", "Artigos de Programação", "Next.js", "JavaScript", "React", "Node.js"],
	openGraph: {
		title:
			"Barbearia John Camboriú – Blog",
		description:
			"Blog da Barbearia John",
		siteName: "Barbearia John Camboriú – Blog ",
		images: [
			{
				url: "https://www.barbeariajohn.com.br/barbeariajohn-banner-logo.png",
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
			"Barbearia John Camboriú – Blog",
		description:
			"Blog da Barbearia John",
		images: ["https://www.barbeariajohn.com.br/barbeariajohn-banner-logo.png"],
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html >
	);
}
