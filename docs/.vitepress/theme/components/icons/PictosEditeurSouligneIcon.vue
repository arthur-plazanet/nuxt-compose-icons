<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '82',
  height: '82',
  viewBox: '0 0 82 82',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'g',
    props: { 'clip-path': 'url(#clip0_1_395)' },
    key: null,
    ref: null,
    scopeId: null,
    slotScopeIds: null,
    children: [
      '\n',
      {
        __v_isVNode: true,
        __v_skip: true,
        type: 'path',
        props: {
          d: 'M40.6655 67.0442C37.1694 67.0442 34.0463 66.3567 31.296 64.9815C28.5457 63.6064 26.3782 61.6486 24.7933 59.1081C23.2084 56.5443 22.4159 53.4794 22.4159 49.9134V20.8259L16.7173 19.847V15.4069H35.0019V19.847L29.3032 20.8259V49.9134C29.3032 52.4539 29.781 54.5865 30.7366 56.3112C31.7155 58.036 33.0673 59.3412 34.7921 60.2269C36.5168 61.0892 38.5096 61.5204 40.7704 61.5204C43.0545 61.5204 45.0706 61.0892 46.8187 60.2269C48.59 59.3645 49.9651 58.0709 50.944 56.3462C51.9463 54.6215 52.4474 52.4772 52.4474 49.9134V20.8259L46.7487 19.847V15.4069H65.0333V19.847L59.3347 20.8259V49.9134C59.3347 53.5959 58.5539 56.7191 56.9923 59.2829C55.454 61.8234 53.2864 63.7579 50.4896 65.0864C47.6927 66.3916 44.418 67.0442 40.6655 67.0442Z',
          fill: 'var(--icon-fill, black)',
        },
        key: null,
        ref: null,
        scopeId: null,
        slotScopeIds: null,
        children: [],
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: 17,
        patchFlag: 0,
        dynamicProps: null,
        dynamicChildren: null,
        appContext: null,
        ctx: null,
      },
      '\n',
      {
        __v_isVNode: true,
        __v_skip: true,
        type: 'path',
        props: {
          d: 'M19.27 70.27H62.47',
          stroke: 'var(--icon-stroke, black)',
          'stroke-width': 'var(--icon-stroke-width, 3)',
          'stroke-miterlimit': '10',
        },
        key: null,
        ref: null,
        scopeId: null,
        slotScopeIds: null,
        children: [],
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: 17,
        patchFlag: 0,
        dynamicProps: null,
        dynamicChildren: null,
        appContext: null,
        ctx: null,
      },
      '\n',
    ],
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: 17,
    patchFlag: 0,
    dynamicProps: null,
    dynamicChildren: null,
    appContext: null,
    ctx: null,
  },
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'defs',
    props: {},
    key: null,
    ref: null,
    scopeId: null,
    slotScopeIds: null,
    children: [
      '\n',
      {
        __v_isVNode: true,
        __v_skip: true,
        type: 'clippath',
        props: { id: 'clip0_1_395' },
        key: null,
        ref: null,
        scopeId: null,
        slotScopeIds: null,
        children: [
          '\n',
          {
            __v_isVNode: true,
            __v_skip: true,
            type: 'rect',
            props: {
              width: '81',
              height: '81',
              fill: 'var(--icon-fill, white)',
              transform: 'translate(0.5 0.5)',
            },
            key: null,
            ref: null,
            scopeId: null,
            slotScopeIds: null,
            children: [],
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetStart: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: 17,
            patchFlag: 0,
            dynamicProps: null,
            dynamicChildren: null,
            appContext: null,
            ctx: null,
          },
          '\n',
        ],
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: 17,
        patchFlag: 0,
        dynamicProps: null,
        dynamicChildren: null,
        appContext: null,
        ctx: null,
      },
      '\n',
    ],
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: 17,
    patchFlag: 0,
    dynamicProps: null,
    dynamicChildren: null,
    appContext: null,
    ctx: null,
  },
];

export default defineComponent({
  name: 'PictosEditeurSouligneIcon',
  props: {
    color: {
      type: String,
    },
    size: {
      type: String as PropType<IconSizeKeyValue>,
      default: 'md',
    },
  },
  setup(props: ComposeIconProps) {
    const iconSize = computed(() => {
      return getIconSizeClass(props.size || IconSize.md);
    });

    const styles = computed(() => ({
      '--icon-stroke': props.color,
      '--icon-fill': props.color,
    }));

    const iconClasses = computed(() => {
      return ['compose-icon', getIconSizeClass(iconSize.value)];
    });

    const iconAttributes = computed(() => ({
      ...svgAttributes,
      style: styles.value,
      class: iconClasses.value,
    }));
    return () => h('svg', iconAttributes.value, children);

    // return {
    //   iconAttributes,
    //   children,
    // };
  },
});
</script>
