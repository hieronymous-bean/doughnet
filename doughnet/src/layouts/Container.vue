<template>
<div id="wrapper">
    <Sidebar/>
    <div class="content-page">
        <div class="content">
            <Topbar />
            <!-- Start Content-->
            <div class="container-fluid">
                <router-view/>
            </div>
        </div>
        <Footer />
    </div>
    <Rightbar />
</div>
</template>
<script>
export default {
  name: 'Default',
  data: function () {
    return {
      
    }
  },
  components: {
    'Sidebar': () => import('./Sidebar'),
    'Topbar': () => import('./Topbar'),
    'Footer': () => import('./Footer'),
    'Rightbar': () => import('./Rightbar'),
  }
}
</script>
