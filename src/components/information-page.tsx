import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
export function InformationPage({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="relative mx-auto min-h-screen max-w-7xl border-x px-6 py-10 md:px-14">
			<header className="flex items-center justify-between border-b pb-6">
				<Link href="/" className="flex items-center gap-3 font-semibold">
					<Image
						src="/branding/vestora-logo.png"
						alt=""
						width={40}
						height={40}
					/>
					Vestora
				</Link>
				<ThemeToggle />
			</header>
			<main className="mx-auto max-w-3xl space-y-6 py-20">
				<h1 className="font-medium text-3xl tracking-tight md:text-5xl">
					{title}
				</h1>
				{children}
				<p className="pt-6">
					<Link href="/" className="underline underline-offset-4">
						Torna alla pagina iniziale
					</Link>
				</p>
			</main>
		</div>
	);
}
