<script>
import {
    mapState
} from "vuex";

import Primary from "./primary";
import Vertical from "./vertical";
import Horizontal from "./horizontal";
import Detached from "./detached";
import TwoColumn from "./two-column";

/**
 * Default Layout
 */
export default {
    components: {
        Primary,
        Vertical,
        Horizontal,
        Detached,
        TwoColumn,
    },
    data() {
        return {}
    },
    computed: mapState(["layout"]),
    mounted() {
        if (this.$route.query.layout) {
            this.$store.dispatch('layout/changeLayoutType', {
                layoutType: this.$route.query.layout
            })
        }
    }
};
</script>

<template>
<div>
    <Primary v-if="layout.layoutType === 'primary'" :layout="layout.layoutType">
        <Nuxt />
    </Primary>
    
    <Vertical v-if="layout.layoutType === 'vertical'" :layout="layout.layoutType">
        <slot />
    </Vertical>

    <Horizontal v-if="layout.layoutType === 'horizontal'" :layout="layout.layoutType">
        <slot />
    </Horizontal>

    <Detached v-if="layout.layoutType === 'detached'" :layout="layout.layoutType">
        <slot />
    </Detached>

    <TwoColumn v-if="layout.layoutType === 'two-column'" :layout="layout.layoutType">
        <slot />
    </TwoColumn>
</div>
</template>
