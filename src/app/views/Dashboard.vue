<template>
  <div class="container mx-auto">
    <div class="bg-white-tint">
      <div class="mx-auto px-6 overflow-x-hidden lg:px-10">
        
        <div class="bg-white-base my-5">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-theme-primary-base sm:text-4xl">
              <span class="block">Welcome to Doughnet!</span>
              <span class="block text-theme-primary-three font-normal">Get started by adding some accounts.</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white-base bg-indigo-600 hover:bg-indigo-700">
                  Add Account
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-theme-primary-three bg-white hover:bg-indigo-50">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-10 mx-auto mt-4">
          <div class="grid grid-cols-3 gap-3">
          
            <AccountSummaryList :accounts="loadedAccountData" :accountTypes="loadedAccountTypes"/>
            
            <div class="bg-white-base p-4 md:flex col-span-2">
              <div>
                <h3 class="font-semibold leading-loose">About</h3>
                <p>A very simple Laravel package for viewing your jobs right from your application.</p>
                <div class="my-3 flex items-center">
                <span class="inline-block">
                    <svg class="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </span>
                  <a href="https://manojbhatta.com.np"
                      class="ml-3 text-blue-600 hover:underline">manojbhatta.com.np</a>
              </div>

                <div class="text-sm font-semibold">
                    <span
                        class="bg-blue-100 text-blue-600 py-1 px-3 rounded-full hover:bg-blue-200">laravel</span>
                </div>

                <a href="#" class="flex items-center space-x-3 text-gray-600 my-4">
                    <span class="text-gray-700">
                        <svg class="h-4 fill-current" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z">
                            </path>
                        </svg>
                    </span>
                    <span>Readme</span>
                </a>
            </div>
            <div class="ml-auto">
              <a href="#" class="text-gray-700 hover:text-blue-500 transition ease-in-out duration-150">
                <svg class="h-4 fill-current" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <div class="w-full px-8 mx-auto hidden md:block md:container">
              <div class="items-center justify-between py-8 border-t md:flex">
                <div class="flex justify-start justify-between text-xs md:mt-0 md:w-2/5">
                  <div class="mr-4 text-gray-600">
                    &copy; 2021 Doughnet, Inc.
                  </div>
                </div>
                
              </div>
          </div>
        </div>
        <div class="mt-12 border-t md:hidden border-gray-200 pt-8 mx-auto">
          <p class="text-base leading-6 text-gray-600 xl:text-center">
            &copy; 2021 Doughnet, Inc.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AccountSummaryList from '../../accounts/components/AccountSummaryList.vue'

export default {
  name: 'Profile',
  data: () => ({
    title: "Profile",
    activeNavLink: 'underline'
  }),
  components: {
    AccountSummaryList
  },
  props: [
    'loadedAccountData',
    'loadedAccountTypes'
  ],
  methods: {
  },
  computed: {
    
  }
}
</script>