<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <UContainer class="py-14 sm:py-20">
    <UPageHeader
      title="Contact"
      description="Open to SWE and Data/AI internship opportunities."
    />

    <section class="grid lg:grid-cols-3 gap-6 mt-8">
      <UCard class="sai-panel lg:col-span-2">
        <template #header>
          <div class="space-y-1">
            <h2 class="text-lg font-semibold">
              Reach out
            </h2>
            <p class="text-sm text-muted">
              Best way to contact me is email. I respond faster with a short context + role link.
            </p>
          </div>
        </template>

        <div class="flex flex-wrap gap-3">
          <UButton
            :to="`mailto:${profile.email}`"
            color="primary"
            icon="i-lucide-mail"
          >
            {{ profile.email }}
          </UButton>
          <UButton
            :to="profile.linkedin"
            target="_blank"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-linkedin"
          >
            LinkedIn
          </UButton>
          <UButton
            :to="profile.github"
            target="_blank"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-github"
          >
            GitHub
          </UButton>
        </div>
      </UCard>

      <UCard class="sai-panel">
        <template #header>
          <div class="space-y-1">
            <h2 class="text-lg font-semibold">
              Resume
            </h2>
            <p class="text-sm text-muted">
              Pick the version most relevant to the role.
            </p>
          </div>
        </template>

        <div class="grid gap-3">
          <UButton
            :to="profile.resumeSwe"
            target="_blank"
            color="primary"
            variant="soft"
            icon="i-lucide-file-text"
            block
          >
            SWE Resume
          </UButton>
          <UButton
            :to="profile.resumeDataAi"
            target="_blank"
            color="primary"
            variant="soft"
            icon="i-lucide-file-text"
            block
          >
            Data/AI Resume
          </UButton>
        </div>
      </UCard>
    </section>
  </UContainer>
</template>
