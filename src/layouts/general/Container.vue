<template>
  <div>
    <Topbar/>
    <PageHeader :headertext="$route.name"/>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 sm:px-0">
              <div class="container mx-auto py-10 h-32 md:w-5/5 w-12/12">
                  <div class="h-full rounded">
                      <router-view></router-view>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
    </main>
  </div>
</template>

<script>

import Topbar from './Topbar.vue'
import Footer from './Footer.vue'
import PageHeader from '../../components/app/PageHeader.vue'

export default {
    data: () => ({
        title: 'Dashboard'
    }),
    components: {
      PageHeader,
      Topbar,
      Footer
    }
}
</script>