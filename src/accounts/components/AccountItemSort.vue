<template>
  <a @click.prevent="this.$emit('sortOptionClick')" class="pl-3">{{ sortParam }}</a>
</template>

<script>
export default {
  name: 'AccountItemSort',
    data: () => ({
        title: "AccountItemSort",
    }),
    components: {
    },
    props: [
      'sortParam'
    ],
    methods: {
      sortOptionClick: function() {
        
      }
    }
}
</script>