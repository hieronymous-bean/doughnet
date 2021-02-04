<template>
<div>
  <Topbar/>
  <PageHeader/>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="">
          

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

import PageHeader from '../components/global/Page-Header.vue'

export default {
    components: {
      PageHeader
      Topbar,
      Footer
    }
}
</script>