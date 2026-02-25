<script lang="ts">
  import RimorchioDoppiaAsse from '$lib/assets/rimorchio-doppia-asse.jpg';
  import RimorchioSpondeRinforate from '$lib/assets/rimorchio-sponde-rinforzate.jpg';
  import ArticoliList from '../lib/components/ArticoliList.svelte';
  export let data;
</script>

<!-- Hero Section -->
<div
  class="from-secondary/1 via-secondary/5 to-secondary/1 relative isolate overflow-hidden bg-linear-to-b"
>
  <!-- Decorative Background -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg
      class="stroke-secondary/5 absolute top-0 left-[50%] h-256 w-512 -translate-x-1/2"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hero-pattern"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)" />
    </svg>
    <div
      class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        class="from-primary to-secondary aspect-801/1036 w-200.25 bg-linear-to-tr opacity-20"
        style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
      ></div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        <span class="text-secondary">Rimorchi Personalizzati</span>
        <br />su Misura
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Costruzione artigianale di rimorchi su misura con <span class="text-primary font-semibold"
          >portata fino a 1500kg</span
        >. Qualità, esperienza e professionalità per le tue esigenze di trasporto.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/rimorchi"
          class="bg-secondary hover:bg-secondary/90 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Scopri i Rimorchi
        </a>
        <a
          href="/contatti"
          class="hover:ring-tertiary/50 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
        >
          Contattaci
        </a>
      </div>
    </div>
  </div>

  <div class="mx-auto mb-16 max-w-5xl px-6">
    <h2 class="mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
      Alcune nostre <span class="text-secondary">produzioni recenti</span>
    </h2>
    <p class="text-center text-gray-600">
      Ecco alcuni esempi di rimorchi realizzati su misura per i nostri clienti: robustezza, cura
      artigianale e attenzione ai dettagli.
    </p>
    <div class="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div class="flex flex-col items-center">
        <img
          src={RimorchioDoppiaAsse}
          alt="Rimorchio doppia asse ribaltabile"
          class="mb-4 h-64 w-full rounded-xl object-cover shadow-lg"
          loading="lazy"
        />
        <div class="text-center text-base font-medium text-gray-700">
          Rimorchio doppia asse ribaltabile
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img
          src={RimorchioSpondeRinforate}
          alt="Rimorchio con sponde rinforzate"
          class="mb-4 h-64 w-full rounded-xl object-cover shadow-lg"
          loading="lazy"
        />
        <div class="text-center text-base font-medium text-gray-700">
          Rimorchio con sponde rinforzate
        </div>
      </div>
      <!-- Add a third image if available -->
      <!--
      <div class="flex flex-col items-center">
        <img
          src="URL_TERZO_RIMORCHIO"
          alt="Rimorchio modello X"
          class="rounded-xl shadow-lg object-cover w-full h-64 mb-4"
          loading="lazy"
        />
        <div class="text-base text-gray-700 text-center font-medium">Rimorchio modello X</div>
      </div>
      -->
    </div>
  </div>
</div>

<!-- Features Section -->
<div class="relative bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto mb-16 max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        I Nostri <span class="text-secondary">Servizi</span>
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Soluzioni professionali per ogni esigenza di trasporto
      </p>
    </div>

    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Card 1: Rimorchi Personalizzati -->
      <a
        href="/rimorchi"
        class="group hover:ring-primary/50 relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div class="flex flex-col items-start">
          <div
            class="bg-primary/10 text-primary group-hover:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-8">
              <path
                d="M480 128C497.7 128 512 142.3 512 160L512 416C512 433.7 497.7 448 480 448L302.4 448C287.8 419.5 258.2 400 224 400C189.8 400 160.2 419.5 145.6 448L96 448C78.3 448 64 433.7 64 416L64 160C64 142.3 78.3 128 96 128L480 128zM96 480L136.4 480C136.2 482.6 136 485.3 136 488C136 536.6 175.4 576 224 576C272.6 576 312 536.6 312 488C312 485.3 311.9 482.6 311.6 480L624 480C632.8 480 640 472.8 640 464C640 455.2 632.8 448 624 448L535.4 448C540.8 438.6 544 427.7 544 416L544 160C544 124.7 515.3 96 480 96L96 96C60.7 96 32 124.7 32 160L32 416C32 451.3 60.7 480 96 480zM336 192C327.2 192 320 199.2 320 208L320 336C320 344.8 327.2 352 336 352C344.8 352 352 344.8 352 336L352 208C352 199.2 344.8 192 336 192zM416 208L416 336C416 344.8 423.2 352 432 352C440.8 352 448 344.8 448 336L448 208C448 199.2 440.8 192 432 192C423.2 192 416 199.2 416 208zM144 192C135.2 192 128 199.2 128 208L128 336C128 344.8 135.2 352 144 352C152.8 352 160 344.8 160 336L160 208C160 199.2 152.8 192 144 192zM224 208L224 336C224 344.8 231.2 352 240 352C248.8 352 256 344.8 256 336L256 208C256 199.2 248.8 192 240 192C231.2 192 224 199.2 224 208zM224 432C254.9 432 280 457.1 280 488C280 518.9 254.9 544 224 544C193.1 544 168 518.9 168 488C168 457.1 193.1 432 224 432z"
              /></svg
            >
          </div>
          <h3 class="mb-3 text-2xl font-bold text-gray-900">Rimorchi Personalizzati</h3>
          <p class="mb-4 text-base leading-7 text-gray-600">
            Progettazione e costruzione su misura di rimorchi per ogni necessità. Dalla
            progettazione alla realizzazione finale.
          </p>
          <span
            class="text-primary inline-flex items-center text-sm font-semibold transition-all group-hover:gap-x-2"
          >
            Scopri di più
            <svg
              class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg></span
          >
        </div>
        <div
          class="bg-primary/5 group-hover:bg-primary/10 absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full blur-2xl transition-all duration-300"
        ></div>
      </a>

      <!-- Card 2: Portata fino a 1500kg -->
      <a
        href="/articoli"
        class="group hover:ring-secondary/50 relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div class="flex flex-col items-start">
          <div
            class="bg-secondary/10 text-secondary group-hover:bg-secondary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-8">
              >
              <path
                d="M304.3 89.2L128.5 190.8L320.3 301.5L512.2 190.8L336.3 89.2C326.4 83.5 314.2 83.5 304.3 89.2zM112.5 218.5L112.5 421.5C112.5 432.9 118.6 443.5 128.5 449.2L304.3 550.7L304.3 329.2L112.5 218.4zM336.3 550.8L512.2 449.2C522.1 443.5 528.2 432.9 528.2 421.5L528.2 218.5L336.4 329.3L336.4 550.8zM288.3 61.5C308.1 50.1 332.5 50.1 352.3 61.5L528.2 163C548 174.4 560.2 195.6 560.2 218.4L560.2 421.4C560.2 444.3 548 465.4 528.2 476.8L352.3 578.5C332.5 589.9 308.1 589.9 288.3 578.5L112.5 477C92.7 465.6 80.5 444.4 80.5 421.6L80.5 218.6C80.5 195.7 92.7 174.6 112.5 163.2L288.3 61.5z"
              /></svg
            >
          </div>
          <h3 class="mb-3 text-2xl font-bold text-gray-900">Portata fino a 1500kg</h3>
          <p class="mb-4 text-base leading-7 text-gray-600">
            Rimorchi robusti e affidabili progettati per carichi pesanti. Massima sicurezza e durata
            nel tempo.
          </p>
          <span
            class="text-secondary inline-flex items-center text-sm font-semibold transition-all group-hover:gap-x-2"
          >
            Leggi gli articoli
            <svg
              class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
        <div
          class="bg-secondary/5 group-hover:bg-secondary/10 absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full blur-2xl transition-all duration-300"
        ></div>
      </a>

      <!-- Card 3: Costruzione su Misura -->
      <a
        href="/contatti"
        class="group hover:ring-tertiary/50 relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div class="flex flex-col items-start">
          <div
            class="bg-tertiary/10 text-tertiary group-hover:bg-tertiary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-8">
              <path
                d="M57.4 102.7C52 108.1 51.2 116.5 55.4 122.9L134.6 241.7C140.5 250.6 150.5 255.9 161.2 255.9L233.4 255.9L309.7 332.2C285.1 367.5 288.5 416.4 320 447.9L446.2 574.1C464.9 592.8 495.3 592.8 514.1 574.1L574.2 514C592.9 495.3 592.9 464.9 574.2 446.1L448.1 320C416.6 288.5 367.7 285.1 332.4 309.7L256.1 233.4L256.1 161.2C256.1 150.5 250.8 140.5 241.9 134.6L123 55.3C116.7 51.1 108.2 51.9 102.8 57.3L57.4 102.7zM224.1 224L161.2 224L89.3 116.1L116.2 89.2L224.1 161.1L224.1 224zM551.5 491.3L491.4 551.4C485.2 557.6 475 557.6 468.8 551.4L342.7 425.4C319.9 402.5 319.9 365.5 342.7 342.7C365.5 319.9 402.6 319.9 425.4 342.7L551.5 468.7C557.7 474.9 557.7 485.1 551.5 491.3zM77.2 461.1C49.1 489.2 49.1 534.8 77.2 562.9C105.3 591 150.9 591 179 562.9L274 468C267.2 459.1 261.6 449.5 257.2 439.5L156.4 540.3C140.8 555.9 115.5 555.9 99.8 540.3C84.1 524.7 84.2 499.4 99.8 483.7L246.6 337L224 314.3L77.2 461.1zM288.7 113.9C295.7 123.4 300.5 134.4 302.7 146.1C327.6 115.5 365.6 96 408.1 96C423 96 437.3 98.4 450.7 102.8L388.8 164.7C385.8 167.7 384.1 171.8 384.1 176L384.1 240C384.1 241.9 384.4 243.8 385.1 245.5C402.8 245.6 420.5 249.1 437.2 256L464.2 256C468.4 256 472.5 254.3 475.5 251.3L537.4 189.4C541.8 202.8 544.2 217.1 544.2 232C544.2 264.5 532.8 294.3 513.8 317.7L536.5 340.4C561.3 311.1 576.2 273.3 576.2 232C576.2 203.8 569.3 177.3 557 153.9C554.6 149.4 550.3 146.3 545.2 145.5C540.1 144.7 535.1 146.4 531.5 150L457.6 223.9L416.2 223.9L416.2 182.5L490.1 108.6C493.7 105 495.4 99.9 494.6 94.9C493.8 89.9 490.7 85.5 486.2 83.1C462.8 70.9 436.3 64 408.1 64C361.4 64 319.1 83.1 288.7 113.9z"
              /></svg
            >
          </div>
          <h3 class="mb-3 text-2xl font-bold text-gray-900">Costruzione su Misura</h3>
          <p class="mb-4 text-base leading-7 text-gray-600">
            Ogni rimorchio è realizzato secondo le tue specifiche esigenze. Artigianalità e
            precisione in ogni dettaglio.
          </p>
          <span
            class="text-tertiary inline-flex items-center text-sm font-semibold transition-all group-hover:gap-x-2"
          >
            Richiedi preventivo
            <svg
              class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
        <div
          class="bg-tertiary/5 group-hover:bg-tertiary/10 absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full blur-2xl transition-all duration-300"
        ></div>
      </a>
    </div>
  </div>
</div>

<!-- CTA Section -->
<div
  class="from-primary/10 via-secondary/10 to-tertiary/10 relative isolate overflow-hidden bg-linear-to-br py-16 sm:py-24"
>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center"
    >
      <div class="max-w-xl lg:max-w-lg">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pronto per il tuo <span class="text-primary">rimorchio personalizzato?</span>
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Con oltre {Math.round((new Date().getFullYear() - 1963) / 10) * 10} anni di esperienza nella
          costruzione di rimorchi su misura, siamo il partner ideale per realizzare il tuo progetto. Dalla
          progettazione alla consegna, seguiamo ogni fase con la massima attenzione.
        </p>
        <div class="mt-8 flex gap-x-4">
          <a
            href="/contatti"
            class="bg-secondary hover:bg-secondary/90 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contattaci Ora
          </a>
          <a
            href="/rimorchi"
            class="rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            Vedi i Modelli
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-primary text-4xl font-bold">1500kg</div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Portata Massima</div>
          <div class="mt-1 text-xs text-gray-600">Robustezza garantita</div>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-secondary text-4xl font-bold">100%</div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Su Misura</div>
          <div class="mt-1 text-xs text-gray-600">Personalizzazione totale</div>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-tertiary text-4xl font-bold">
            <svg
              class="h-10 w-10"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Qualità</div>
          <div class="mt-1 text-xs text-gray-600">Materiali certificati</div>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-4xl font-bold text-gray-900">
            <svg
              class="text-primary h-10 w-10"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Esperienza</div>
          <div class="mt-1 text-xs text-gray-600">Artigiani esperti</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Latest Articoli Section -->
<section class="my-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8"><ArticoliList articoli={data.articoli} /></div>
</section>
