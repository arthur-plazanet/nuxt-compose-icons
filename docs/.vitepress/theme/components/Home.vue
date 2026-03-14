<template>
  <!-- <VPHomeHero> -->
  <IconOverview>
    <div class="home-content">
      <Wrapper>
        <Banner />
      </Wrapper>
    </div>
    <details>
      <summary style="margin-bottom: 1rem">Configuration</summary>
      <div class="holy">
        <CodeHighlighter :code="codeLoadModule" lang="js" />
        <CodeHighlighter file-name=".nuxt.component.d.ts" :code="nuxtComponentBuilt" lang="js" />
      </div>
    </details>
  </IconOverview>
  <!-- </VPHomeHero> -->
</template>

<script setup>
import { Wrapper } from '@use-compose/ui';
import Banner from './Banner.vue';
import CodeHighlighter from './CodeHighlighter.vue';
import IconOverview from './IconOverview.vue';

const codeLoadModule = `modules: [
  [
    // Add the module to your nuxt config
    '@nuxt-compose-icons',
    {
      // Give a path to your icon files directory
      pathToIcons: resolve(__dirname, './src/runtime/assets/images/icons'),
      //  or
      iconComponentList: iconComponentList,
      // pass your desired icon sizes depending on your design system
      IconSizes: {
        s: '2rem',
        m: '3rem',
        l: '4rem',
        xl: '6rem',
      },
    },
  ],
];
`;

const nuxtComponentBuilt = `/* At build time, 
* You will be able to see the injected components.ts inside your .nuxt directory
* The path will be the path of the module with a subdirectory "icons-generated"
*/

'AddNoteIcon': typeof import("../icons-generated/AddNoteIcon.vue")['default'];
'DeleteIcon': typeof import("../icons-generated/DeleteIcon.vue")['default'];
'EditIcon': typeof import("../icons-generated/EditIcon.vue")['default'];
'SettingsIcon': typeof import("../icons-generated/SettingsIcon.vue")['default'];
'SlideRightIcon': typeof import("../icons-generated/SlideRightIcon.vue")['default'];
'TimeIcon': typeof import("../icons-generated/TimeIcon.vue")['default'];

// with all your own components
`;
</script>

<style>
.wrapper {
  z-index: 0;
  /* position: relative; */
}
</style>
