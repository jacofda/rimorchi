<script lang="ts">
  interface Breadcrumb {
    label: string;
    href?: string;
  }

  interface Props {
    title: string;
    subtitle?: string;
    breadcrumbs: Breadcrumb[];
  }

  let { title, subtitle, breadcrumbs }: Props = $props();
</script>

<!-- Full-width gradient header with square pattern -->
<header
  class="from-secondary/5 via-secondary/10 to-secondary/5 relative w-full overflow-hidden bg-linear-to-br"
>
  <!-- Decorative Square Pattern Background -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg
      class="stroke-secondary/5 absolute top-0 left-[50%] h-full w-full -translate-x-1/2"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="header-pattern"
          width="200"
          height="200"
          x="50%"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#header-pattern)" />
    </svg>
    <!-- Gradient accent -->
    <div
      class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="from-primary to-secondary aspect-801/1036 w-200.25 bg-linear-to-tr opacity-10"
        style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
      ></div>
    </div>
  </div>

  <!-- Content container -->
  <div class="relative container mx-auto px-4 py-16 sm:py-20">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
      <!-- Left: Title and subtitle -->
      <div class="space-y-4">
        <h1 class="text-secondary text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {#if subtitle}
          <p class="max-w-2xl text-lg text-gray-700">
            {subtitle}
          </p>
        {/if}
      </div>

      <!-- Right: Breadcrumb navigation -->
      <nav
        class="flex items-center space-x-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-900/5"
      >
        {#each breadcrumbs as crumb, i}
          {#if i > 0}
            <span class="text-gray-400">/</span>
          {/if}
          {#if crumb.href}
            <a href={crumb.href} class="hover:text-secondary transition-colors hover:underline">
              {crumb.label}
            </a>
          {:else}
            <span class="text-secondary font-bold">{crumb.label}</span>
          {/if}
        {/each}
      </nav>
    </div>
  </div>
</header>
