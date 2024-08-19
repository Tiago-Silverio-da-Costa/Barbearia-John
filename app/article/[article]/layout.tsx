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
			data?.title || "Barbearia John Camboriú – Blog",
		metadataBase: new URL(`https://www.barbeariajohn.com.br/article/${id}`),
		description:
			data?.subtitle || "Blog da Barbearia John",
		keywords: ["Tecnologia", "Programação", "Desenvolvimento Web", "Blog de Tecnologia", "Artigos de Programação", "Next.js", "JavaScript", "React", "Node.js"],
		openGraph: {
			title:
				data?.title || "Barbearia John Camboriú – Blog",
			description:
				data?.subtitle || "Blog da Barbearia John",
			siteName: "Barbearia John Camboriú – Blog ",
			images: [
				{
					url: data?.image || "https://www.barbeariajohn.com.br/barbeariajohn-banner-logo.png",
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
				data?.title || "Barbearia John Camboriú – Blog",
			description:
				data?.subtitle || "Blog da Barbearia John",
			images: [data?.image || "https://barbeariajohn.com.br/barbeariajohn-twitter-banner.png"],
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