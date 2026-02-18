<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../app.css';
  let { children } = $props();

  let mobileMenuOpen = $state(false);

  const toggleMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const closeMenu = () => {
    mobileMenuOpen = false;
  };

  const links = [
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Rimorchi', href: '/rimorchi' },
    { name: 'Articoli', href: '/articoli' },
    { name: 'Contatti', href: '/contatti' },
  ];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- Sticky Navbar with gradient -->
<nav class="sticky top-0 z-50 bg-white/80 shadow-lg backdrop-blur-sm">
  <!-- Decorative bottom border -->
  <div
    class="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent"
  ></div>

  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <!-- Logo -->
      <div class="shrink-0">
        <a
          href="/"
          title="Rimorchi OMG"
          class="block transition-transform hover:scale-105"
          onclick={closeMenu}
        >
          <img
            src="https://rimorchi.vsomg.it/img/logos/logo.png"
            alt="Officine Meccaniche Giacomella"
            class="h-12 w-auto md:h-16"
          />
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden items-center space-x-8 lg:flex">
        {#each links as link}
          <a
            href={link.href}
            class="hover:text-tertiary font-semibold transition-all hover:scale-105"
          >
            {link.name}
          </a>
        {/each}

        <a
          href="https://www.vsomg.it/"
          target="_blank"
          title="caravan OMG"
          class="rounded-lg bg-white/20 p-2 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
        >
          <img src="https://rimorchi.vsomg.it/img/menu-caravan.png" alt="caravan OMG" class="h-8" />
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        onclick={toggleMenu}
        class="flex h-10 w-10 flex-col items-center justify-center space-y-1.5 rounded-lg bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 lg:hidden"
        aria-label="Toggle menu"
      >
        <span
          class={`h-0.5 w-6 bg-gray-700 transition-all ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
        ></span>
        <span class={`h-0.5 w-6 bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          class={`h-0.5 w-6 bg-gray-700 transition-all ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="border-t border-white/20 py-4 lg:hidden">
        <div class="flex flex-col space-y-4">
          {#each links as link}
            <a
              href={link.href}
              onclick={closeMenu}
              class="rounded-lg px-4 py-3 font-semibold transition-all hover:bg-white/20"
            >
              {link.name}
            </a>
          {/each}

          <a
            href="https://www.vsomg.it/"
            target="_blank"
            onclick={closeMenu}
            title="caravan OMG"
            class="flex items-center gap-3 rounded-lg bg-white/20 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
          >
            <img
              src="https://rimorchi.vsomg.it/img/menu-caravan.png"
              alt="caravan OMG"
              class="h-8"
            />
            <span class="font-semibold text-white">Sezione Caravan</span>
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

{@render children()}

<!-- Modern Footer with gradient design -->
<footer
  class="from-secondary via-secondary/50 to-secondary relative mt-20 overflow-hidden bg-linear-to-br"
>
  <!-- Animated gradient overlay -->
  <div
    class="from-secondary/30 to-primary/30 absolute inset-0 bg-linear-to-tr via-transparent opacity-50"
  ></div>

  <!-- Decorative top border -->
  <div
    class="absolute top-0 right-0 left-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent"
  ></div>

  <div class="relative container mx-auto px-4 py-16">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
      <!-- Company Info -->
      <div class="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
        <div class="overflow-hidden rounded-full bg-white/20 p-3 backdrop-blur-sm">
          <img
            src="https://rimorchi.vsomg.it/img/logos/logo-circle.png"
            alt="Officine Meccaniche Giacomella"
            class="h-16 w-auto"
          />
        </div>
        <p class="leading-relaxed text-white/90">
          La ditta O.M.G. lavora in Valsugana, costruendo Rimorchi O.M.G. per il trasporto di cose e
          mezzi speciali fatti su richiesta del cliente.
        </p>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4">
        <h3 class="text-2xl font-bold text-white drop-shadow-md">Info e contatti</h3>
        <div class="space-y-3 text-white/90">
          <p class="font-semibold text-white">OFFICINE MECCANICHE GIACOMELLA</p>
          <div class="space-y-2">
            <p class="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                class="size-5 fill-white"
              >
                <path
                  d="M576 90.7L576 64.7L552.8 76.4L416.9 144.8L230.6 82.7L224.6 80.7L218.9 83.3L73.3 149.4L63.9 153.7L63.9 575.4L87.1 563.7L223 495.3L409.3 557.4L415.3 559.4L421 556.8L566.6 490.7L576 486.4L576 90.7zM432 173L544 116.6L544 465.8L432 516.6L432 173zM400 172.8L400 520.5L240 467.2L240 119.5L400 172.8zM208 467L96 523.4L96 174.2L208 123.4L208 467z"
                /></svg
              >
              <span>Frazione Tollo 6, 38055 Grigno (TN)</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-primary">📞</span>
              <a href="tel:0461765169" class="hover:text-tertiary transition-colors">0461 765169</a>
            </p>
            <p class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                class="size-5 fill-white"
              >
                <path
                  d="M80 128L64 128L64 512L576 512L576 128L80 128zM544 184L544 199.9L320 364.2L96 199.9L96 160L544 160L544 184zM544 239.6L544 480L96 480L96 239.6L310.5 396.9L320 403.8L329.5 396.9L544 239.6z"
                /></svg
              >
              <a
                href="mailto:giacomella.rimorchi@gmail.com"
                class="hover:text-tertiary transition-colors"
              >
                giacomella.rimorchi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Links & Caravan Section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <h4 class="text-xl font-bold text-white drop-shadow-md">Sezione Caravan</h4>
          <a
            href="https://www.vsomg.it/"
            target="_BLANK"
            class="inline-block overflow-hidden rounded-lg bg-white/20 p-3 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
          >
            <img src="https://www.vsomg.it//img/logos/logo.png" alt="OMG Caravan" class="h-12" />
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <a
            href="https://rimorchi.vsomg.it/privacy-policy"
            class="inline-block rounded-full bg-white/20 px-4 py-2 text-center text-sm font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Sub-footer -->
  <div class=" relative bg-gray-800 py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p class="text-center text-sm text-white/90 md:text-left">
          © 2004-2026 OMG. Tutti i diritti riservati. P.IVA 02023670223
        </p>
        <div class="flex gap-3">
          <a
            href="https://www.facebook.com/OMG-Giacomella-Valsugana-Caravan-478178735617031/"
            target="_blank"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
          >
            <span class="text-xl">f</span>
          </a>
          <a
            href="https://www.google.com/search?q=rimorchi+vsomg&oq=rimorchi+vsomg"
            target="_blank"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
          >
            <span class="text-xl">G</span>
          </a>
          <a
            href="https://www.google.it/maps/place/O.M.G.+Officine+Meccaniche+Giacomella/@46.023444,11.5910473,17z/data=!3m1!4b1!4m2!3m1!1s0x4778934a79038233:0x208cae1f9749c7c4"
            target="_blank"
            title="O.M.G. Officine Meccaniche Giacomella su Google Maps"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-5 fill-white">
              <path
                d="M576 90.7L576 64.7L552.8 76.4L416.9 144.8L230.6 82.7L224.6 80.7L218.9 83.3L73.3 149.4L63.9 153.7L63.9 575.4L87.1 563.7L223 495.3L409.3 557.4L415.3 559.4L421 556.8L566.6 490.7L576 486.4L576 90.7zM432 173L544 116.6L544 465.8L432 516.6L432 173zM400 172.8L400 520.5L240 467.2L240 119.5L400 172.8zM208 467L96 523.4L96 174.2L208 123.4L208 467z"
              /></svg
            >
          </a>
          <a
            href="mailto:giacomella.rimorchi@gmail.com"
            title="email"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-5 fill-white">
              <path
                d="M80 128L64 128L64 512L576 512L576 128L80 128zM544 184L544 199.9L320 364.2L96 199.9L96 160L544 160L544 184zM544 239.6L544 480L96 480L96 239.6L310.5 396.9L320 403.8L329.5 396.9L544 239.6z"
              /></svg
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
