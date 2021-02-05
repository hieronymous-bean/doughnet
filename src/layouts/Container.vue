<template>
    <div>
        <Topbar/>
        <PageHeader :header-text="header-text" />
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="">

                        <div class="container mx-auto py-10 h-32 md:w-5/5 w-12/12">
                            <div class="w-full h-full rounded border-dashed border-2 border-gray-300">
                                <vue-router/>
                            </div>
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

import PageHeader from '../components/global/PageHeader.vue'

export default {
    data() {
        return {
           
        }
    },
    components: {
      PageHeader,
      Topbar,
      Footer
    }
}
</script>