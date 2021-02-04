<template>
<div>
    <PageHeader :title="title" :items="items" />
</div>

</template>

<script>
export default {
    head() {
        return {
            title: `${this.title} | Doughnet - Financial Wellness`
        }
    },
    data() {
        return {
            title: 'Bills',
            items: [{
                    text: 'Doughnet',
                    href: '/',
                },
                {
                    text: 'Banking',
                    href: '/banking',
                },
                {
                    text: 'Bills',
                    active: true,
                },
            ],
        }
    },
    middleware: 'router-auth'
}
</script>