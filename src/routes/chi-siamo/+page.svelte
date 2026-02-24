<script lang="ts">
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import old from '$lib/assets/old.jpg';
  import prima from '$lib/assets/prima.jpg';
  import depliant from '$lib/assets/depliant.jpg';
</script>

<svelte:head>
  <title>Chi Siamo - Officine Meccaniche Giacomella</title>
  <meta
    name="description"
    content="Scopri la storia e la missione dei rimorichi di Officine Meccaniche Giacomella."
  />
  <meta name="keywords" content="chi siamo, traino, giacomella, azienda, rimorchi" />
</svelte:head>

<PageHeader
  title="Chi siamo"
  subtitle="I rimorchi dell'Officina Meccanica Giacomella"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Chi siamo' }]}
/>

<!-- Main Content -->
<div class="bg-white">
  <!-- O.M.G nel 2026 Section -->
  <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-secondary text-base leading-7 font-semibold">Dal 1946</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">O.M.G nel 2026</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        I rimorchi dell'Officina Meccanica Giacomella
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <!-- Company Overview -->
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
            <svg
              class="text-secondary h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clip-rule="evenodd"
              />
            </svg>
            La Nostra Azienda Oggi
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              La nuova ditta
              <strong class="font-semibold text-gray-900"
                >O.M.G. OFFICINE MECCANICHE GIACOMELLA</strong
              >
              con sede sempre in Valsugana a Grigno (TN) a conduzione famigliare è capitanata dal figlio
              Giacomella Attilio ma con la supervisione del fondatore del marchio VS il Sig. Giacomella
              Alfeo continua la costruzione delle Caravan e Camper.
            </p>
          </dd>
        </div>

        <!-- Production Philosophy -->
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
            <svg
              class="text-secondary h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
              />
            </svg>
            Costruzione Su Misura
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              <strong class="font-semibold text-gray-900"
                >La costruzione dei mezzi viene effettuata su richiesta</strong
              >, facendo sì che ogni mezzo costruito nella nostra officina sia un pezzo unico.
              Ascoltando consigli ed esigenze dei propri clienti ancora affezionati al mitico
              marchio VS che nonostante il tempo e gli anni passati tengono le loro caravan come
              gioielli.
            </p>
          </dd>
        </div>

        <!-- Heritage & Style -->
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-lg leading-7 font-semibold text-gray-900">
            <svg
              class="text-secondary h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.831A4.981 4.981 0 015 14a4.981 4.981 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 33.186 33.186 0 016.668-.83V2.75A.75.75 0 0110 2z"
                clip-rule="evenodd"
              />
            </svg>
            Il Marchio VS - Tradizione e Qualità
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              Il Signor Giacomella Alfeo, costruttore ed inventore del marchio VS, ha dato alla
              storia della Caravan una sua linea particolare, mantenendola fino ai giorni nostri.
              Con determinazione, nonostante i cambiamenti avvenuti negli anni nella costruzione di
              caravan, con la stessa forma indimenticabile un po' "retrò" che la contraddistingue
              dalle altre marche.
            </p>
          </dd>
        </div>

        <!-- Current Production -->
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
            <svg
              class="text-secondary h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                clip-rule="evenodd"
              />
            </svg>
            La Nostra Produzione
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              La ditta O.M.G., costruttrice del marchio VS, lavora ancora in Valsugana, costruendo
              le
              <strong class="font-semibold text-gray-900">Caravan VS</strong>, i
              <strong class="font-semibold text-gray-900">Camper VS</strong>
              e
              <strong class="font-semibold text-gray-900">Rimorchi O.M.G.</strong>
              per il trasporto di cose e mezzi speciali fatti su richiesta del cliente.
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>

  <!-- La Nostra Storia Section -->
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-secondary text-base leading-7 font-semibold">La nostra eredità</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          La Nostra Storia
        </p>
      </div>

      <!-- Quote section -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20">
        <figure class="border-secondary border-l-4 pl-8">
          <blockquote class="text-lg leading-8 font-medium text-gray-900">
            <p>
              La ditta "LA GIACOMELLA" nasce a Bolzano nel 1946 come impresa di costruzioni,
              successivamente trasformatasi in Officina Meccanica "LA GIACOMELLA" nell'anno 1954
              come costruttrice di macchine levigatrici (per il quale ebbe il suo brevetto), costruì
              la prima Caravan nell'anno 1963 per portare in fiera la famiglia (dato che gli
              alberghi erano troppo cari).
            </p>
          </blockquote>
        </figure>
      </div>

      <!-- Old image -->
      <div class="mx-auto mt-16 max-w-5xl">
        <img
          class="aspect-video w-full rounded-2xl object-cover shadow-xl"
          alt="Storia OMG"
          width="1140"
          height="475"
          src={old}
        />
      </div>

      <!-- Second quote -->
      <div class="mx-auto mt-16 max-w-2xl">
        <figure class="border-secondary border-l-4 pl-8">
          <blockquote class="text-lg leading-8 font-medium text-gray-900">
            <p>
              Vista la grande soddisfazione avuta nella costruzione della prima caravan, la mente
              ingegnosa del <strong class="text-secondary font-semibold"
                >Sig. Giacomella Alfeo</strong
              >
              decise di trasformare la ditta "LA GIACOMELLA" per macchine levigatrici in costruzione Caravan.
            </p>
          </blockquote>
        </figure>
      </div>

      <!-- Timeline -->
      <div class="mx-auto mt-16 max-w-5xl">
        <div class="space-y-12">
          <!-- 1964 -->
          <div class="relative flex gap-x-4">
            <div class="absolute top-0 left-0 flex w-6 justify-center">
              <div class="w-px bg-gray-300" style="height: calc(100% + 3rem);"></div>
            </div>
            <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div class="bg-secondary h-2 w-2 rounded-full ring-1 ring-gray-300"></div>
            </div>
            <div class="flex-auto">
              <div class="flex items-center gap-x-4">
                <p class="text-xl leading-6 font-semibold text-gray-900">1964</p>
              </div>
              <div class="mt-4 flex flex-col gap-8 md:flex-row">
                <div class="shrink-0">
                  <img
                    class="h-48 w-36 rounded-lg object-cover shadow-md"
                    width="275"
                    height="369"
                    alt="Depliant storico"
                    src={depliant}
                  />
                </div>
                <div class="flex-1">
                  <p class="text-base leading-7 text-gray-600">
                    Nel 1964 già nel pieno della sua attività, partecipò
                    <strong class="font-semibold text-gray-900"
                      >alla prima fiera di Cadenzano della Federazione Italiana Campeggiatori
                      Caravanning</strong
                    >, con oltre quattro ditte: Roller, Etna, Franza, Levante. Trasferitosi in
                    Valsugana iniziò la costruzione delle Caravan con il marchio VS (che non è la
                    ditta ma solo il marchio).
                    <strong class="font-semibold text-gray-900"
                      >Nel 1964 presentò alla Fiera del Salone di Torino con i primi cinque modelli
                      di caravan VS</strong
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 1970 -->
          <div class="relative flex gap-x-4">
            <div class="absolute top-0 left-0 flex w-6 justify-center">
              <div class="w-px bg-gray-300" style="height: calc(100% + 3rem);"></div>
            </div>
            <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div class="bg-secondary h-2 w-2 rounded-full ring-1 ring-gray-300"></div>
            </div>
            <div class="flex-auto">
              <div class="flex items-center gap-x-4">
                <p class="text-xl leading-6 font-semibold text-gray-900">1970</p>
              </div>
              <div class="mt-4 flex flex-col gap-8 md:flex-row">
                <div class="flex-1">
                  <p class="text-base leading-7 text-gray-600">
                    Negli anni 70 la ditta <strong class="font-semibold text-gray-900"
                      >O.M.G.</strong
                    >
                    crebbe come azienda arrivando all'apice della produzione, costruendo quattro caravan
                    al giorno con 50 operai, passando poi a 100 operai e costruendo 7 caravan al giorno.
                    Nel 1972 la ditta O.M.G. inizia la costruzione dei Camper, con i suoi nomi originali.
                  </p>
                </div>
                <div class="shrink-0">
                  <img
                    width="318"
                    height="224"
                    class="h-48 w-64 rounded-lg object-cover shadow-md"
                    alt="Primo caravan OMG"
                    src={prima}
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 1980 -->
          <div class="relative flex gap-x-4">
            <div class="absolute top-0 left-0 flex w-6 justify-center">
              <div class="w-px bg-gray-300" style="height: calc(100% + 3rem);"></div>
            </div>
            <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div class="bg-secondary h-2 w-2 rounded-full ring-1 ring-gray-300"></div>
            </div>
            <div class="flex-auto">
              <div class="flex items-center gap-x-4">
                <p class="text-xl leading-6 font-semibold text-gray-900">1980</p>
              </div>
              <div class="mt-4">
                <p class="text-base leading-7 text-gray-600">
                  <strong class="font-semibold text-gray-900"
                    >Nel 1980 il Sig. Giacomella Attilio</strong
                  >
                  decise di ridimensionare e ristrutturare l'azienda e ne sposta la sede a Grigno (TN),
                  dove integra la produzione di Caravan e Camper con la costruzione di Rimorchi per il
                  trasporto di cose e mezzi speciali su misura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
