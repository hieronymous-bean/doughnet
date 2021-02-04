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
            title: 'Budgeting',
            items: [{
                    text: 'Doughnet',
                    href: '/',
                },
                {
                    text: 'Banking',
                    href: '/banking',
                },
                {
                    text: 'Budgeting',
                    active: true,
                },
            ],
        }
    },
    middleware: 'router-auth'
}
</script>