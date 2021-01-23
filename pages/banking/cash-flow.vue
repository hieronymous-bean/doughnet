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
            title: 'Cash Flow',
            items: [{
                    text: 'Doughnet',
                    href: '/',
                },
                {
                    text: 'Banking',
                    href: '/banking',
                },
                {
                    text: 'Cash Flow',
                    active: true,
                },
            ],
        }
    },
    middleware: 'router-auth'
}
</script>