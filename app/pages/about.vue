<script setup lang="ts">
import { activities, certifications, experiences, focusAreas, talks } from '~/data/portfolio'
</script>

<template>
  <UContainer class="py-14 sm:py-20">
    <UPageHeader
      title="About"
      description="Computer Science major focused on software engineering excellence, data systems, and practical ML."
    />

    <section class="mt-8">
      <h2 class="section-title">
        Experiences
      </h2>
      <div class="mt-4 relative">
        <div class="hidden md:block absolute inset-y-0 left-1/2 w-px bg-border -translate-x-1/2" />

        <div class="space-y-6">
          <div
            v-for="(exp, idx) in experiences"
            :key="`${exp.role}-${exp.organization}-${exp.period}`"
            class="relative md:grid md:grid-cols-2 md:gap-8"
          >
            <div
              class="hidden md:block absolute left-1/2 top-8 -translate-x-1/2"
              aria-hidden="true"
            >
              <span class="h-4 w-4 rounded-full bg-primary ring-4 ring-background block" />
            </div>

            <div
              class="md:hidden absolute left-0 top-8"
              aria-hidden="true"
            >
              <span class="h-3 w-3 rounded-full bg-primary ring-4 ring-background block" />
            </div>
            <div
              class="md:hidden absolute inset-y-0 left-[5px] w-px bg-border"
              aria-hidden="true"
            />

            <div
              :class="idx % 2 === 0 ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10'"
              class="pl-8 md:pl-0"
            >
              <UCard class="sai-panel">
                <template #header>
                  <div class="space-y-2">
                    <h3 class="text-lg font-semibold leading-snug">
                      {{ exp.role }}
                    </h3>
                    <div class="space-y-1">
                      <p class="text-sm text-muted leading-snug">
                        {{ exp.organization }}
                      </p>
                      <p class="text-xs text-muted/90 leading-snug tabular-nums">
                        {{ exp.period }}<span v-if="exp.location"> · {{ exp.location }}</span>
                      </p>
                    </div>
                  </div>
                </template>
                <ul
                  v-if="exp.description.length"
                  class="space-y-2 text-sm text-muted"
                >
                  <li
                    v-for="line in exp.description"
                    :key="line"
                    class="flex gap-2"
                  >
                    <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                    <span>{{ line }}</span>
                  </li>
                </ul>
                <ul
                  v-if="exp.highlights?.length"
                  class="mt-4 space-y-2 text-sm"
                >
                  <li
                    v-for="point in exp.highlights"
                    :key="point"
                    class="flex gap-2"
                  >
                    <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
                <div
                  v-if="exp.tech?.length"
                  class="flex flex-wrap gap-2 mt-4"
                >
                  <UBadge
                    v-for="t in exp.tech"
                    :key="t"
                    color="neutral"
                    variant="subtle"
                  >
                    {{ t }}
                  </UBadge>
                </div>
                <div
                  v-if="exp.links?.length"
                  class="flex flex-wrap gap-2 mt-4"
                >
                  <UButton
                    v-for="link in exp.links"
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

            <div
              class="hidden md:block"
              :class="idx % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="section-title">
        Focus Areas
      </h2>
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
        <UCard
          v-for="area in focusAreas"
          :key="area.title"
          class="sai-panel h-full"
        >
          <template #header>
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">
                {{ area.title }}
              </h3>
              <p
                v-if="area.subtitle"
                class="text-xs uppercase tracking-[0.14em] text-primary"
              >
                {{ area.subtitle }}
              </p>
            </div>
          </template>
          <ul class="mt-1 space-y-2 text-sm">
            <li
              v-for="item in area.items"
              :key="item"
              class="flex gap-2"
            >
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
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
                {{ activity.organization }}<span v-if="activity.period"> • {{ activity.period }}</span>
              </p>
            </div>
          </template>
          <p class="text-sm text-muted">
            {{ activity.description }}
          </p>
          <ul
            v-if="activity.highlights?.length"
            class="mt-4 space-y-2 text-sm"
          >
            <li
              v-for="point in activity.highlights"
              :key="point"
              class="flex gap-2"
            >
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
              <span>{{ point }}</span>
            </li>
          </ul>
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

    <section class="mt-10">
      <h2 class="section-title">
        Certifications
      </h2>
      <div class="grid md:grid-cols-2 gap-5 mt-4">
        <UCard
          v-for="cert in certifications"
          :key="`${cert.title}-${cert.issuer}-${cert.date}`"
          class="sai-panel h-full"
        >
          <template #header>
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">
                {{ cert.title }}
              </h3>
              <p class="text-xs uppercase tracking-[0.14em] text-primary">
                {{ cert.issuer }} • {{ cert.date }}
              </p>
            </div>
          </template>
          <p
            v-if="cert.description"
            class="text-sm text-muted"
          >
            {{ cert.description }}
          </p>
          <p
            v-if="cert.credentialId"
            class="text-xs text-muted mt-3"
          >
            Credential ID: {{ cert.credentialId }}
          </p>
          <div
            v-if="cert.skills?.length"
            class="flex flex-wrap gap-2 mt-4"
          >
            <UBadge
              v-for="s in cert.skills"
              :key="s"
              color="neutral"
              variant="subtle"
            >
              {{ s }}
            </UBadge>
          </div>
          <div
            v-if="cert.links?.length"
            class="flex flex-wrap gap-2 mt-4"
          >
            <UButton
              v-for="link in cert.links"
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
        Talks & Seminars
      </h2>
      <div class="grid md:grid-cols-2 gap-5 mt-4">
        <UCard
          v-for="talk in talks"
          :key="`${talk.title}-${talk.date}`"
          class="sai-panel h-full"
        >
          <template #header>
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">
                {{ talk.title }}
              </h3>
              <p class="text-xs uppercase tracking-[0.14em] text-primary">
                {{ talk.event }} • {{ talk.date }}
              </p>
            </div>
          </template>
          <p class="text-sm text-muted">
            {{ talk.description }}
          </p>
          <ul
            v-if="talk.highlights?.length"
            class="mt-4 space-y-2 text-sm"
          >
            <li
              v-for="point in talk.highlights"
              :key="point"
              class="flex gap-2"
            >
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
              <span>{{ point }}</span>
            </li>
          </ul>
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
  </UContainer>
</template>
