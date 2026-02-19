<script>
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
</script>

<PageHeader
  title="Contatti"
  subtitle="Officina mecchanica Giacomella - Valsugana (TRENTO)"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contatti' }]}
/>

<div class="to-secondary/5 relative isolate bg-linear-to-b from-white py-16">
  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
    <!-- Left Column: Contact Information -->
    <div class="relative px-6 pt-16 pb-20 sm:pt-24 lg:px-8">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <!-- Decorative Background -->
        <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
          <svg aria-hidden="true" class="absolute inset-0 size-full stroke-gray-200/50">
            <defs>
              <pattern
                id="contact-pattern"
                width="200"
                height="200"
                x="0"
                y="0"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>

        <!-- Heading -->
        <div class="space-y-6">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Hai bisogno di <span class="text-secondary">informazioni?</span>
          </h2>
          <p class="max-w-lg text-lg leading-8 text-gray-600">
            Siamo sempre disponibili per rispondere a qualsiasi domanda sui nostri prodotti e
            servizi. Contattaci e troveremo insieme la soluzione perfetta per le tue esigenze.
          </p>
        </div>

        <!-- Contact Cards -->
        <dl class="mt-12 space-y-6">
          <!-- Address Card -->
          <div
            class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:ring-blue-500/50"
          >
            <div class="flex gap-x-5">
              <dt class="flex-none">
                <span class="sr-only">Indirizzo</span>
                <div
                  class="text-secondary bg-secondary/10 group-hover:bg-secondary/20 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </dt>
              <dd class="flex-auto">
                <h3 class="mb-1 text-sm font-semibold text-gray-900">Indirizzo</h3>
                <p class="text-base text-gray-600">Frazione Tollo 6<br />38055 Grigno (TN)</p>
              </dd>
            </div>
          </div>

          <!-- Phone Card -->
          <div
            class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:ring-blue-500/50"
          >
            <div class="flex gap-x-5">
              <dt class="flex-none">
                <span class="sr-only">Telefono</span>
                <div
                  class="text-primary bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </dt>
              <dd class="flex-auto">
                <h3 class="mb-1 text-sm font-semibold text-gray-900">Telefono</h3>
                <a
                  href="tel:+390461123456"
                  class="text-base font-medium text-gray-600 transition-colors hover:text-green-600"
                >
                  +39 0461 123456
                </a>
              </dd>
            </div>
          </div>

          <!-- Email Card -->
          <div
            class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:ring-blue-500/50"
          >
            <div class="flex gap-x-5">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <div
                  class="bg-tertiary/10 text-tertiary group-hover:bg-tertiary/20 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </dt>
              <dd class="flex-auto">
                <h3 class="mb-1 text-sm font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:info@omg.com"
                  class="hover:text-tertiary text-base font-medium break-all text-gray-600 transition-colors"
                >
                  info@omg.com
                </a>
              </dd>
            </div>
          </div>
        </dl>

        <!-- Opening Hours (Optional Enhancement) -->
        <div
          class="from-secondary/5 to-secondary/10 ring-secondary/50 mt-10 rounded-2xl bg-linear-to-br p-6 ring-1"
        >
          <h3 class="mb-3 text-lg font-semibold text-gray-900">Orari di Apertura</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex justify-between">
              <span class="font-medium">Lunedì - Venerdì</span>
              <span>8:00 - 18:00</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">Sabato</span>
              <span>8:00 - 12:00</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">Domenica</span>
              <span class="text-gray-400">Chiuso</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Map -->
    <div class="relative px-6 pb-20 lg:px-8 lg:py-16">
      <div class="h-full min-h-125 lg:min-h-175">
        <div
          class="relative h-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/10 transition-all duration-300 hover:shadow-2xl hover:ring-blue-500/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.383139107173!2d11.590744211790028!3d46.02350337096805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778934a79038233%3A0x208cae1f9749c7c4!2sOmg%20Officine%20Meccaniche%20Giacomella!5e0!3m2!1sen!2sit!4v1771422654690!5m2!1sen!2sit"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="h-full"
            title="Mappa della sede - Officina Meccanica Giacomella"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
