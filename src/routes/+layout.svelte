<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import { page } from '$app/state';

  import menuCaravan from '$lib/assets/menu-caravan.png';
  import logoRimorchi from '$lib/assets/logo-rimorchi.png';
  import Footer from '$lib/components/Footer.svelte';

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
    { name: 'Accessori', href: '/accessori' },
    { name: 'Usato', href: '/usato' },
    { name: 'Contatti', href: '/contatti' },
  ];

  const isActive = (href: string) => {
    const path = page.url.pathname;
    return href === '/' ? path === '/' : path === href || path.startsWith(href + '/');
  };
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Rimorchi su misura in Valsugana | Rimorchi OMG</title>
  <meta
    name="description"
    content="Benvenuto su Rimorchi, il sito dedicato ai rimorchi, articoli e informazioni utili."
  />
  <meta name="keywords" content="rimorchi, articoli, chi siamo, contatti, trasporti" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            src={logoRimorchi}
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
            aria-current={isActive(link.href) ? 'page' : undefined}
            class={`hover:text-tertiary font-semibold transition-all hover:scale-105 ${
              isActive(link.href) ? 'text-tertiary underline underline-offset-4' : ''
            }`}
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
          <img src={menuCaravan} alt="caravan OMG" class="h-8" />
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
              aria-current={isActive(link.href) ? 'page' : undefined}
              class={`rounded-lg px-4 py-3 font-semibold transition-all hover:bg-white/20 ${
                isActive(link.href) ? 'bg-white/20 text-tertiary' : ''
              }`}
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

<Footer />
