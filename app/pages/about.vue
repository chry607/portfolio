<script setup lang="ts">
import { activities, talks } from '~/data/portfolio'
</script>

<template>
  <UContainer class="py-14 sm:py-20">
    <UPageHeader
      title="About"
      description="Computer Science major focused on software engineering excellence, data systems, and practical ML."
    />

    <div class="grid lg:grid-cols-5 gap-6 mt-8">
      <section class="lg:col-span-3 sai-panel rounded-2xl p-7">
        <h2 class="section-title">
          Mission
        </h2>
        <p class="text-muted mt-3 leading-relaxed">
          I like building products that move from idea to production with reliable architecture and clear metrics.
          My main focus areas are backend systems, ML pipelines, and frontend experiences that make complex data usable.
        </p>
      </section>

      <section class="lg:col-span-2 sai-panel rounded-2xl p-7">
        <h2 class="section-title">
          Focus Areas
        </h2>
        <ul class="mt-4 space-y-2 text-sm">
          <li>Scalable APIs and backend architecture</li>
          <li>Data pipelines and experimentation workflows</li>
          <li>Model deployment and monitoring</li>
          <li>Product-minded full-stack execution</li>
        </ul>
      </section>
    </div>

    <section class="mt-8">
      <h2 class="section-title">
        Talks & Seminars
      </h2>
      <div class="grid md:grid-cols-2 gap-5 mt-4">
        <UCard
          v-for="talk in talks"
          :key="`${talk.title}-${talk.year}`"
          class="sai-panel h-full"
        >
          <template #header>
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">
                {{ talk.title }}
              </h3>
              <p class="text-xs uppercase tracking-[0.14em] text-primary">
                {{ talk.event }} • {{ talk.year }}
              </p>
            </div>
          </template>
          <p class="text-sm text-muted">
            {{ talk.description }}
          </p>
          <div
            v-if="talk.links?.length"
            class="flex flex-wrap gap-2 mt-4"
          >
            <UButton
              v-for="link in talk.links"
              :key="link.url"
              :to="link.url"
              target="_blank"
              size="sm"
              color="neutral"
              variant="outline"
              icon="i-lucide-external-link"
            >
              {{ link.label }}
            </UButton>
          </div>
        </UCard>
      </div>
    </section>

    <section class="mt-10">
      <h2 class="section-title">
        Competitive Programming & Extracurriculars
      </h2>
      <div class="grid md:grid-cols-2 gap-5 mt-4">
        <UCard
          v-for="activity in activities"
          :key="activity.title"
          class="sai-panel h-full"
        >
          <template #header>
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">
                {{ activity.title }}
              </h3>
              <p class="text-xs uppercase tracking-[0.14em] text-primary">
                {{ activity.organization }}
              </p>
            </div>
          </template>
          <p class="text-sm text-muted">
            {{ activity.description }}
          </p>
          <div
            v-if="activity.links?.length"
            class="flex flex-wrap gap-2 mt-4"
          >
            <UButton
              v-for="link in activity.links"
              :key="link.url"
              :to="link.url"
              target="_blank"
              size="sm"
              color="neutral"
              variant="outline"
              icon="i-lucide-external-link"
            >
              {{ link.label }}
            </UButton>
          </div>
        </UCard>
      </div>
    </section>

    <section class="mt-10 sai-panel rounded-2xl p-7">
      <h2 class="section-title">
        Beyond Academics
      </h2>
      <p class="text-muted mt-3">
        Outside classes and projects, I focus on leadership, communication, and competitive problem solving.
      </p>
    </section>
  </UContainer>
</template>
