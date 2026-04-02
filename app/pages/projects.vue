<script setup lang="ts">
import { projectCategories, projects } from '~/data/portfolio'

const route = useRoute()

const projectsByCategory = computed(() => projectCategories
  .map(category => ({
    ...category,
    projects: projects.filter(project => project.category === category.id)
  }))
  .filter(group => group.projects.length > 0))

function viewMore(slug: string) {
  return navigateTo(`/projects/${slug}`)
}
</script>

<template>
  <UContainer class="py-14 sm:py-20">
    <NuxtPage v-if="route.params.slug" />

    <template v-else>
      <UPageHeader
        title="Projects"
        description="Case studies of SWE and Data/AI systems shipped with measurable impact."
      />

      <section
        v-for="group in projectsByCategory"
        :key="group.id"
        class="mt-10 first:mt-8"
      >
        <h2 class="section-title">
          {{ group.label }}
        </h2>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
          <UCard
            v-for="project in group.projects"
            :key="project.slug"
            :ui="{ body: 'space-y-3' }"
            class="sai-panel h-full relative transition-transform hover:-translate-y-0.5"
          >
            <template #header>
              <div class="space-y-1">
                <p class="text-xs tracking-[0.18em] uppercase text-primary">
                  {{ project.subtitle }}
                </p>
                <h3 class="text-lg font-semibold">
                  {{ project.title }}
                </h3>
              </div>
            </template>

            <p class="text-sm text-muted">
              {{ project.description }}
            </p>
            <p class="text-sm font-semibold text-primary">
              {{ project.impact }}
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="item in project.stack"
                :key="item"
                variant="subtle"
                color="neutral"
              >
                {{ item }}
              </UBadge>
            </div>

            <UButton
              variant="soft"
              color="primary"
              trailing-icon="i-lucide-arrow-right"
              class="relative z-20 cursor-pointer"
              @click.stop="viewMore(project.slug)"
            >
              View More
            </UButton>

            <div class="flex flex-wrap gap-2">
              <UButton
                v-if="project.githubUrl"
                :to="project.githubUrl"
                target="_blank"
                size="sm"
                color="neutral"
                variant="outline"
                icon="i-simple-icons-github"
                class="relative z-20"
                @click.stop
              >
                GitHub
              </UButton>
              <UButton
                v-if="project.liveUrl"
                :to="project.liveUrl"
                target="_blank"
                size="sm"
                color="neutral"
                variant="soft"
                icon="i-lucide-external-link"
                class="relative z-20"
                @click.stop
              >
                Live
              </UButton>
            </div>
          </UCard>
        </div>
      </section>
    </template>
  </UContainer>
</template>
