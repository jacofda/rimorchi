<script lang="ts">
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  // ...existing code...
</script>

<svelte:head>
  <title>Chi Siamo - Officine Meccaniche Giacomella</title>
  <meta name="description" content="Scopri la storia e la missione delle Officine Meccaniche Giacomella." />
  <meta name="keywords" content="chi siamo, officine meccaniche, giacomella, azienda, caravan, camper" />
</svelte:head>

<PageHeader
  title="Chi siamo"
  subtitle="Gli auto caravan dell'Officina Meccanica Giacomella"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Chi siamo' }]}
/>

<div class="container mx-auto px-4 py-16">
  <div class="space-y-16 pb-10">
    <div class="space-y-8">
      <div
        class="from-secondary via-secondary/50 to-secondary mx-auto max-w-2xl overflow-hidden rounded-2xl bg-linear-to-r p-8 shadow-xl"
      >
        <div class="relative">
          <h2 class="mb-2 text-center text-3xl font-bold text-white drop-shadow-md">
            O.M.G nel 2026
          </h2>
          <div class="mx-auto h-1 w-32 rounded-full bg-white/50"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <!-- Company Overview -->
        <div class="from-tertiary/5 to-primary/5 rounded-2xl bg-linear-to-br p-8 shadow-lg">
          <h3
            class="from-secondary to-secondary/80 mb-4 bg-linear-to-r bg-clip-text text-center text-2xl font-bold text-transparent xl:text-3xl"
          >
            La Nostra Azienda Oggi
          </h3>
          <p class="text-justify text-base leading-relaxed text-gray-700">
            La nuova ditta
            <strong class="text-secondary">O.M.G. OFFICINE MECCANICHE GIACOMELLA</strong> con sede sempre
            in Valsugana a Grigno (TN) a conduzione famigliare è capitanata dal figlio Giacomella Attilio
            ma con la supervisione del fondatore del marchio VS il Sig. Giacomella Alfeo continua la costruzione
            delle Caravan e Camper.
          </p>
        </div>

        <!-- Production Philosophy -->
        <div class=" from-secondary/5 to-primary/5 rounded-2xl bg-linear-to-br p-8 shadow-lg">
          <h3
            class="from-secondary to-secondary/80 mb-4 bg-linear-to-r bg-clip-text text-center text-2xl font-bold text-transparent xl:text-3xl"
          >
            Costruzione Su Misura
          </h3>
          <p class="text-justify text-base leading-relaxed text-gray-700">
            <strong class="text-secondary"
              >La costruzione dei mezzi viene effettuata su richiesta</strong
            >, facendo sì che ogni mezzo costruito nella nostra officina sia un pezzo unico.
            Ascoltando consigli ed esigenze dei propri clienti ancora affezionati al mitico marchio
            VS che nonostante il tempo e gli anni passati tengono le loro caravan come gioielli.
          </p>
        </div>

        <!-- Heritage & Style -->
        <div class="from-tertiary/5 to-primary/5 rounded-2xl bg-linear-to-br p-8 shadow-lg">
          <h3
            class="from-secondary to-secondary/80 mb-4 bg-linear-to-r bg-clip-text text-center text-2xl font-bold text-transparent xl:text-3xl"
          >
            Il Marchio VS - Tradizione e Qualità
          </h3>
          <p class="text-justify text-base leading-relaxed text-gray-700">
            Il Signor Giacomella Alfeo, costruttore ed inventore del marchio VS, ha dato alla storia
            della Caravan una sua linea particolare, mantenendola fino ai giorni nostri. Con
            determinazione, nonostante i cambiamenti avvenuti negli anni nella costruzione di
            caravan, con la stessa forma indimenticabile un po' "retrò" che la contraddistingue
            dalle altre marche.
          </p>
        </div>

        <!-- Current Production -->
        <div class="from-secondary/5 to-primary/5 rounded-2xl bg-linear-to-br p-8 shadow-lg">
          <h3
            class="from-secondary to-secondary/80 mb-4 bg-linear-to-r bg-clip-text text-center text-2xl font-bold text-transparent xl:text-3xl"
          >
            La Nostra Produzione
          </h3>
          <p class="text-justify text-base leading-relaxed text-gray-700">
            La ditta O.M.G., costruttrice del marchio VS, lavora ancora in Valsugana, costruendo le
            <strong class="text-secondary">Caravan VS</strong>, i
            <strong class="text-secondary">Camper VS</strong> e
            <strong class="text-secondary">Rimorchi O.M.G.</strong> per il trasporto di cose e mezzi speciali
            fatti su richiesta del cliente.
          </p>
        </div>
      </div>
    </div>

    <!-- La Nostra Storia Section -->
    <div class="space-y-8">
      <div
        class="from-secondary via-secondary/50 to-secondary mx-auto max-w-2xl overflow-hidden rounded-2xl bg-linear-to-r p-8 shadow-xl"
      >
        <div class="relative">
          <h2 class="mx-auto mb-2 text-center text-3xl font-bold text-white drop-shadow-md">
            La Nostra Storia
          </h2>
          <div class="mx-auto h-1 w-32 rounded-full bg-white/50"></div>
        </div>
      </div>

      <!-- Quote section -->
      <div class="mx-auto max-w-4xl text-center">
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <p class="text-lg leading-relaxed text-gray-700">
            La ditta <q class="font-semibold">LA GIACOMELLA</q> nasce a Bolzano nel 1946 come
            impresa di costruzioni, successivamente trasformatasi in Officina Meccanica
            <q class="font-semibold">LA GIACOMELLA</q> nell'anno 1954 come costruttrice di macchine levigatrici
            (per il quale ebbe il suo brevetto), costruì la prima Caravan nell'anno 1963 per portare in
            fiera la famiglia (dato che gli alberghi erano troppo cari).
          </p>
        </div>
      </div>

      <!-- Old image -->
      <div class="overflow-hidden rounded-2xl shadow-xl">
        <img
          class="h-auto w-full object-cover"
          alt="Storia OMG"
          src="https://rimorchi.vsomg.it/img/old.jpg"
        />
      </div>

      <!-- Second quote -->
      <div class="mx-auto max-w-4xl text-center">
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <p class="text-lg leading-relaxed text-gray-700">
            Vista la grande soddisfazione avuta nella costruzione della prima caravan, la mente
            ingegnosa del <strong class="text-secondary">Sig. Giacomella Alfeo</strong> decise di
            trasformare la ditta <q class="font-semibold">LA GIACOMELLA</q> per macchine levigatrici in
            costruzione Caravan.
          </p>
        </div>
      </div>

      <!-- Image and text grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div class="md:col-span-4">
          <div class="overflow-hidden rounded-xl shadow-lg">
            <img
              class="h-auto w-full object-cover"
              alt="Depliant storico"
              src="https://rimorchi.vsomg.it/img/depliant.jpg"
            />
          </div>
        </div>
        <div class="md:col-span-8">
          <div class="flex h-full items-center rounded-xl bg-white p-6 shadow-lg">
            <p class="text-base leading-relaxed text-gray-700">
              Nel 1964 già nel pieno della sua attività, partecipò
              <strong class="text-secondary"
                >alla prima fiera di Cadenzano della Federazione Italiana Campeggiatori Caravanning</strong
              >, con oltre quattro ditte: Roller, Etna, Franza, Levante. Trasferitosi in Valsugana
              iniziò la costruzione delle Caravan con il marchio VS (che non è la ditta ma solo il
              marchio).
              <strong class="text-secondary"
                >Nel 1964 presentò alla Fiera del Salone di Torino con i primi cinque modelli di
                caravan VS</strong
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- Text and image grid (reversed) -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div class="md:col-span-8">
          <div class="flex h-full items-center rounded-xl bg-white p-6 shadow-lg">
            <p class="text-base leading-relaxed text-gray-700">
              Negli anni 70/80 la ditta <strong class="text-secondary">O.M.G.</strong> crebbe come
              azienda arrivando all'apice della produzione, costruendo quattro caravan al giorno con
              50 operai, passando poi a 100 operai e costruendo 7 caravan al giorno. Nel 1972 la
              ditta O.M.G. inizia la costruzione dei Camper, con i suoi nomi originali.
              <strong class="text-secondary">Nel 1980 il Sig. Giacomella Attilio</strong> decise di ridimensionare
              e ristrutturare l'azienda e ne sposta la sede a Grigno (TN), dove integra la produzione
              di Caravan e Camper con la costruzione di Rimorchi per il trasporto di cose e mezzi speciali
              su misura.
            </p>
          </div>
        </div>
        <div class="md:col-span-4">
          <div class="overflow-hidden rounded-xl shadow-lg">
            <img
              class="h-auto w-full object-cover"
              alt="Primo caravan OMG"
              src="https://rimorchi.vsomg.it/img/prima.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
