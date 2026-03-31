<template>
  <div class="icons-overview parallax">
    <div class="parallax__layer parallax__layer--back">
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
    </div>
    <div class="parallax__layer parallax__layer--base">
      <slot />
    </div>
  </div>
</template>

<script setup>
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

<style lang="scss">
.icons-overview {
  z-index: 0;
  inset: 0;

  .icon {
    position: absolute;
    transform: translate(var(--left, var(--_left)), var(--top, var(--_top)))
      scale(var(--scale, var(--_scale)));
  }

  .parallax__layer--back {
    opacity: 0.3;
  }
}
</style>
