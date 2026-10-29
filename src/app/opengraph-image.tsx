import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
export const alt =
	"Vestora Cloud · Il gestionale per il tuo negozio di abbigliamento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function SocialImage() {
	const logo = await readFile(
		join(process.cwd(), "public/branding/vestora-logo.png"),
	);
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#f9fafb",
				color: "#172033",
				padding: 80,
			}}
		>
			<img
				src={`data:image/png;base64,${logo.toString("base64")}`}
				alt=""
				width={120}
				height={120}
			/>
			<div style={{ fontSize: 64, marginTop: 24 }}>Vestora Cloud</div>
			<div style={{ fontSize: 32, marginTop: 24, textAlign: "center" }}>
				Il gestionale cloud per il tuo negozio di abbigliamento.
			</div>
		</div>,
		size,
	);
}
