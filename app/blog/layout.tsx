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
		"Tiago Silverio Programador – Blog",
	metadataBase: new URL("https://www.tiagosc.com.br/blog"),
	description:
		"Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
	keywords: ["Tecnologia", "Programação", "Desenvolvimento Web", "Blog de Tecnologia", "Artigos de Programação", "Next.js", "JavaScript", "React", "Node.js"],
	openGraph: {
		title:
			"Tiago Silverio Programador – Blog",
		description:
			"Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
		siteName: "Tiago Silverio Programador – Blog ",
		images: [
			{
				url: "https://www.tiagosc.com.br/tiagosc-port.png",
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
			"Tiago Silverio Programador – Blog",
		description:
			"Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
		images: ["https://www.tiagosc.com.br/tiagosc-port.png"],
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
