import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";
export const metadata: Metadata = {
	title: "Informazioni legali",
	robots: { index: false, follow: true },
};
export default function Page() {
	return (
		<InformationPage title="Informazioni legali">
			<p className="rounded-xl border bg-accent p-5">
				Documento da completare prima della messa in produzione. Questa pagina è
				un segnaposto, non un’informativa legale definitiva.
			</p>
			<p>
				I dati identificativi dell’attività e le condizioni commerciali sono in
				fase di completamento.
			</p>
			<p className="text-muted-foreground">
				Da inserire: ragione sociale, Partita IVA, sede, recapiti ufficiali e
				condizioni del servizio. Vestora Cloud è basato su Odoo 18 Community.
				Non viene dichiarata alcuna partnership o certificazione ufficiale Odoo.
			</p>
		</InformationPage>
	);
}
