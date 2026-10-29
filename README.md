# Vestora Cloud — sito marketing italiano

Adattamento del design originale di [AgentKit Starter di Anayat Khan](https://github.com/anayatkhan1/agentkit-starter), distribuito con licenza MIT. La licenza e l’attribuzione originali sono mantenute in LICENSE.

## Sviluppo e verifica

Richiede Node.js 22 LTS e pnpm 10.

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

Il sito non richiede database, autenticazione o chiavi API. Le vecchie route applicative e API sono state rimosse. Layout, tema, griglie e animazioni marketing originali sono mantenuti; testimonianze, marchi e certificazioni dimostrativi sono stati rimossi. L’area anteprima contiene un segnaposto esplicito; i grafici sono illustrativi.

## Configurazione prima della produzione

Copiare `.env.example` in `.env.local` per sviluppo, oppure configurare le variabili in Coolify:

- `NEXT_PUBLIC_SITE_URL`: origine pubblica effettiva per SEO, sitemap e Open Graph. Se assente, l’origine è localhost e viene richiesto di non indicizzare il sito.
- `NEXT_PUBLIC_DEMO_URL`, `NEXT_PUBLIC_CONTACT_URL`: URL esterni HTTP(S) o percorsi locali esistenti. Default `/contatti`. Non impostare URL di pagamento finché non approvati.
- `CONTACT_EMAIL`: casella commerciale reale per il link email nella pagina contatti. Il valore `contatti@vestora.example` è un segnaposto: fino alla sostituzione, la pagina dichiara che l’invio non è attivo. Non esiste un backend di invio né un archivio contatti.

Il sito è prerenderizzato: tutte queste variabili, incluso CONTACT_EMAIL, richiedono una nuova build dopo una modifica. Non sono previsti script di provisioning, pagamenti, webhook o dashboard. Stripe gestirà fatture e abbonamenti esternamente.

Prima della pubblicazione: approvare prezzi e condizioni; completare privacy, cookie, informazioni legali e dati aziendali con informazioni reali; configurare il recapito commerciale e il dominio; fornire eventuali screenshot/video reali. Tutti i prezzi sono proposte indicative IVA esclusa. Migrazione ESC e moduli sono servizi aggiuntivi su preventivo; la migrazione non è inclusa nell’avviamento hosting standard.

## Coolify (Node.js)

Usare build pack Node/Nixpacks, Node.js 22, installazione `pnpm install --frozen-lockfile`, build `pnpm build`, avvio `pnpm start`, porta 3000 (o `PORT` configurata dal runtime). Configurare le variabili prima della build e il dominio pubblico. Non servono servizi database o volumi persistenti. Nessuna distribuzione automatica viene eseguita da questo repository.

## Risultati della verifica

- `pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm build`: completati con esito positivo senza credenziali applicative.
- Verifica HTTP della build locale: home, pagine collegate, ancore, immagini ottimizzate Next.js, logo, favicon, icone, Open Graph, robots e sitemap restituiscono le risposte previste.
- Le route rimosse `/chat`, `/login`, `/sign-in`, `/sign-up`, `/api/chat`, `/api/chats` restituiscono 404.
- Nessun branding AgentKit o collegamento chat nel sito; attribuzione originale mantenuta qui e in LICENSE.
- La pagina contatti dichiara esplicitamente che l’invio non è attivo con il recapito segnaposto.
- Verifica visiva desktop/mobile e interazioni light/dark ancora da completare: il browser dell’ambiente non era disponibile. I breakpoint e il provider dei temi sono preservati; il menu passa alla modalità compatta sotto 1280px per ospitare le etichette italiane.

La prima build nel sandbox era bloccata dall’apertura di una porta locale richiesta da Turbopack; la build eseguita con autorizzazione fuori dal sandbox è riuscita. Nessun merge o deploy effettuato.
