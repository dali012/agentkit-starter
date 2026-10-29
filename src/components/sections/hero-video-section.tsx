import Image from "next/image";
export function HeroVideoSection() {
	return (
		<div className="relative mt-10 px-6">
			<div className="relative flex aspect-video size-full min-h-[280px] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-border bg-accent p-6 text-center shadow-xl">
				<Image
					src="/branding/vestora-logo.png"
					alt="Vestora"
					width={100}
					height={100}
					priority
					className="size-20 object-contain md:size-24"
				/>
				<p className="font-medium text-xl md:text-3xl">
					Il tuo negozio, in un unico ambiente cloud.
				</p>
				<p className="max-w-lg text-muted-foreground text-sm">
					L’anteprima del prodotto sarà disponibile qui. Richiedi una demo per
					conoscere Vestora Cloud.
				</p>
			</div>
		</div>
	);
}
