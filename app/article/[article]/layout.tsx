import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import AuthSessionProvider from "@/lib/authSessionRegistry";
import type { Metadata, Viewport } from "next";
import prisma from "@/adapter/prisma"

const inter = Inter({ subsets: ["latin"] });

async function getData({ id }: { id: string }) {

	const data = await prisma.post.findFirst({
		where: {
			id: id
		},
		select: {
			title: true,
			subtitle: true,
			image: true,
			author: true,
			profession: true,
			content: true,
			Theme: {
				select: {
					name: true
				}
			}
		}
	})
	return data
}


export const viewport: Viewport = {
	themeColor: "#10100e",
};

export const generateMetadata = async ({ params }: { params: { article: string } }): Promise<Metadata> => {
	const id = params.article;
	const data = await getData({ id });

	return {
		title:
			data?.title || "Tiago Silverio Programador – Blog",
		metadataBase: new URL(`https://www.tiagosc.com.br/article/${id}`),
		description:
			data?.subtitle || "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
		keywords: ["Tecnologia", "Programação", "Desenvolvimento Web", "Blog de Tecnologia", "Artigos de Programação", "Next.js", "JavaScript", "React", "Node.js"],
		openGraph: {
			title:
				data?.title || "Tiago Silverio Programador – Blog",
			description:
				data?.subtitle || "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
			siteName: "Tiago Silverio Programador – Blog ",
			images: [
				{
					url: data?.image || "https://www.tiagosc.com.br/tiagosc-port.png",
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
				data?.title || "Tiago Silverio Programador – Blog",
			description:
				data?.subtitle || "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
			images: [data?.image || "https://www.tiagosc.com.br/tiagosc-port.png"],
		},
	};
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
					<AuthSessionProvider>
						{children}
					</AuthSessionProvider>
				</StyledComponentsRegistry>
			</body>
		</html >
	);
}