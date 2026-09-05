<template>
  <div class="ownership-diagram">
    <div class="actor-wrap">
      <span class="role">Design team</span><br />
      <span class="sub"
        >Design owns the rules and source assets. Sizes, colors, which could also vary over
        time</span
      >
    </div>
    <div class="arrow"><span class="arrow-shape arrow-down"></span></div>
    <div class="node node-data">SVG source assets</div>
    <span class="sub">Source of truth for icons</span>
    <div class="arrow"><span class="arrow-shape arrow-down"></span></div>

    <div class="module-boundary">
      <div class="boundary-label">UI Library package</div>
      <div class="row">
        <div class="node node-data">SVG assets</div>
        <div class="arrow">
          <span class="arrow-label">nuxt-compose-icons</span>
          <span class="arrow-shape arrow-right"></span>
        </div>
        <div class="node">Generated, themed components</div>
      </div>
    </div>
    <div class="arrow">
      <span class="arrow-shape arrow-down"></span>
      <span class="arrow-label">developers import components only</span>
    </div>

    <div class="actor-wrap">
      <span class="role">Developers</span><br />

      <span class="sub"
        >Developers launch their dev environment and use the library to demonstrate the components
        in context.
      </span>
    </div>
    <div class="arrow"><span class="arrow-shape arrow-down"></span></div>
    <div class="row">
      <div class="node">App 1</div>
      <div class="node">App 2</div>
      <div class="node">App 3</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ownership-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  margin: 2rem 0;
  text-align: center;

  .row {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* process step: plain rectangle */
  .node {
    padding: 0.6rem 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    font-size: 1rem;
    line-height: 1.4;

    /* data artifact: parallelogram, extra side padding so text clears the slant */
    &.node-data {
      padding: 0.6rem 1.75rem;
      border-radius: 0;
      clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    }
  }

  /* actor / role label: filled pill */
  .role {
    display: inline-block;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 999px;
    color: white;
    background-color: var(--vp-c-brand-1);
    font-weight: 700;
    font-size: 1.25rem;
    max-width: 380px;
    padding: 0.4rem 1.25rem;
  }

  .sub {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    color: var(--vp-c-text-2);
    margin-top: 0;
  }

  /* actor card: terminator shape, generously rounded */
  .actor-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    border: 2px solid var(--vp-c-brand-1);
    border-radius: 40px;
    padding: 1.25rem 1.5rem;
    max-width: 380px;
  }

  /* module boundary: dashed, since it's a grouping, not a step */
  .module-boundary {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    border: 2px dashed var(--vp-c-brand-1);
    padding: 1rem 1.25rem;
    max-width: 380px;

    .boundary-label {
      font-weight: 600;
      font-size: 0.8rem;
      color: var(--vp-c-brand-1);
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 0.5rem 0;

    .arrow-label {
      font-size: 0.75rem;
      line-height: 1;
      color: var(--vp-c-text-2);
    }

    .arrow-shape {
      display: inline-block;
      position: relative;
      flex: none;

      &.arrow-down {
        width: 1px;
        height: 22px;
        background: var(--vp-c-text-2);

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -1px;
          transform: translateX(-50%);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid var(--vp-c-text-2);
        }
      }

      &.arrow-right {
        width: 22px;
        height: 1px;
        background: var(--vp-c-text-2);

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -1px;
          transform: translateY(-50%);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 6px solid var(--vp-c-text-2);
        }
      }
    }
  }
}
</style>
