<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '53',
  height: '52',
  viewBox: '0 0 53 52',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'g',
    props: { 'clip-path': 'url(#clip0_1_175)' },
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
          d: 'M51.5 1.5V33.5H25.855L9.5 49.586V33.5H1.5V1.5H51.5Z',
          stroke: 'var(--icon-stroke, black)',
          'stroke-width': 'var(--icon-stroke-width, 3)',
          'stroke-miterlimit': '10',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
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
          d: 'M11 9.5H43',
          stroke: 'var(--icon-stroke, black)',
          'stroke-width': 'var(--icon-stroke-width, 3)',
          'stroke-miterlimit': '10',
          'stroke-linejoin': 'round',
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
          d: 'M11 17.5H43',
          stroke: 'var(--icon-stroke, black)',
          'stroke-width': 'var(--icon-stroke-width, 3)',
          'stroke-miterlimit': '10',
          'stroke-linejoin': 'round',
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
          d: 'M11 24.5H31',
          stroke: 'var(--icon-stroke, black)',
          'stroke-width': 'var(--icon-stroke-width, 3)',
          'stroke-miterlimit': '10',
          'stroke-linejoin': 'round',
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
        props: { id: 'clip0_1_175' },
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
            props: { width: '53', height: '51.086', fill: 'var(--icon-fill, white)' },
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
  name: 'MessageIcon',
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
