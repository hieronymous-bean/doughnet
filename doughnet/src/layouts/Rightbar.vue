<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<template>
<div>
    <div class="right-bar" v-click-outside="config">
        <simplebar class="h-100">
            <b-tabs content-class="pt-0" justified class="nav-bordered">
                <b-tab>
                    <template v-slot:title>
                        <i class="mdi mdi-message-text-outline d-block font-22 my-1"></i>
                    </template>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        <i class="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                    </template>
                </b-tab>
                <b-tab active>
                    <template v-slot:title>
                        <i class="mdi mdi-cog-outline d-block font-22 my-1"></i>
                    </template>
                </b-tab>
            </b-tabs>
        </simplebar>
    </div>
    <div class="rightbar-overlay"></div>
</div>
</template>
