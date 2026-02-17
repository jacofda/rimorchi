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

<!-- Full-width gradient header -->
<header
  class="from-secondary via-secondary/50 to-secondary relative w-full overflow-hidden bg-linear-to-br shadow-lg"
>
  <!-- Animated gradient overlay -->
  <div
    class="from-secondary/30 to-primary/30 absolute inset-0 animate-pulse bg-linear-to-tr via-transparent"
  ></div>

  <!-- Content container -->
  <div class="relative container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
      <!-- Left: Title and subtitle -->
      <div class="space-y-3">
        <h1 class="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
          {title}
        </h1>
        {#if subtitle}
          <p class="text-lg text-white/90 drop-shadow">
            {subtitle}
          </p>
        {/if}
      </div>

      <!-- Right: Breadcrumb navigation -->
      <nav
        class="flex items-center space-x-2 rounded-full bg-white/20 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm"
      >
        {#each breadcrumbs as crumb, i}
          {#if i > 0}
            <span class="opacity-60">/</span>
          {/if}
          {#if crumb.href}
            <a href={crumb.href} class="hover:text-primary transition-all hover:underline">
              {crumb.label}
            </a>
          {:else}
            <span class="font-bold">{crumb.label}</span>
          {/if}
        {/each}
      </nav>
    </div>
  </div>

  <!-- Decorative gradient border -->
  <div
    class="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent"
  ></div>
</header>
