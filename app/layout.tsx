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
		"Barbearia John Official em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado",
	metadataBase: new URL("https://barbeariajohn.com.br"),
	description:
		"Cortes de cabelo masculinos e infantis com agendamento online em Camboriú! Agende seu horário e aproveite nosso desconto exclusivo. Barbearia John Official (Rua Lauro Francisco dos Santos, 944, Monte Alegre). Contato: 47 9 9771-3257. Acesse: barbeariajohn.com.br",
	keywords:["barbearia em Camboriu", "corte de cabelo masculino Camboriu", "corte de cabelo masculino barato Camboriú", "barbearia infantil Centro Camboriú", "barbeiro experiente Monte Alegre Camboriú" ,"corte de cabelo infantil Camboriu", "agendamento online barbearia", "agendamento online corte de cabelo", "desconto corte de cabelo", "barbeiro profissional", "melhor barbearia Camboriu", "barbearia infantil Camboriu", "Monte alegre barbearia", "barba e cabelo Camboriu"],
	openGraph: {
		title:
			"Barbearia John Official em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado",
		description:
			"Cortes de cabelo masculinos e infantis com agendamento online em Camboriú! Agende seu horário e aproveite nosso desconto exclusivo. Barbearia John Official (Rua Lauro Francisco dos Santos, 944, Monte Alegre). Contato: 47 9 9771-3257. Acesse: barbeariajohn.com.br",
		siteName: "Barbearia John Official em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado",
		images: [
			{
				url: "https://barbeariajohn.com.br/barbeariajohn-banner-logo.png",
				width: 1280,
				height: 720,
			},
			{
				url: "https://barbeariajohn.com.br/barbeariajohn-banner-presentation.png",
				width: 1280,
				height: 720,
			},
			{
				url: "https://barbeariajohn.com.br/barbeariajohn-banner-infantil.png",
				width: 1280,
				height: 720,
			},
			{
				url: "https://barbeariajohn.com.br/barbeariajohn-banner-horarios.png",
				width: 1280,
				height: 720,
			}
		],
		locale: "pt-BR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Barbearia John Official em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado",
		description:
			"Cortes de cabelo masculinos e infantis com agendamento online em Camboriú! Agende seu horário e aproveite nosso desconto exclusivo. Barbearia John Official (Rua Lauro Francisco dos Santos, 944, Monte Alegre). Contato: 47 9 9771-3257. Acesse: barbeariajohn.com.br",
		images: ["https://barbeariajohn.com.br/barbeariajohn-twitter-banner.png"],
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
