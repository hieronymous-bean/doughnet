<template>
  <div :class="isSidebarOpen ? sidebarOpen : sidebarClosed">
    <div class="transform bg-primary-base overflow-y-auto min-h-screen" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
      <div class="px-4 pt-2 pb-3 grid grid-cols-3">
        <div  class="col-span-2 text-secondary-one">
          <div v-if="isSidebarOpen" class="font-normal">Doughnet User</div>
          <div v-if="isSidebarOpen" class="font-light text-sm">{{ userEmail }}</div>
        </div>
        <div @click.prevent="toggleSidebarOpen" class="p-2 absolute right-2 top-5 hover:bg-primary-baseHover cursor-pointer transform rotate-180">
          <transition name="fade">
            <div v-if="showCollapseIcon">
              <svg class="fill-current text-secondary-one" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
              <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/>
            </svg>
            </div>
          </transition>
        </div>
      </div>

      <nav class="mt-6 text-md text-primary-dark focus:outline-none">
        
        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 22.6l3.404-1.816c.238.26.469.519.685.768l-4.589 2.448-11-5.869v-12.131l11-6 11.001 6.066v9.612c-.329-.319-.666-.662-1-1.019v-7.516l-2.637 1.357-.018 4.588.009-.008c1.068 1.392 2.596 3.059 3.928 4.2-1.08 1.252-1.433 2.67-.67 3.24.592.443 1.518.641 2.01 1.158.252.268.377.61.377.95 0 .863-.724 1.372-1.371 1.372-.363 0-.725-.143-.994-.426-.475-.501-.633-1.39-1.012-2.004-.523-.854-2.037-.625-3.366.411-1.549-1.873-4.505-4.809-5.757-5.579v6.198zm11.443.361c-.181.172-.472.166-.644-.019-.177-.183-.166-.473.015-.645.184-.175.471-.168.645.016.175.182.168.472-.016.648zm-12.443-10.931l-9.5-4.946v10.447l9.5 5.069v-10.57zm4.463 5.862l3.315-3.158c.467.578.933 1.06 1.553 1.715.251.263.259.507.138.623-.444.422-1.478-1.072-1.951-.621-.469.447 1.212 1.67.7 2.157-.395.377-1.135-.648-1.536-.266-.187.178-.006.541.101.845.183.525-.212.878-.789.27-.573-.606-.883-.936-1.531-1.565zm.518-9.033l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z"/></svg>
          <span v-if="isSidebarOpen" class="mx-2">Dashboard</span>
        </router-link>
        
        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Accounts' ? activeClass : inactiveClass]"
          to="/accounts"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z"/></svg>
          <span v-if="isSidebarOpen" class="mx-4">Accounts</span>
        </router-link>

        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Transactions' ? activeClass : inactiveClass]"
          to="/transactions"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 3c.53 0 1.039.211 1.414.586s.586.884.586 1.414v14c0 .53-.211 1.039-.586 1.414s-.884.586-1.414.586h-20c-.53 0-1.039-.211-1.414-.586s-.586-.884-.586-1.414v-14c0-.53.211-1.039.586-1.414s.884-.586 1.414-.586h20zm1 8h-22v8c0 .552.448 1 1 1h20c.552 0 1-.448 1-1v-8zm-15 5v1h-5v-1h5zm13-2v1h-3v-1h3zm-10 0v1h-8v-1h8zm-10-6v2h22v-2h-22zm22-1v-2c0-.552-.448-1-1-1h-20c-.552 0-1 .448-1 1v2h22z"/></svg>
          <span v-if="isSidebarOpen" class="mx-2">Transactions</span>
        </router-link>

        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Tools' ? activeClass : inactiveClass]"
          to="/tools"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.914 2.741l15.557 15.556-4.243 4.243-15.556-15.557 4.242-4.242zm-.707-.707l-2.033-2.034-4.174 4.243 1.965 2.034 4.242-4.243zm12.821 21.119l4.972.847-.918-4.901-4.054 4.054zm-4.567-15.694l.389-.388.707.707.707-.707-.707-.707.707-.707.707.707.708-.708-.707-.706 2.121-2.121 2.121 2.121-4.631 4.631 1.393 1.393 6.024-6.024-4.908-4.95-6.045 6.045 1.414 1.414zm-4.949 9.193l-4.562 4.561-2.121-2.121.707-.708.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.706.319-.319-1.415-1.415-5.975 5.976 4.95 4.908 5.955-5.955-1.393-1.393zm9.934-11.349c.195-.195.195-.512 0-.707s-.512-.195-.707 0-.195.512 0 .707.512.196.707 0z"/></svg>
          <span v-if="isSidebarOpen" class="mx-4">Tools</span>
        </router-link>

        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Bills' ? activeClass : inactiveClass]"
          to="/bills"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.155 8.64c-.909 1.519-2.327 3.067-4.097 3.004-.413.706-.852 1.677-1.339 2.803l-1.312.553c.936-2.343 2.231-4.961 3.698-6.994-.67.529-1.746 1.637-2.662 2.783-1.098-1.828-.3-3.691.973-5.179.021.641.359 1.196.601 1.475-.087-.53-.114-1.489.195-2.351.718-.732 1.364-1.271 2.113-1.76-.083.478.08 1.026.262 1.361.024-.49.224-1.43.521-1.84.924-.727 2.332-1.373 3.892-1.495-.081.973-.436 2.575-1.024 3.604-.515.404-1.221.68-1.791.833.493.089 1.031.077 1.494-.001-.269.743-.552 1.428-.998 2.276-.679.468-1.578.732-2.203.825.46.187 1.272.245 1.677.103zm-13.841 3.805l.645.781 4.773-2.791-.668-.768-4.75 2.778zm6.96-.238l-.668-.767-4.805 2.808.645.781 4.828-2.822zm4.679.007c-.421.203-.851.341-1.286.398-.12.231-.246.494-.377.773l.298.342c.623.692.459 1.704-.376 2.239-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948-.469-.557-6.115-7.376-7.523-9.178-.469-.6-.575-1.245-.295-1.816.268-.549.842-.918 1.43-.918.919 0 1.408.655 1.549 1.215.16.641-.035 1.231-.623 1.685l1.329 1.624 7.796-4.446c1.422-1.051 1.822-2.991.93-4.513-.618-1.053-1.759-1.706-2.978-1.706-1.188 0-.793-.016-9.565 4.475-1.234.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.427 1.794 7.561 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.408-.655-1.549-1.216-.156-.629.012-1.208.604-1.654l-1.277-1.545c-.822.665-1.277 1.496-1.377 2.442-.232 2.205 1.525 3.993 3.613 3.993.596 0 1.311-.177 1.841-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.745-.24-1.454-.688-2.003l-.359-.43zm-7.933-10.062c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.097 2.888c-.051-1.089-.579-2.081-1.455-2.732l5.248-2.686zm2.097 13.383l.361-.905.249-.609-3.449 2.017.645.781 2.194-1.284z"/></svg>
          <span v-if="isSidebarOpen"  class="mx-4">Bills</span>
        </router-link>

        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Budgets' ? activeClass : inactiveClass]"
          to="/budgets"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.666 8.334v3.666l1.463-2.215-1.463-1.451zm-3.092 4.167c.66-.384 1.242-.864 1.758-1.447v1.369c-.445.393-.926.731-1.449 1.018l-.309-.94zm-3.255 2.041c-.652.083-1.57.125-2.319.125v-.97c.688 0 1.551-.037 2.152-.113l.167.958zm2.789-.725l-.036.015c-.586.246-1.22.437-1.91.573l-.167-.958c.655-.131 1.257-.315 1.809-.556l.304.926zm10.892-13.817l-3 11-4.064-3.62 3.9-4.117-5.229 3.614-3.607-.877 12-6zm-3.015 14.779c0 4.546-5.777 9.221-8.221 9.221h-8.764v-22h11.527l-4 2h-5.527v18h5.938c4.155 0 2.638-6 2.638-6 3.349.921 6.003.403 6.003-3.21.28.65.406 1.318.406 1.989z"/></svg>
          <span v-if="isSidebarOpen"  class="mx-4">Budgets</span>
        </router-link>

        <router-link
          class="flex items-center mt-2 py-1 px-2 m-3 rounded-sm outline-none focus:outline-none"
          :class="[$route.name === 'Goals' ? activeClass : inactiveClass]"
          to="/goals"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.931 10.245l2.021-2.042-2.778-.403-1.223-2.653-1.222 2.653-2.778.402 2.021 2.042-.492 2.903 2.471-1.391 2.472 1.391-.492-2.902zm-9.481 4.518c-.866-1.382-1.374-3.012-1.374-4.763 0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.792-.53 3.458-1.433 4.861-.607-.31-1.228-.585-1.862-.819.812-1.143 1.295-2.536 1.295-4.042 0-3.86-3.141-7-7-7s-7 3.14-7 7c0 1.476.462 2.844 1.244 3.974-.636.225-1.26.488-1.87.789zm15.307 2.45l-2.334 3.322c-1.603-.924-3.448-1.464-5.423-1.473-1.975.009-3.82.549-5.423 1.473l-2.334-3.322c2.266-1.386 4.912-2.202 7.757-2.211 2.845.009 5.491.825 7.757 2.211zm4.243 2.787h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-21.14-3.015l2.343 3.335c-.89.769-1.664 1.668-2.277 2.68l-.566-3h-2.36c.807-1.167 1.771-2.136 2.86-3.015z"/></svg>
          <span v-if="isSidebarOpen"  class="mx-4">Goals</span>
        </router-link>
      </nav>
        

    </div>
  </div>
</template>
<style>
  
  .fade-enter-active, .fade-leave-active {
  transition: opacity .1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
<script>
export default {
    data: function() {
      return {
        activeClass: 'text-secondary-one bg-primary-light font-semibold fill-current focus:outline-none transition duration-300 ease-in-out',
        inactiveClass: 'font-semibold fill-current text-white focus:outline-none transition duration-200 ease-in-out',
        isSidebarOpen: true,
        sidebarOpen: 'w-64 transform translate-x-0 transition duration-500 ease-in-out',
        sidebarClosed: 'w-20 transition duration-500 ease-in-out',
        showCollapseIcon: false
      }
    },
    components: {
    },
    props: [
    ],
    methods: {
      toggleSidebarOpen: function() {
        this.isSidebarOpen = !this.isSidebarOpen
        console.log(this.isSidebarOpen)
      },
      mouseover: function(){
        this.showCollapseIcon = true
      },    
      mouseleave: function(){
        this.showCollapseIcon = false
      }
    },
    computed: {
      userEmail: function() {
        return this.$store.state.user.email
      }
    }
}
</script>