<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex items-center h-10 font-bold">
        {{ subNavMenu }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    
  }),
  props: [
    'subNavMenu'
  ]
}
</script>