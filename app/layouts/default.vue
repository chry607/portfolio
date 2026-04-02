<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 border-b border-default/60 backdrop-blur-xl bg-transparent">
      <UContainer class="py-3 flex items-center justify-end gap-3">
        <div class="flex items-center gap-1 sm:gap-2">
          <UButton
            to="/"
            size="sm"
            color="neutral"
            variant="ghost"
          >
            Home
          </UButton>
          <UButton
            to="/about"
            size="sm"
            color="neutral"
            variant="ghost"
          >
            About
          </UButton>
          <UButton
            to="/projects"
            size="sm"
            color="neutral"
            variant="ghost"
          >
            Projects
          </UButton>
          <UButton
            to="/contact"
            size="sm"
            color="neutral"
            variant="ghost"
          >
            Contact
          </UButton>
          <UColorModeButton />
        </div>
      </UContainer>
    </header>
    <main class="sai-grid flex-1">
      <slot />
    </main>
    <footer class="border-t border-default/60">
      <UContainer class="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3">
        <p class="text-sm text-muted align-center text-center">
          All Rights Reserved | Reuter Jan Camacho {{ new Date().getFullYear() }}
        </p>
      </UContainer>
    </footer>
  </div>
</template>
