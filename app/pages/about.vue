<script setup lang="ts">
import type { Certification } from '~/data/portfolio'
import { activities, certifications, experiences, focusAreas, projects, talks } from '~/data/portfolio'

const certRotation = ref(0)
const certCount = computed(() => certifications.length)

const certDeckAnimating = ref(false)
const certDeckEnterFront = ref(false)

function certPrefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function rotateCertToBack() {
  if (certCount.value < 2 || certDeckAnimating.value) {
    return
  }
  if (certPrefersReducedMotion()) {
    certRotation.value = (certRotation.value + 1) % certCount.value
    return
  }
  certDeckAnimating.value = true
  window.setTimeout(() => {
    certRotation.value = (certRotation.value + 1) % certCount.value
    certDeckAnimating.value = false
  }, 520)
}

function bringCertFromBack() {
  if (certCount.value < 2 || certDeckAnimating.value) {
    return
  }
  certRotation.value = (certRotation.value - 1 + certCount.value) % certCount.value
  if (certPrefersReducedMotion()) {
    return
  }
  certDeckAnimating.value = true
  certDeckEnterFront.value = true
  window.setTimeout(() => {
    certDeckEnterFront.value = false
    certDeckAnimating.value = false
  }, 480)
}

function certStackOuterStyle(idx: number) {
  return {
    zIndex: 4 - idx,
    transform: `translateY(${idx * 10}px) scale(${1 - idx * 0.04})`
  }
}

function certIndexFromFront(distanceFromFront: number) {
  const n = certCount.value
  if (!n) {
    return 0
  }
  return (certRotation.value + distanceFromFront) % n
}

/** Front of deck = index 0; order matches visual layers back → front. */
const certStack = computed((): Certification[] => {
  const n = certCount.value
  if (!n) {
    return []
  }
  return Array.from({ length: n }, (_, d) => certifications[certIndexFromFront(d)] as Certification)
})

const stats = [
  { label: 'Projects', value: String(projects.length) },
  { label: 'Experiences', value: String(experiences.length) },
  { label: 'Talks', value: String(talks.length) }
]
</script>

<template>
  <UContainer class="py-14 sm:py-20">
    <section class="relative overflow-hidden rounded-3xl border border-default bg-elevated/40 p-7 sm:p-10">
      <div class="absolute inset-0 -z-10">
        <div class="sai-grid absolute inset-0 opacity-50" />
        <div class="about-blob about-blob-a" />
        <div class="about-blob about-blob-b" />
        <div class="about-blob about-blob-c" />
      </div>

      <div class="max-w-3xl space-y-5">
        <div class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted backdrop-blur">
          <span class="h-1.5 w-1.5 rounded-full bg-primary/80" />
          Building production-ready SWE + practical ML
        </div>

        <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          About
        </h1>
        <p class="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
          Computer Science major focused on software engineering excellence, data systems, and practical ML.
          I like shipping reliable products with clear metrics and clean, maintainable design.
        </p>

        <div class="flex flex-wrap gap-3 pt-2">
          <div
            v-for="s in stats"
            :key="s.label"
            class="rounded-2xl border border-border/70 bg-background/60 px-4 py-3 backdrop-blur"
          >
            <div class="text-lg font-semibold tabular-nums">
              {{ s.value }}
            </div>
            <div class="text-xs text-muted uppercase tracking-[0.14em]">
              {{ s.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <div class="flex items-end justify-between gap-6">
        <div>
          <h2 class="section-title">
            Experience Timeline
          </h2>
          <p class="text-sm text-muted mt-2 max-w-2xl">
            A quick timeline of roles and milestones (alternating on desktop, single column on mobile).
          </p>
        </div>
      </div>

      <div class="mt-5 relative">
        <div class="hidden md:block absolute inset-y-0 left-1/2 w-px bg-border -translate-x-1/2" />
        <TransitionGroup
          name="about-rise"
          tag="div"
          class="space-y-6"
        >
          <div
            v-for="(exp, idx) in experiences"
            :key="`${exp.role}-${exp.organization}-${exp.period}`"
            class="relative md:grid md:grid-cols-2 md:gap-8"
          >
            <div
              class="hidden md:block absolute left-1/2 top-8 -translate-x-1/2"
              aria-hidden="true"
            >
              <span class="h-4 w-4 rounded-full bg-primary ring-4 ring-background block about-pulse" />
            </div>

            <div
              class="md:hidden absolute left-0 top-8"
              aria-hidden="true"
            >
              <span class="h-3 w-3 rounded-full bg-primary ring-4 ring-background block about-pulse" />
            </div>
            <div
              class="md:hidden absolute inset-y-0 left-[5px] w-px bg-border"
              aria-hidden="true"
            />

            <div
              :class="idx % 2 === 0 ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10'"
              class="pl-8 md:pl-0"
            >
              <UCard class="sai-panel transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
                <template #header>
                  <div class="space-y-2">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <h3 class="text-lg font-semibold leading-snug">
                          {{ exp.role }}
                        </h3>
                        <p class="text-sm text-muted leading-snug mt-1">
                          {{ exp.organization }}
                        </p>
                        <p class="text-xs text-muted/90 leading-snug tabular-nums mt-1">
                          {{ exp.period }}<span v-if="exp.location"> · {{ exp.location }}</span>
                        </p>
                      </div>
                      <span class="hidden sm:grid h-10 w-10 place-items-center rounded-2xl border border-border/70 bg-background/70">
                        <span class="h-2 w-2 rounded-full bg-primary/80" />
                      </span>
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
        </TransitionGroup>
      </div>
    </section>
    <br>
    <section class="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
      <div class="min-w-0">
        <UCard class="sai-panel h-full">
          <template #header>
            <div class="space-y-1">
              <h2 class="text-lg font-semibold">
                Focus Areas
              </h2>
              <p class="text-sm text-muted">
                What I’m leaning into right now.
              </p>
            </div>
          </template>

          <div class="grid gap-3">
            <div
              v-for="area in focusAreas"
              :key="area.title"
              class="group rounded-2xl border border-border/70 bg-background/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/70"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-0.5">
                  <div class="font-semibold leading-snug">
                    {{ area.title }}
                  </div>
                  <div
                    v-if="area.subtitle"
                    class="text-xs text-muted uppercase tracking-[0.14em]"
                  >
                    {{ area.subtitle }}
                  </div>
                </div>
                <span class="h-9 w-9 rounded-2xl border border-border/70 bg-background/70 grid place-items-center transition-transform duration-300 group-hover:rotate-3">
                  <span class="h-2 w-2 rounded-full bg-primary/80" />
                </span>
              </div>
              <ul class="mt-3 space-y-2 text-sm text-muted">
                <li
                  v-for="item in area.items"
                  :key="item"
                  class="flex gap-2"
                >
                  <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>
      </div>

      <div class="min-w-0 space-y-4">
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Credentials
          </p>
          <h2 class="section-title mt-2">
            Certifications
          </h2>
          <p class="mt-2 text-sm text-muted">
            Flip the stack: the top card goes to the back, or pull the back card forward.
          </p>
        </div>

        <div
          class="flex flex-col items-center lg:items-stretch"
          role="region"
          aria-label="Certification cards deck"
          tabindex="0"
          @keydown.left.prevent="rotateCertToBack"
          @keydown.right.prevent="bringCertFromBack"
        >
          <p
            v-if="certCount === 0"
            class="text-sm text-muted"
          >
            No certifications to show yet.
          </p>
          <template v-else>
            <div class="flex w-full max-w-lg mx-auto lg:max-w-none items-center justify-center gap-3 sm:gap-6">
              <UButton
                color="neutral"
                variant="outline"
                size="lg"
                class="shrink-0 !p-3 min-w-11"
                :disabled="certCount < 2 || certDeckAnimating"
                aria-label="Send top card to the back of the deck"
                icon="i-lucide-chevron-left"
                @click="rotateCertToBack"
              />
              <div
                class="ds-deck-viewport relative h-[min(52vh,420px)] w-full min-w-0 max-w-md lg:max-w-none mx-auto overflow-visible"
              >
                <div
                  v-for="(cert, idx) in certStack.slice(0, 4)"
                  :key="`deck-slot-${idx}`"
                  class="ds-deck-card absolute inset-x-4 top-6 bottom-6 will-change-transform"
                  :class="idx === 0 ? 'pointer-events-auto' : 'pointer-events-none'"
                  :style="certStackOuterStyle(idx)"
                >
                  <div
                    class="ds-deck-card-inner ds-deck-card-face relative flex h-full min-h-0 flex-col overflow-y-auto rounded-2xl p-6"
                    :class="{
                      'ds-deck-card-inner--to-back': certDeckAnimating && idx === 0,
                      'ds-deck-card-inner--enter-front': certDeckEnterFront && idx === 0
                    }"
                  >
                    <div :class="idx === 0 ? '' : 'select-none'">
                      <p class="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                        Certificate · {{ cert.date }}
                      </p>
                      <h3 class="mt-2 text-lg font-semibold leading-snug">
                        {{ cert.title }}
                      </h3>
                      <p class="mt-1 text-xs uppercase tracking-[0.14em] text-primary">
                        {{ cert.issuer }}
                      </p>
                      <p
                        v-if="cert.description"
                        class="mt-4 text-sm leading-relaxed text-muted"
                      >
                        {{ cert.description }}
                      </p>
                      <p
                        v-if="cert.credentialId"
                        class="mt-3 font-mono text-xs text-muted"
                      >
                        ID: {{ cert.credentialId }}
                      </p>
                      <div
                        v-if="cert.skills?.length"
                        class="mt-4 flex flex-wrap gap-2"
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
                    </div>
                    <div
                      v-if="idx === 0 && cert.links?.length"
                      class="mt-5 flex flex-wrap gap-2"
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
                  </div>
                </div>
              </div>
              <UButton
                color="neutral"
                variant="outline"
                size="lg"
                class="shrink-0 !p-3 min-w-11"
                :disabled="certCount < 2 || certDeckAnimating"
                aria-label="Bring back card to the front"
                icon="i-lucide-chevron-right"
                @click="bringCertFromBack"
              />
            </div>
            <p class="mt-4 text-center text-xs text-muted">
              {{ certCount }} in deck · use arrows or keyboard ← → when this area is focused
            </p>
          </template>
        </div>
      </div>
    </section>

    <section class="mt-14 relative overflow-hidden rounded-3xl border border-default bg-elevated/40 p-6 sm:p-10">
      <div class="orb orb-a opacity-80" />
      <div class="orb orb-b opacity-80" />
      <div
        class="sai-grid pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
      />
      <div class="relative z-10 space-y-10">
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Mission log
          </p>
          <h2 class="section-title mt-2">
            Extracurriculars & talks
          </h2>
          <p class="mt-2 max-w-2xl text-sm text-muted">
            Contests, teams, and speaking — one panel, same glass and violet accents as the rest of the site.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold leading-snug">
            Competitive programming & extracurriculars
          </h3>
          <p class="mt-1 text-sm text-muted">
            Contests, teams, and side builds.
          </p>
          <div class="mt-6 grid gap-5 md:grid-cols-2">
            <article
              v-for="(activity, aIdx) in activities"
              :key="`${activity.title}-${activity.period ?? aIdx}`"
              class="sai-panel group relative rounded-2xl border border-default p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/25"
            >
              <div
                class="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/45 via-primary/15 to-transparent"
                aria-hidden="true"
              />
              <div class="pl-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded-md border border-primary/25 bg-primary/5 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Log {{ String(aIdx + 1).padStart(2, '0') }}
                  </span>
                  <span
                    v-if="activity.period"
                    class="font-mono text-[11px] text-muted"
                  >
                    {{ activity.period }}
                  </span>
                </div>
                <h4 class="mt-3 text-lg font-semibold leading-snug">
                  {{ activity.title }}
                </h4>
                <p class="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {{ activity.organization }}
                </p>
                <p class="mt-4 text-sm leading-relaxed text-muted">
                  {{ activity.description }}
                </p>
                <ul
                  v-if="activity.highlights?.length"
                  class="mt-4 space-y-2 border-t border-default pt-4 text-sm"
                >
                  <li
                    v-for="point in activity.highlights"
                    :key="point"
                    class="flex gap-2"
                  >
                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
                <div
                  v-if="activity.links?.length"
                  class="mt-4 flex flex-wrap gap-2"
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
              </div>
            </article>
          </div>
        </div>

        <div class="border-t border-default pt-10">
          <h3 class="text-lg font-semibold leading-snug">
            Talks & seminars
          </h3>
          <p class="mt-1 text-sm text-muted">
            Event, date, and summary for each talk.
          </p>
          <div class="mt-6 grid gap-4 lg:grid-cols-3">
            <article
              v-for="(talk, tIdx) in talks"
              :key="`${talk.title}-${talk.date}`"
              class="sai-panel group relative overflow-hidden rounded-2xl border border-default p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25"
            >
              <div class="flex items-start justify-between gap-3">
                <span class="font-mono text-[10px] text-primary">
                  TX-{{ String(tIdx + 1).padStart(2, '0') }}
                </span>
                <span class="font-mono text-[10px] tabular-nums text-muted">
                  {{ talk.date }}
                </span>
              </div>
              <h4 class="mt-3 text-base font-semibold leading-snug">
                {{ talk.title }}
              </h4>
              <p class="mt-2 text-xs uppercase tracking-[0.14em] text-primary">
                {{ talk.event }}
              </p>
              <div
                class="mt-4 h-px w-full bg-gradient-to-r from-primary/35 via-primary/10 to-transparent"
                aria-hidden="true"
              />
              <p class="mt-4 text-sm leading-relaxed text-muted">
                {{ talk.description }}
              </p>
              <ul
                v-if="talk.highlights?.length"
                class="mt-4 space-y-2 border-t border-default pt-4 text-sm"
              >
                <li
                  v-for="point in talk.highlights"
                  :key="point"
                  class="flex gap-2"
                >
                  <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/80" />
                  <span>{{ point }}</span>
                </li>
              </ul>
              <div
                v-if="talk.links?.length"
                class="mt-4 flex flex-wrap gap-2"
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
            </article>
          </div>
        </div>
      </div>
    </section>
  </UContainer>
</template>

<style scoped>
.ds-deck-viewport {
  transform-style: preserve-3d;
  perspective: 1200px;
}

.ds-deck-card-inner {
  transform-origin: 50% 50%;
  backface-visibility: hidden;
}

/* Fully opaque faces — no theme alpha / glass (prevents stacked text bleed) */
.ds-deck-card-face {
  isolation: isolate;
  mix-blend-mode: normal;
  border: 1px solid rgb(216 216 230);
  background-color: #fafaff !important;
  box-shadow:
    0 14px 36px rgb(0 0 0 / 0.12),
    0 0 0 1px rgb(0 0 0 / 0.05);
}

.ds-deck-card-inner--to-back {
  animation: dsDeckFlyToBack 0.52s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

.ds-deck-card-inner--enter-front {
  animation: dsDeckEnterFront 0.48s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes dsDeckFlyToBack {
  0% {
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
    opacity: 1;
  }

  32% {
    transform: translate3d(0, -18px, 52px) rotateY(-10deg) scale(1.02);
    opacity: 1;
  }

  100% {
    transform: translate3d(0, 68px, -160px) rotateY(-82deg) scale(0.76);
    opacity: 0;
  }
}

@keyframes dsDeckEnterFront {
  from {
    transform: translate3d(0, 40px, -100px) rotateY(32deg) scale(0.86);
    opacity: 0.88;
  }

  to {
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
    opacity: 1;
  }
}

.about-blob {
  position: absolute;
  filter: blur(28px);
  opacity: 0.35;
  border-radius: 9999px;
  animation: aboutFloat 10s ease-in-out infinite;
}

.about-blob-a {
  width: 420px;
  height: 420px;
  left: -140px;
  top: -160px;
  background: radial-gradient(circle at 30% 30%, rgb(var(--color-primary-500) / 0.55), transparent 60%);
}

.about-blob-b {
  width: 520px;
  height: 520px;
  right: -220px;
  top: -180px;
  animation-delay: -2.5s;
  background: radial-gradient(circle at 30% 30%, rgb(var(--color-indigo-500) / 0.45), transparent 60%);
}

.about-blob-c {
  width: 460px;
  height: 460px;
  right: -180px;
  bottom: -220px;
  animation-delay: -5s;
  background: radial-gradient(circle at 30% 30%, rgb(56 189 248 / 0.22), transparent 60%);
}

.about-marquee {
  overflow: hidden;
}

.about-marquee__track {
  display: inline-block;
  white-space: nowrap;
  animation: aboutMarquee 26s linear infinite;
}

.about-pulse {
  box-shadow: 0 0 0 0 rgb(var(--color-primary-500) / 0.45);
  animation: aboutPulse 2.4s ease-in-out infinite;
}

@keyframes aboutMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes aboutFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, 14px, 0) scale(1.02);
  }
}

@keyframes aboutPulse {
  0% {
    box-shadow: 0 0 0 0 rgb(var(--color-primary-500) / 0.45);
  }
  70% {
    box-shadow: 0 0 0 14px rgb(var(--color-primary-500) / 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(var(--color-primary-500) / 0);
  }
}

.about-rise-enter-active,
.about-rise-leave-active {
  transition: opacity 320ms ease, transform 320ms ease;
}

.about-rise-enter-from,
.about-rise-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (prefers-reduced-motion: reduce) {
  .about-blob,
  .about-marquee__track,
  .about-pulse {
    animation: none !important;
  }
  .about-rise-enter-active,
  .about-rise-leave-active {
    transition: none !important;
  }
  .ds-deck-card-inner--to-back,
  .ds-deck-card-inner--enter-front {
    animation: none !important;
  }
}
</style>

<style>
/* Dark mode: solid opaque cert faces (class `dark` on html in Nuxt UI) */
html.dark .ds-deck-card-face {
  border-color: rgb(72 62 98);
  background-color: #14101f !important;
  box-shadow:
    0 18px 44px rgb(0 0 0 / 0.58),
    inset 0 1px 0 rgb(255 255 255 / 0.05);
}
</style>
