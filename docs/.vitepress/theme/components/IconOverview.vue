<template>
  <!-- <YParallax class="icons-overview parallax"> -->
  <YParallax class="icons-overview">
    <template #back>
      <ClientOnly>
        <Component
          v-for="(icon, index) in icons"
          :is="icon"
          :key="index"
          class="icon"
          size="xl"
          :style="generateRandomStyles(index)"
        />
      </ClientOnly>
    </template>
    <template #default>
      <slot />
    </template>
  </YParallax>
</template>

<script setup>
import { YParallax } from '@use-compose/ui';
import { shallowRef } from 'vue';
import {
  AjouterIcon,
  ArticleIcon,
  BoiteAQuestion2Icon,
  BoiteAQuestionIcon,
  BookmarkIcon,
  BoutonFBIcon,
  BoutonInstaIcon,
  BoutonTwitterIcon,
  BrouillonIcon,
  ClocheIcon,
  CroixFermerIcon,
  CuicuiIcon,
  DevelopperIcon,
  EditIcon,
  EnveloppeIcon,
  FIcon,
  FacebookIcon,
  FlecheIcon,
  FlecheRetourIcon,
  Group37Icon,
  Group38Icon,
  GroupeIcon,
  ImportIcon,
  InstaIcon,
  InstagramIcon,
  LexiqueIcon,
  LinkIcon,
  LoupeIcon,
  MegaphoneIcon,
  MessageIcon,
  PersonnagesClesIcon,
  PictosCartes01Icon,
  PictosCartes02Icon,
  PictosCartes03Icon,
  PictosCartes04Icon,
  PictosCartes05Icon,
  PictosCartes06Icon,
  PictosEditeurAjouterImageIcon,
  PictosEditeurAjouterLienIcon,
  PictosEditeurAlignerDroiteIcon,
  PictosEditeurAlignerGaucheIcon,
  PictosEditeurAlignerMilieuIcon,
  PictosEditeurCitationIcon,
  PictosEditeurCommentaireIcon,
  PictosEditeurCouleurBlancIcon,
  PictosEditeurCouleurNoirIcon,
  PictosEditeurCouleurRougeIcon,
  PictosEditeurDeroulerIcon,
  PictosEditeurEncartIcon,
  PictosEditeurGrasIcon,
  PictosEditeurItaliqueIcon,
  PictosEditeurParagrapheIcon,
  PictosEditeurPucesIcon,
  PictosEditeurSouligneIcon,
  PictosEditeurSurlignageBlancIcon,
  PictosEditeurSurlignageNoirIcon,
  PictosEditeurSurlignageRougeIcon,
  PictosEditeurTitre1Icon,
  PictosEditeurTitre2Icon,
  PictosEditeurTraitIcon,
  PictosModulesAnonymeIcon,
  PictosModulesChronologieIcon,
  PictosModulesMettreEnAvantIcon,
  PictosModulesValiderIcon,
  Placeholder01Icon,
  PoingIcon,
  ProfilIcon,
  ReduireIcon,
  RevueDePresseIcon,
  SaveIcon,
  TexteIcon,
  TrashIcon,
  TwitterIcon,
} from './icons';
import './icons/assets/compose-icon.css';
import './icons/assets/compose-sizes.css';

const icons = shallowRef([
  AjouterIcon,
  ArticleIcon,
  BoiteAQuestion2Icon,
  BoiteAQuestionIcon,
  BookmarkIcon,
  BoutonFBIcon,
  BoutonInstaIcon,
  BoutonTwitterIcon,
  BrouillonIcon,
  ClocheIcon,
  CroixFermerIcon,
  CuicuiIcon,
  DevelopperIcon,
  EditIcon,
  EnveloppeIcon,
  FIcon,
  FacebookIcon,
  FlecheIcon,
  FlecheRetourIcon,
  Group37Icon,
  Group38Icon,
  GroupeIcon,
  ImportIcon,
  InstaIcon,
  InstagramIcon,
  LexiqueIcon,
  LinkIcon,
  LoupeIcon,
  MegaphoneIcon,
  MessageIcon,
  PersonnagesClesIcon,
  PictosCartes01Icon,
  PictosCartes02Icon,
  PictosCartes03Icon,
  PictosCartes04Icon,
  PictosCartes05Icon,
  PictosCartes06Icon,
  PictosEditeurAjouterImageIcon,
  PictosEditeurAjouterLienIcon,
  PictosEditeurAlignerDroiteIcon,
  PictosEditeurAlignerGaucheIcon,
  PictosEditeurAlignerMilieuIcon,
  PictosEditeurCitationIcon,
  PictosEditeurCommentaireIcon,
  PictosEditeurCouleurBlancIcon,
  PictosEditeurCouleurNoirIcon,
  PictosEditeurCouleurRougeIcon,
  PictosEditeurDeroulerIcon,
  PictosEditeurEncartIcon,
  PictosEditeurGrasIcon,
  PictosEditeurItaliqueIcon,
  PictosEditeurParagrapheIcon,
  PictosEditeurPucesIcon,
  PictosEditeurSouligneIcon,
  PictosEditeurSurlignageBlancIcon,
  PictosEditeurSurlignageNoirIcon,
  PictosEditeurSurlignageRougeIcon,
  PictosEditeurTitre1Icon,
  PictosEditeurTitre2Icon,
  PictosEditeurTraitIcon,
  PictosModulesAnonymeIcon,
  PictosModulesChronologieIcon,
  PictosModulesMettreEnAvantIcon,
  PictosModulesValiderIcon,
  Placeholder01Icon,
  PoingIcon,
  ProfilIcon,
  ReduireIcon,
  RevueDePresseIcon,
  SaveIcon,
  TexteIcon,
  TrashIcon,
  TwitterIcon,
]);

const tt = icons.value.map((icon, index) => {
  const newIcon = icon;
  return {
    ...newIcon,
    ...{ style: generateRandomStyles(index) },
  };
});

function generateRandomStyles(index) {
  return {
    '--_top': `calc(100svh * ${Math.random()})`, // 10% to 90%
    '--_left': `calc(100svw * ${Math.random()})`, // 10% to 90%
    '--_scale': `${Math.random() * 90 + 50}%`, // 50% to 100%
  };
}
</script>

<style>
.icons-overview {
  z-index: 0;
  inset: 0;

  & > .parallax-back {
    opacity: 0.3;
    z-index: 0;
    animation: zTransform 30s ease-in-out infinite alternate;
    --_scale: 1.5;
  }

  .icon {
    position: absolute;
    transform: translate(var(--left, var(--_left)), var(--top, var(--_top)))
      scale(var(--scale, var(--_scale)));
    /* animation: scaling 10s ease-in-out infinite alternate; */
  }

  & > :last-child {
    z-index: 1;
  }

  /* .parallax__layer--back {
    opacity: 0.3;
  } */
}

@keyframes zTransform {
  0% {
    transform: translateZ(calc(-0.3px * var(--_scale))) scale(var(--_scale));
  }
  100% {
    transform: translateZ(calc(-1px * var(--_scale))) scale(var(--_scale));
  }
}

@media (prefers-reduced-motion: reduce) {
  .icons-overview > .parallax-back {
    animation: none;
  }
}
/* 
@keyframes scaling {
  0% {
    --_scale: calc(var(--_scale) * 90 + 50%);
    --left: calc(var(--_left) * 100svh + 50%);
    --top: calc(var(--_top) * 90 + 50%);
    transform: translate(var(--left, var(--_left), var(--_vw)), var(--top, var(--_top), var(--_vh)))
      scale(var(--scale, var(--_scale)));
  }
  100% {
    --left: calc(var(--_left) * 90 + 50%);
    --top: calc(var(--_top) * 90 + 50%);
    --_scale: calc(var(--_scale) * 90 + 50%);
    transform: translate(var(--left, var(--_left)), var(--top, var(--_top)))
      scale(calc(var(--scale, var(--_scale)) * 1.2));
  }
} */
</style>
