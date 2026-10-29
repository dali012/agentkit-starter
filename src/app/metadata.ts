import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site";
export const metadata: Metadata = {
	metadataBase: siteUrl,
	title: {
		default: "Vestora Cloud | Gestionale per negozi di abbigliamento",
		template: "%s | Vestora Cloud",
	},
	description: siteConfig.description,
	openGraph: {
		type: "website",
		locale: "it_IT",
		url: siteUrl.origin,
		title: "Vestora Cloud",
		description: siteConfig.description,
		siteName: "Vestora",
	},
	twitter: {
		card: "summary_large_image",
		title: "Vestora Cloud",
		description: siteConfig.description,
	},
	robots: { index: !!process.env.NEXT_PUBLIC_SITE_URL, follow: true },
};
