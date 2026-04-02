<script setup lang="ts">
import { projects } from '~/data/portfolio'

const route = useRoute()

const slug = computed(() => {
  const raw = route.params.slug
  return Array.isArray(raw) ? raw[0] : String(raw ?? '')
})

const project = computed(() => projects.find(item => item.slug === slug.value))

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}
</script>

<template>
  <UContainer class="py-14 sm:py-20">
    <UButton
      to="/projects"
      icon="i-lucide-arrow-left"
      variant="ghost"
      color="neutral"
      class="mb-5"
    >
      Back to projects
    </UButton>

    <section class="sai-panel rounded-2xl p-7 sm:p-9">
      <p class="text-xs uppercase tracking-[0.18em] text-primary">
        {{ project?.subtitle }}
      </p>
      <h1 class="text-3xl sm:text-4xl font-bold mt-2">
        {{ project?.title }}
      </h1>
      <p class="text-primary font-semibold mt-2">
        {{ project?.impact }}
      </p>
      <p class="text-muted mt-5 max-w-3xl">
        {{ project?.description }}
      </p>

      <div class="flex flex-wrap gap-2 mt-5">
        <UBadge
          v-for="tech in project?.stack"
          :key="tech"
          color="neutral"
          variant="subtle"
        >
          {{ tech }}
        </UBadge>
      </div>

      <div class="flex flex-wrap gap-3 mt-5">
        <UButton
          v-if="project?.githubUrl"
          :to="project.githubUrl"
          target="_blank"
          color="neutral"
          variant="outline"
          icon="i-simple-icons-github"
        >
          GitHub
        </UButton>
        <UButton
          v-if="project?.liveUrl"
          :to="project.liveUrl"
          target="_blank"
          color="primary"
          variant="soft"
          icon="i-lucide-external-link"
        >
          Live Link
        </UButton>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="section-title">
        Build Highlights
      </h2>
      <div class="grid gap-4 mt-4">
        <div
          v-for="point in project?.highlights"
          :key="point"
          class="sai-panel rounded-xl p-5"
        >
          <p class="text-sm sm:text-base">
            {{ point }}
          </p>
        </div>
      </div>
    </section>
  </UContainer>
</template>
