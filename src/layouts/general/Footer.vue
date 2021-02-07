<template>
    <footer class="w-screen bg-gray-900 fixed bottom-0 font-regular">
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="">
                    <div class="flex items-center justify-between h-16">
                        <div class="text-gray-500 px-3">
                            {{ new Date().getFullYear()}} &copy; <a href="">Doughnet Financial</a>
                        </div>
                        <div class="">
                            <div class="text-gray-500">
                                <a href="javascript:void(0);" class="px-3">About Doughnet</a>
                                <a href="javascript:void(0);" class="px-3">Support</a>
                                <a href="javascript:void(0);" class="px-3">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data: function() {
        return {

        }
    }
}
</script>