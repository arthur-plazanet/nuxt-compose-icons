<template>
  <section class="banner">
    <header class="heading">
      <h1 class="heading-h1">
        <YHighlightedText level="span" active stick-to-left>
          <!-- <span style="color: white">Compose</span> -->
          Compose
        </YHighlightedText>
        your own Icon components library
      </h1>
      <Separator width="15%" />
      <h2 class="tagline">
        Automatically generates customizable Vue components based on SVG files
      </h2>
      <p>
        No extra wrapper needed. <br />
        <span class="brand">Generated</span> at build time,
        <span class="brand">customizable</span> at runtime using CSS custom properties
      </p>
    </header>

    <ClientOnly>
      <ModuleTemplateExample />
    </ClientOnly>
    <!-- <div class="parallax__layer parallax__layer--back"> -->
    <!-- <div class="parallax__layer parallax__layer--base"> -->
    <!-- </div> -->
    <!-- </div> -->

    <Features />
  </section>
</template>

<script setup>
import { YHighlightedText } from '@use-compose/ui';
import Features from './Features.vue';
import ModuleTemplateExample from './ModuleTemplateExample.vue';
import Separator from './Separator.vue';
</script>

<style lang="scss">
@import '../assets/scss/abstracts/mixins';

.banner {
  padding-top: calc(var(--vp-nav-height) + 2svh);
  container-name: banner;
  container-type: inline-size;
  display: grid;
  align-items: center;
  color: white;
  margin-bottom: 1rem;
  width: 100%;
  z-index: 1;
  // min-height: 100svh;

  row-gap: 1rem;
  grid-template-areas:
    'icon-overview'
    'tagline'
    'heading'
    'features'
    'module-template-example';

  // 'module-template-example module-template-example';
  // grid-template-columns: auto 1fr;

  // .app-title {
  //   grid-area: title;
  //   margin: 0;
  //   font-size: $text-5-5;
  // }

  // .description {
  //   grid-area: description;
  //   // height: 100%;
  //   // text-align: center;
  // }

  // .module-example {
  //   grid-area: module-example;
  // }

  // .module-template-example {
  //   grid-area: module-template-example;
  //   font-size: 14px;
  //   // height: 100%;

  //   :deep .prism-code {
  //     // height: 100%;
  //   }
  // }
  .icons-overview {
    grid-area: icon-overview;
    height: 100%;
    min-height: 8cqb;
    // grid-row: span 2;
  }
}

.highlighted-text > span {
  // padding: 4.55px 2px 0 2px;
}

.heading {
  max-width: 700px;
  grid-area: heading;
  align-self: end;
  color: white;

  .heading-h1 {
    position: relative;

    span {
      color: white;
    }

    // &::after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   margin: 6px 0 12px;
    //   background-color: var(--color-primary);
    //   height: 8px;
    //   width: 20%;
    //   // bottom: 0;
    // }
  }
}

.tagline {
  grid-area: tagline;
  align-self: end;

  &::first-letter {
    color: var(--color-primary);
  }
}

.module-template-example {
  grid-area: module-template-example;
}

.features {
  grid-area: features;
}

@include media('md') {
  .banner {
    // height: 100%;
    // align-content: center;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    grid-template-areas:
      'heading heading'
      'module-template-example features';
    // 'description description module-template-example'
    // 'module-example module-example module-template-example';
    // grid-template-columns: 1.5fr 1fr;
    // row-gap: unset;
    column-gap: 2rem;
    row-gap: 4rem;
    // justify-content: flex-start;
    // flex-direction: row;

    .title {
      max-width: 90%;
    }
  }
}
@container banner (min-width: 0px) {
  .features {
    // grid-template-columns: repeat(, minmax(200px, 1cqi));
    // grid-template-rows: repeat(auto, minmax(160px, 1cqi));
  }
}
@container banner (min-width: 540px) {
  .features {
    grid-template-columns: repeat(2, minmax(260px, 1cqi));
    grid-template-rows: repeat(auto, minmax(160px, 1cqi));
  }
}
@container banner (min-width: 1024px) {
  .features {
    grid-template-columns: repeat(4, minmax(260px, 1cqi));
    grid-template-rows: repeat(auto, minmax(160px, 1cqi));
  }
}
</style>
