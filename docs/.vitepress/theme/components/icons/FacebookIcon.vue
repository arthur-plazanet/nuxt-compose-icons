<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '50',
  height: '49',
  viewBox: '0 0 50 49',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'g',
    props: { 'clip-path': 'url(#clip0_1_186)' },
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
          d: 'M36.915 26.819V47.521H29.198V26.819H26.086V20.646H29.198C29.233 17.878 29.433 15.861 29.797 14.591C30.16 13.323 31.096 12.196 32.605 11.212C34.112 10.228 36.162 9.735 38.752 9.735C39.815 9.735 41.039 9.833 42.423 10.028V16.148C41.288 16.059 40.348 16.015 39.602 16.015C38.52 16.015 37.801 16.298 37.448 16.866C37.093 17.434 36.916 18.356 36.916 19.634V20.646H41.786L40.96 26.819H36.915Z',
          stroke: 'var(--icon-stroke, black)',
          'stroke-width': 'var(--icon-stroke-width, 3)',
          'stroke-miterlimit': '10',
          'stroke-linecap': 'round',
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
          d: 'M48 1.5H2V47.5H48V1.5Z',
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
        props: { id: 'clip0_1_186' },
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
              width: '49',
              height: '49',
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
  name: 'FacebookIcon',
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
