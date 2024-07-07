import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const proximaNova = localFont({
	src: [
		{
			path: "../public/fonts/ProximaNovaBold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/ProximaNovaBoldItalic.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../public/fonts/ProximaNovaRegular.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/ProximaNovaRegularItalic.otf",
			weight: "500",
			style: "italic",
		},
	],
})

export const viewport: Viewport = {
	themeColor: "#201f20",
};

export const metadata: Metadata = {
	title:
		"Barbearia John – Agende seu horário e venha fazer um corte conosco.",
	metadataBase: new URL("https://barbeariajohn.com"),
	description:
		"Corte de cabelo masculino e infantil. Agende seu horário e venha fazer um corte conosco.",
	keywords: "barbearia, corte de cabelo, cabelo masculino, cabelo infantil, agendamento, corte de cabelo masculino, corte de cabelo infantil, barbeiro, Barbearia John",
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
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-YX55D1314H"></Script>
			<Script
				id="gtm"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YX55D1314H');
					`
				}}
			/>
			<body className={proximaNova.className}>
			<noscript 
			dangerouslySetInnerHTML={{
				__html: `
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWMQFS6D"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
				`
			}}
			/>
				{children}
				</body>
		</html>
	);
}
