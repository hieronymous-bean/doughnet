<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-tag font-24"></i>
                                    <h3>25563</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Total tickets
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-archive font-24"></i>
                                    <h3 class="text-warning">6952</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Pending Tickets
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-shield font-24"></i>
                                    <h3 class="text-success">18361</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Closed Tickets
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-delete font-24"></i>
                                    <h3 class="text-danger">250</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Deleted Tickets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
            title: 'Accounts',
            items: [{
                    text: 'Doughnet',
                    href: '/',
                },
                {
                    text: 'Accounts',
                    active: true,
                },
            ],
        }
    },
    middleware: 'router-auth'
}
</script>