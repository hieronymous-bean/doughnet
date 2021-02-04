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
            title: 'Transactions',
            items: [{
                    text: 'Doughnet',
                    href: '/',
                },
                {
                    text: 'Accounts',
                    href: '/accounts'
                },
                {
                    text: 'Transactions',
                    active: true,
                },
            ],
        }
    },
    middleware: 'router-auth'
}
</script>