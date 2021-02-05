<template>
  <header class="bg-white">
    <div class="max-w-7xl mx-auto py-6 px-3 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
          <h2 class="text-4xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
            {{ headertext }}
          </h2>
          <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div class="mt-2 flex items-center text-sm text-gray-500">
            </div>
            
          </div>
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