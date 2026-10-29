import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";
export const metadata: Metadata = { title: "Contatti e demo" };
export default function ContactPage() {
	const email = process.env.CONTACT_EMAIL;
	const validEmail =
		email &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
		!email.endsWith(".example");
	return (
		<InformationPage title="Parliamo del tuo negozio">
			<p className="text-muted-foreground">
				Richiedi una demo di Vestora Cloud o una consulenza per valutare il
				piano adatto alla tua attività.
			</p>
			<p>
				Per prepararci, indica il numero di negozi e di postazioni cassa, il
				gestionale attuale e le funzionalità che ti interessano.
			</p>
			{validEmail ? (
				<a
					className="inline-flex rounded-full bg-secondary px-6 py-3 text-sm text-white"
					href={`mailto:${email}?subject=Richiesta%20demo%20Vestora%20Cloud`}
				>
					Scrivici per una demo
				</a>
			) : (
				<div className="space-y-3 rounded-xl border bg-accent p-6">
					<h2 className="font-semibold">Recapito in aggiornamento</h2>
					<p>
						I contatti commerciali saranno disponibili su questa pagina. L’invio
						delle richieste demo non è ancora attivo.
					</p>
				</div>
			)}
			<p className="text-muted-foreground text-sm">
				La richiesta di informazioni non attiva un abbonamento. Piani, servizi
				aggiuntivi e condizioni saranno confermati in preventivo.
			</p>
		</InformationPage>
	);
}
