<script setup lang="ts">
import { profile, projects, stack } from '~/data/portfolio'

const marqueeStack = [...stack, ...stack]
const featuredProjects = projects.slice(0, 3)

function goToProject(slug: string) {
  return navigateTo(`/projects/${slug}`)
}

const typingPhrases = ['Reuter Jan Camacho', 'Full-Stack Software Engineer', 'Data Scientist | AI Engineer']
const typedText = ref('')
const typingIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const openToOpportunities = ref(true)

function tickTyping() {
  const phrase = typingPhrases[typingIndex.value] || ''

  if (!isDeleting.value) {
    charIndex.value = Math.min(charIndex.value + 1, phrase.length)
    typedText.value = phrase.slice(0, charIndex.value)
    if (charIndex.value >= phrase.length) {
      isDeleting.value = true
      setTimeout(tickTyping, 900)
      return
    }
    setTimeout(tickTyping, 70)
    return
  }

  charIndex.value = Math.max(charIndex.value - 1, 0)
  typedText.value = phrase.slice(0, charIndex.value)
  if (charIndex.value <= 0) {
    isDeleting.value = false
    typingIndex.value = (typingIndex.value + 1) % typingPhrases.length
    setTimeout(tickTyping, 250)
    return
  }
  setTimeout(tickTyping, 40)
}

onMounted(() => {
  tickTyping()
})
</script>

<template>
  <div>
    <UContainer class="py-14 sm:py-20">
      <section class="rounded-3xl border border-default p-7 sm:p-10 bg-elevated/40 relative overflow-hidden">
        <div class="orb orb-a" />
        <div class="orb orb-b" />
        <div class="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div class="max-w-3xl">
            <UBadge
              color="primary"
              variant="subtle"
              class="mb-4"
            >
              {{ openToOpportunities ? 'Actively Looking for Opportunities' : '' }}
            </UBadge>
            <h1 class="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              <span class="text-muted text-base sm:text-lg font-medium tracking-wide block mb-3">
                Personal Portfolio
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="text-primary">
                  {{ typedText }}
                </span>
                <span
                  class="typing-caret"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p class="mt-5 text-lg text-muted leading-relaxed">
              I’m a Computer Science student at UP Diliman with a passion for Data Science and Software Engineering, complemented by leadership experience in student technology organizations.
            </p>

            <div class="mt-7 flex flex-wrap gap-3">
              <UButton
                to="/projects"
                color="primary"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
              >
                View Projects
              </UButton>
              <UButton
                to="/contact"
                color="neutral"
                variant="soft"
                size="lg"
              >
                Contact Me
              </UButton>
            </div>
          </div>
          <div class="justify-self-center lg:justify-self-end lg:mr-12 xl:mr-16">
            <div class="relative -mt-2 lg:-mt-4">
              <div class="absolute -inset-4 rounded-full bg-primary/45 blur-3xl" />
              <img
                src="/images/profile.jpg"
                alt="Profile photo"
                class="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 rounded-full object-cover object-[center_28%] border-4 border-primary/55 shadow-2xl shadow-primary/40"
              >
            </div>
          </div>
        </div>
      </section>
    </UContainer>

    <UContainer class="pb-10">
      <section>
        <h2 class="section-title">
          Skills
        </h2>
        <div class="skills-marquee mt-4">
          <div class="skills-marquee-track">
            <div
              v-for="(item, index) in marqueeStack"
              :key="`${item}-${index}`"
              class="skills-chip"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </section>
    </UContainer>

    <UContainer class="py-10">
      <section>
        <h2 class="section-title">
          Featured Builds
        </h2>
        <div class="grid lg:grid-cols-3 gap-5 mt-4">
          <UCard
            v-for="project in featuredProjects"
            :key="project.title"
            :ui="{ body: 'space-y-4' }"
            class="h-full border-primary/20 relative transition-transform hover:-translate-y-0.5"
            role="link"
            tabindex="0"
            @click="goToProject(project.slug)"
            @keydown.enter="goToProject(project.slug)"
            @keydown.space.prevent="goToProject(project.slug)"
          >
            <template #header>
              <div class="space-y-2">
                <p class="text-xs uppercase tracking-[0.2em] text-primary">
                  Mission Log
                </p>
                <h3 class="text-lg font-semibold">
                  {{ project.title }}
                </h3>
              </div>
            </template>

            <p class="text-muted text-sm">
              {{ project.description }}
            </p>
            <p class="text-sm font-semibold text-primary">
              {{ project.impact }}
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in project.stack"
                :key="tag"
                color="neutral"
                variant="subtle"
              >
                {{ tag }}
              </UBadge>
            </div>
            <UButton
              :to="`/projects/${project.slug}`"
              color="primary"
              variant="ghost"
              size="sm"
              trailing-icon="i-lucide-arrow-right"
              class="relative z-20"
              @click.stop
            >
              View Project
            </UButton>
            <div class="flex flex-wrap gap-2">
              <UButton
                v-if="project.githubUrl"
                :to="project.githubUrl"
                target="_blank"
                color="neutral"
                variant="outline"
                size="sm"
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
                color="neutral"
                variant="soft"
                size="sm"
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
    </UContainer>

    <UContainer class="py-10 pb-16">
      <section class="rounded-2xl border border-primary/35 p-7 bg-primary/5">
        <h2 class="section-title">
          Open To Opportunities
        </h2>
        <p class="text-muted mt-3 max-w-2xl">
          I am currently looking for Software Engineering and Data/AI internship opportunities where
          I can contribute to real products and learn from high-performing teams.
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <UButton
            to="/contact"
            color="primary"
            trailing-icon="i-lucide-arrow-right"
          >
            Go To Contact Page
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
          <UButton
            :to="profile.linkedin"
            target="_blank"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-linkedin"
          >
            LinkedIn
          </UButton>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped>
.typing-caret {
  width: 10px;
  height: 1.2em;
  display: inline-block;
  border-radius: 999px;
  background: rgb(122 67 255 / 0.95);
  box-shadow: 0 0 18px rgb(122 67 255 / 0.45);
  animation: caret-blink 1s steps(1) infinite;
}

@keyframes caret-blink {
  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typing-caret {
    animation: none;
  }
}
</style>
