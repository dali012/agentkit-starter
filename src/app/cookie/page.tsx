import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";
export const metadata: Metadata = {
	title: "Cookie",
	robots: { index: false, follow: true },
};
export default function Page() {
	return (
		<InformationPage title="Cookie">
			<p className="rounded-xl border bg-accent p-5">
				Documento da completare prima della messa in produzione. Questa pagina è
				un segnaposto, non un’informativa legale definitiva.
			</p>
			<p>
				Le informazioni sui cookie e sulle tecnologie di memorizzazione saranno
				completate prima della pubblicazione definitiva.
			</p>
			<p className="text-muted-foreground">
				La scelta del tema viene salvata nel browser. L’elenco delle tecnologie
				effettivamente utilizzate, i tempi di conservazione e le eventuali
				preferenze dovranno essere verificati nella configurazione di
				produzione.
			</p>
		</InformationPage>
	);
}
