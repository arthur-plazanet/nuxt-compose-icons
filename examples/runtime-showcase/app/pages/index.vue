<template>
  <GettingStarted />

  <div class="page">
    <aside class="controls">
      <div class="controls__field">
        <div class="controls__label-row">
          <span class="controls__label">Size</span>
          <span class="controls__badge">{{ size }} — {{ iconSizes[size] }}</span>
        </div>
        <input
          v-model="sizeIndex"
          type="range"
          min="0"
          :max="sizes.length - 1"
          step="1"
          class="controls__range"
        />
        <div class="controls__ticks">
          <span
            v-for="s in sizes"
            :key="s"
            class="controls__tick"
            :class="{ 'controls__tick--active': s === size }"
            >{{ s }}</span
          >
        </div>
      </div>

      <label class="controls__field">
        <div class="controls__label-row">
          <span class="controls__label">Fill</span>
          <input v-model="fillEnabled" type="checkbox" class="controls__checkbox" />
        </div>
        <input v-model="fillColor" type="color" :disabled="!fillEnabled" class="controls__color" />
      </label>

      <label class="controls__field">
        <div class="controls__label-row">
          <span class="controls__label">Stroke</span>
          <input v-model="strokeEnabled" type="checkbox" class="controls__checkbox" />
        </div>
        <input
          v-model="strokeColor"
          type="color"
          :disabled="!strokeEnabled"
          class="controls__color"
        />
      </label>

      <label class="controls__field">
        <div class="controls__label-row">
          <span class="controls__label">Stroke width</span>
          <span class="controls__badge">{{ strokeWidthEnabled ? strokeWidthValue : '—' }}</span>
          <input v-model="strokeWidthEnabled" type="checkbox" class="controls__checkbox" />
        </div>
        <input
          v-model="strokeWidthValue"
          type="range"
          min="0.5"
          max="4"
          step="0.5"
          :disabled="!strokeWidthEnabled"
          class="controls__range"
        />
      </label>

      <div class="controls__meta">{{ icons.length }} icons</div>
    </aside>

    <main class="overview">
      <!-- Rendered on the server too: icons are real components, so they appear
           before hydration and the e2e test can assert on the SSR markup. This grid is
           built entirely from the index.ts barrel (component.hasIndexFile: true) —
           no registry, no built-in overview component. -->
      <div v-for="icon in icons" :key="icon.name" class="overview__cell">
        <component
          :is="icon.component"
          :size="size"
          :fill="fill"
          :stroke="stroke"
          :stroke-width="strokeWidth"
        />
        <span class="overview__name">{{ icon.name }}</span>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useComposeIconTheme } from 'nuxt-compose-icons/composables';
import { computed, ref } from 'vue';
import GettingStarted from '~/components/GettingStarted.vue';
import * as IconComponents from '~/components/icons';

const icons = Object.entries(IconComponents).map(([name, component]) => ({ name, component }));
const { sizes: iconSizes } = useComposeIconTheme();
const sizes = Object.keys(iconSizes);

const sizeIndex = ref(sizes.includes('lg') ? sizes.indexOf('lg') : 0);
const size = computed(() => sizes[sizeIndex.value]);

const fillEnabled = ref(false);
const fillColor = ref('#ffffff');
const fill = computed(() => (fillEnabled.value ? fillColor.value : undefined));

const strokeEnabled = ref(false);
const strokeColor = ref('#ffffff');
const stroke = computed(() => (strokeEnabled.value ? strokeColor.value : undefined));

const strokeWidthEnabled = ref(false);
const strokeWidthValue = ref(1.5);
const strokeWidth = computed(() => (strokeWidthEnabled.value ? strokeWidthValue.value : undefined));
</script>

<style scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  min-height: 100svh;
}

.controls {
  flex: 0 0 240px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
  border-right: 1px solid var(--border);
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  box-sizing: border-box;
}

.controls__field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.controls__label-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.controls__label {
  flex: 1;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
}

.controls__badge {
  font-size: 0.65rem;
  color: var(--brand);
  background: var(--brand-subtle);
  padding: 0.15em 0.5em;
  border-radius: var(--border-radius-4);
}

.controls__range {
  width: 100%;
  accent-color: var(--brand);
  cursor: pointer;
  margin: 0;
}

.controls__range:disabled,
.controls__color:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.controls__ticks {
  display: flex;
  justify-content: space-between;
}

.controls__tick {
  font-size: 0.6rem;
  color: var(--faint);
  transition: color 0.15s;
}

.controls__tick--active {
  color: var(--brand);
}

.controls__checkbox {
  accent-color: var(--brand);
}

.controls__color {
  width: 100%;
  height: 2rem;
  border: 1px solid var(--border);
  background: none;
  border-radius: var(--border-radius-6);
  cursor: pointer;
  padding: 0.1rem;
  box-sizing: border-box;
}

.controls__meta {
  margin-top: auto;
  font-size: 0.65rem;
  color: var(--faint);
}

.overview {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  background-color: var(--bg-overview);
  align-content: start;
}

.overview__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.overview__name {
  font-size: 0.65rem;
  color: var(--faint);
  text-align: center;
  word-break: break-word;
}

@media (width <= 640px) {
  .controls {
    flex: 1 1 100%;
    position: static;
    height: auto;
    flex-flow: row wrap;
    gap: var(--spacing-xs) var(--spacing-md);
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .controls__field {
    flex: 1 1 140px;
    min-width: 120px;
  }

  .controls__meta {
    margin-top: 0;
    align-self: flex-end;
  }

  .overview {
    padding: var(--spacing-md);
  }
}
</style>
