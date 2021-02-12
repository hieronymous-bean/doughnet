<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-screen w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
    data: () => ({
        title: 'Authorization'
    }),
    components: {
    }
}
</script>