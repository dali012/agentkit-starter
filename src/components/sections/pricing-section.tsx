"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

// Update price animation
const PriceDisplay = ({
	tier,
}: {
	tier: (typeof siteConfig.pricing.pricingItems)[0];
}) => {
	const price = tier.price;

	return (
		<motion.span
			key={price}
			className={cn("font-semibold", tier.period ? "text-4xl" : "text-2xl")}
			initial={{
				opacity: 0,
				x: 10,
				filter: "blur(5px)",
			}}
			animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
			transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
		>
			{price}
		</motion.span>
	);
};

export function PricingSection() {
	return (
		<section
			id="pricing"
			className="relative flex w-full flex-col items-center justify-center gap-10 pb-10"
		>
			<SectionHeader>
				<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
					{siteConfig.pricing.title}
				</h2>
				<p className="text-balance text-center font-medium text-muted-foreground">
					{siteConfig.pricing.description}
				</p>
			</SectionHeader>
			<div className="relative h-full w-full">
				<div className="absolute -top-14 left-1/2 -translate-x-1/2">
					<span className="whitespace-nowrap rounded-full border bg-muted px-4 py-2 text-sm">
						Canone mensile
					</span>
				</div>

				<div className="mx-auto grid w-full max-w-6xl gap-4 px-6 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3">
					{siteConfig.pricing.pricingItems.map((tier) => (
						<div
							key={tier.name}
							className={cn(
								"relative grid h-fit grid-rows-[180px_auto_1fr] rounded-xl min-[650px]:h-full min-[900px]:h-fit",
								tier.isPopular
									? "bg-accent md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
									: "border border-border bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02]",
							)}
						>
							<div className="flex flex-col gap-4 p-4">
								<p className="text-sm">
									{tier.name}
									{tier.isPopular && (
										<span className="ml-2 inline-flex h-6 w-fit items-center justify-center rounded-full bg-gradient-to-b from-[1.92%] from-secondary/50 to-[100%] to-secondary px-2 text-sm text-white shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
											Consigliato
										</span>
									)}
								</p>
								<div className="mt-2 flex items-baseline">
									<PriceDisplay tier={tier} />
									<span className="ml-2">
										{tier.period ? `/${tier.period}` : ""}
									</span>
								</div>
								<p className="mt-2 text-sm">{tier.description}</p>
							</div>

							<div className="flex flex-col gap-2 p-4">
								<Link
									href={tier.href}
									className={`flex h-10 w-full cursor-pointer items-center justify-center rounded-full px-4 font-normal text-sm tracking-wide transition-all ease-out active:scale-95 ${
										tier.isPopular
											? `${tier.buttonColor} shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]`
											: `${tier.buttonColor} shadow-[0px_1px_2px_0px_rgba(255,255,255,0.16)_inset,0px_3px_3px_-1.5px_rgba(16,24,40,0.24),0px_1px_1px_-0.5px_rgba(16,24,40,0.20)]`
									}`}
								>
									{tier.buttonText}
								</Link>
							</div>
							<hr className="border-border dark:border-white/20" />
							<div className="p-4">
								<ul className="space-y-3">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-center gap-2">
											<div
												className={cn(
													"flex size-5 items-center justify-center rounded-full border border-primary/20",
													tier.isPopular &&
														"border-border bg-muted-foreground/40",
												)}
											>
												<div className="flex size-3 items-center justify-center">
													<svg
														width="8"
														height="7"
														viewBox="0 0 8 7"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="block dark:hidden"
													>
														<path
															d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
															stroke="#101828"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>

													<svg
														width="8"
														height="7"
														viewBox="0 0 8 7"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="hidden dark:block"
													>
														<path
															d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
															stroke="#FAFAFA"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</div>
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="max-w-3xl space-y-3 px-10 text-muted-foreground text-sm">
				<h3 className="font-semibold text-primary">
					Servizi aggiuntivi, separati dai piani hosting
				</h3>
				<ul className="space-y-2">
					<li>Configurazione iniziale: da €199 una tantum.</li>
					<li>Migrazione ESC → Odoo: da €590, preventivo personalizzato.</li>
					<li>Moduli personalizzati: su preventivo.</li>
				</ul>
				<p>
					La migrazione ESC è un servizio opzionale a pagamento, non incluso
					nell’avviamento hosting standard.
				</p>
				<p>
					Prezzi indicativi, IVA esclusa. Proposte commerciali soggette ad
					approvazione e conferma in preventivo.
				</p>
			</div>
		</section>
	);
}
