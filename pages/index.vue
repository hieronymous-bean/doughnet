<script>
export default {
    head() {
        return {
            title: `Dashboard | Doughnet - Financial Wellness`,
        };
    },
    middleware: 'router-auth',
    data() {
        return {
            title: "Default Dashboard",
            items: [
                {
                    text: "Dashboard",
                    active: true
                }
            ],
            transactionTableTitle: "Recent Transactions",
            transactionData: [

            ]
        };
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">

        <div class="col-xl-12">
            <Portlet :headertitle="transactionTableTitle">
                <div class="card-body pt-0">
                    <div class="table-responsive mb-0">
                        <table class="table table-hover table-centered mb-0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>category</th>
                                    <th>name</th>
                                    <th>date</th>
                                    <th>type</th>
                                    <th>tags</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="transactions in transactionData" :key="transactionData.id">
                                    <td>{{ transactions.id }}</td>
                                    <td>{{ transactions.category }}</td>
                                    <td>{{ transactions.name }}</td>
                                    <td>{{ transactions.date }}</td>
                                    <td>{{ transactions.type }}</td>
                                    <td>{{ transactions.tags }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Portlet>
        </div>
    </div>

</div>
</template>
