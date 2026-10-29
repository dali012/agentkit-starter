/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function FirstBentoAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		if (isInView) {
			timeoutId = setTimeout(() => {
				setShouldAnimate(true);
			}, 1000);
		} else {
			setShouldAnimate(false);
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="flex h-full w-full flex-col items-center justify-center gap-5 p-4"
		>
			<div className="pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t from-background to-transparent"></div>
			<motion.div
				className="mx-auto flex w-full max-w-md flex-col gap-2"
				animate={{
					y: shouldAnimate ? -75 : 0,
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 20,
				}}
			>
				<div className="flex items-end justify-end gap-3">
					<motion.div
						className="ml-auto max-w-[280px] rounded-2xl bg-secondary p-4 text-white shadow-[0_0_10px_rgba(0,0,0,0.05)]"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.3,
							ease: "easeOut",
						}}
					>
						<p className="text-sm">
							Vendite, articoli e disponibilità: un unico flusso di lavoro.
						</p>
					</motion.div>
					<div className="flex w-fit flex-shrink-0 items-center rounded-full border border-border bg-background">
						<span className="flex size-8 items-center justify-center text-xs">
							POS
						</span>
					</div>
				</div>
				<div className="flex items-start gap-2">
					<div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-[0_0_10px_rgba(0,0,0,0.05)]">
						<Image
							src="/branding/vestora-logo.png"
							alt=""
							width={40}
							height={40}
							className="size-4 object-contain"
						/>
					</div>

					<div className="relative">
						<AnimatePresence mode="wait">
							{!shouldAnimate ? (
								<motion.div
									key="dots"
									className="absolute top-0 left-0 rounded-2xl border border-border bg-background p-4"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -10 }}
									transition={{
										duration: 0.2,
										ease: "easeOut",
									}}
								>
									<div className="flex gap-1">
										{[0, 1, 2].map((index) => (
											<motion.div
												key={index}
												className="h-2 w-2 rounded-full bg-primary/50"
												animate={{ y: [0, -5, 0] }}
												transition={{
													duration: 0.6,
													repeat: Infinity,
													delay: index * 0.2,
													ease: "easeInOut",
												}}
											/>
										))}
									</div>
								</motion.div>
							) : (
								<motion.div
									key="response"
									layout
									className="absolute top-0 left-0 min-w-[220px] rounded-xl border border-border bg-accent p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)] md:min-w-[300px]"
									initial={{ opacity: 0, x: 10 }}
									animate={{
										opacity: 1,
										x: 0,
									}}
									exit={{ opacity: 0, x: 20 }}
									transition={{
										duration: 0.3,
										ease: "easeOut",
									}}
								>
									<p className="text-sm">
										Punto vendita
										<br />
										Codici a barre
										<br />
										Magazzino
										<br />
										<span className="text-muted-foreground text-xs">
											Illustrazione del flusso operativo
										</span>
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
