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
            transactionData: [{
                transactionDate: "1/1/2021",
                transactionAccount: "Primary Account",
                transactionDescription: "Description of this transaction",
                transactionCategory: "Mortgage Payment",
                transactionTags:["Tag 1","Tag 2"],
                transactionAmount: "$415.55"
            }]
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
                                    <th>Date</th>
                                    <th>Account</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Tags</th>
                                    <th>Ammount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="transactions in transactionData" :key="transactionData.id">
                                    <td>{{ transactions.transactionDate }}</td>
                                    <td>{{ transactions.transactionAccount }}</td>
                                    <td>{{ transactions.transactionDescription }}</td>
                                    <td>{{ transactions.transactionCategory }}</td>
                                    <td>{{ transactions.transactionTags[0] }}</td>
                                    <td>{{ transactions.transactionAmount }}</td>
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
