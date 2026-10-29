import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";
export const metadata: Metadata = {
	title: "Privacy",
	robots: { index: false, follow: true },
};
export default function Page() {
	return (
		<InformationPage title="Privacy">
			<p className="rounded-xl border bg-accent p-5">
				Documento da completare prima della messa in produzione. Questa pagina è
				un segnaposto, non un’informativa legale definitiva.
			</p>
			<p>
				L’informativa sul trattamento dei dati personali sarà pubblicata prima
				dell’attivazione dei servizi di contatto.
			</p>
			<p className="text-muted-foreground">
				Da completare: titolare del trattamento e recapiti, finalità e basi
				giuridiche, fornitori coinvolti, conservazione e diritti degli
				interessati.
			</p>
		</InformationPage>
	);
}
