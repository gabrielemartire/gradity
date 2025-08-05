
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/app/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Termini e Condizioni</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            {`Benvenuto su Gradity! Questi termini e condizioni delineano le regole e i regolamenti per l'uso
            del sito web di gradity, situato all'indirizzo gradity.it.`}
          </p>
          <p>
            Accedendo a questo sito web, assumiamo che tu accetti questi termini e condizioni. Non continuare a
            utilizzare gradity.it se non accetti tutti i termini e le condizioni indicati in questa pagina.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Cookie</h2>
          <p>
            Gradity.it non usa cookie.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Licenza</h2>
          <p>
            Salvo diversa indicazione, gradity e/o i suoi licenziatari possiedono i diritti di
            proprietà intellettuale per tutto il materiale su gradity.it. Tutti i diritti di proprietà
            intellettuale sono riservati. Puoi accedere a questo da gradity.it per il tuo uso personale
            soggetto alle restrizioni stabilite in questi termini e condizioni.
          </p>
          <p>Non devi:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Ripubblicare materiale da gradity.it</li>
            <li>Vendere, noleggiare o sub-licenziare materiale da gradity.it</li>
            <li>Riprodurre, duplicare o copiare materiale da gradity.it</li>
            <li>Ridistribuire contenuti da gradity.it</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Riserva dei Diritti</h2>
          <p>
            Ci riserviamo il diritto di richiedere la rimozione di tutti i link o di qualsiasi link particolare al
            nostro sito web. Accetti di rimuovere immediatamente tutti i link al nostro sito web su richiesta. Ci
            riserviamo inoltre il diritto di modificare questi termini e condizioni e la sua politica di collegamento in
            qualsiasi momento. Collegandoti continuamente al nostro sito web, accetti di essere vincolato e di seguire
            questi termini e condizioni di collegamento.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Rimozione di link dal nostro sito web</h2>
          <p>
            Se trovi qualsiasi link sul nostro sito web che è offensivo per qualsiasi motivo, sei libero di contattarci
            e informarci in qualsiasi momento. Prenderemo in considerazione le richieste di rimozione dei link, ma non
            siamo obbligati a farlo o a risponderti direttamente.
          </p>
          <p>
            Non garantiamo che le informazioni su questo sito web siano corrette, non garantiamo la sua completezza o
            accuratezza; né promettiamo di garantire che il sito web rimanga disponibile o che il materiale sul sito web
            sia mantenuto aggiornato.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Disclaimer</h2>
          <p>
            {`Nella misura massima consentita dalla legge applicabile, escludiamo tutte le dichiarazioni, garanzie e
            condizioni relative al nostro sito web e all'uso di questo sito web. Nulla in questo disclaimer:`}
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Limiterà o escluderà la nostra o la tua responsabilità per morte o lesioni personali;</li>
            <li>Limiterà o escluderà la nostra o la tua responsabilità per frode o falsa dichiarazione fraudolenta;</li>
            <li>
              Limiterà una qualsiasi delle nostre o delle tue responsabilità in qualsiasi modo non consentito dalla
              legge applicabile; o
            </li>
            <li>
              Escluderà una qualsiasi delle nostre o delle tue responsabilità che non possono essere escluse ai sensi
              della legge applicabile.
            </li>
          </ul>
          <p>
            Le limitazioni e i divieti di responsabilità stabiliti in questa Sezione e altrove in questo disclaimer: (a)
            sono soggetti al paragrafo precedente; e (b) regolano tutte le responsabilità derivanti dal disclaimer,
            comprese le responsabilità derivanti da contratto, in torto e per violazione del dovere legale.
          </p>
          <p>
            Finché il sito web e le informazioni e i servizi sul sito web sono forniti gratuitamente, non saremo
            responsabili per eventuali perdite o danni di qualsiasi natura.
          </p>
        </CardContent>
      </Card>
    </div>
      <Footer />
    </div>
  )
}
