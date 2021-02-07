<template>
  <header class="bg-white">
    <div class="max-w-7xl mx-auto pt-6 px-3 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
          <h2 class="text-4xl font-semibold leading-7 text-gray-900 sm:text-4xl sm:truncate">
            {{ headertext }}
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    
  }),
  props: ['headertext']
}
</script>