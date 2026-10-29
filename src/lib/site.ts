// Public URLs are embedded at build time. Configure before building for production.
export const siteUrl = new URL(
	process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
);
function destination(value: string | undefined, fallback: string) {
	if (!value) return fallback;
	if (value.startsWith("/") && !value.startsWith("//")) return value;
	try {
		const url = new URL(value);
		if (["https:", "http:"].includes(url.protocol)) return url.toString();
	} catch {}
	return fallback;
}
export const contactUrl = destination(
	process.env.NEXT_PUBLIC_CONTACT_URL,
	"/contatti",
);
export const demoUrl = destination(
	process.env.NEXT_PUBLIC_DEMO_URL,
	"/contatti",
);
export const siteConfig = {
	name: "Vestora",
	url: siteUrl.origin,
	description:
		"Vestora Cloud: vendite, magazzino, taglie, colori e più negozi in un gestionale cloud basato su Odoo 18 Community.",
};
