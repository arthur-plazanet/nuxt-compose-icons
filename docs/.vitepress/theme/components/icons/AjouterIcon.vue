<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '39',
  height: '39',
  viewBox: '0 0 39 39',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'g',
    props: { 'clip-path': 'url(#clip0_1_194)' },
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
          d: 'M19.564 36.627C29.2643 36.627 37.128 28.7633 37.128 19.063C37.128 9.36266 29.2643 1.49899 19.564 1.49899C9.86367 1.49899 2 9.36266 2 19.063C2 28.7633 9.86367 36.627 19.564 36.627Z',
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
          d: 'M19.563 7.631V30.496',
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
          d: 'M7.763 19.063H31.364',
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
        props: { id: 'clip0_1_194' },
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
              width: '38.127',
              height: '38.127',
              fill: 'var(--icon-fill, white)',
              transform: 'translate(0.5)',
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
  name: 'AjouterIcon',
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
