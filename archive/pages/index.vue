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


    <div class="row">
        <div v-for="data in widgetData" :key="data.title" class="col-xl-3 col-md-6">
            <CrmWidget :title="data.title" :icon="data.icon" :value="data.value" :text="data.text" />
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4">
            <Campaigns />
        </div>

        <div class="col-lg-8">
            <Revenue />
        </div>
    </div>

    <div class="row">
        <div class="col-xl-5">
            <TopPerforming />
        </div>

        <div class="col-xl-7">
            <div class="row">
                <div class="col-lg-6">
                    <RecentLeads />
                </div>
                <div class="col-lg-6">
                    <Todo />
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-3 col-lg-4">
            <b-alert show dismissible class="mb-3">Property MN7xx is not receiving hits. Either your site is not receiving any sessions.</b-alert>

            <div class="card">
                <div class="card-body">
                    <i class="fa fa-info-circle text-muted float-right" v-b-tooltip.hover title="More Info"></i>
                    <h4 class="m-0 font-16">Active Users</h4>
                    <h2 class="my-3 text-center" id="active-users-count">121</h2>
                    <p class="text-muted m-0">
                        Since last month: 22506
                        <span class="float-right">
                            <i class="mdi mdi-arrow-up-bold mr-1 text-success"></i>10.25%
                        </span>
                    </p>
                </div>
                <!-- end card-body-->
            </div>
            <!--end card-->

            <div class="card">
                <div class="card-body">
                    <i class="fa fa-info-circle text-muted float-right" v-b-tooltip.hover title="More Info"></i>
                    <h4 class="m-0 font-16">Views Per Minute</h4>
                    <h2 class="my-3 text-center" id="active-views-count">485</h2>
                    <p class="text-muted m-0">
                        Since previous week: 8541
                        <span class="float-right">
                            <i class="mdi mdi-arrow-down-bold mr-1 text-danger"></i>2.63%
                        </span>
                    </p>
                </div>
                <!-- end card-body-->
            </div>
            <!--end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-9 col-lg-8">
            <div class="card">
                <div class="card-body">
                    <ul class="nav float-right d-none d-lg-flex">
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">Today</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">7d</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">15d</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">1m</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">1y</a>
                        </li>
                    </ul>
                    <h4 class="header-title mb-3">Sessions Overview</h4>

                    <div class="row align-items-center">
                        <div class="col-xl-8">
                            <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                        <!-- end col -->
                        <div class="col-xl-4">
                            <h5 class="mb-1 mt-0">
                                1,12,540
                                <small class="text-muted ml-2">www.getbootstrap.com</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">72%</div>
                                </div>
                            </div>

                            <h5 class="mb-1 mt-0">
                                51,480
                                <small class="text-muted ml-2">www.youtube.com</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">65%</div>
                                </div>
                            </div>

                            <h5 class="mb-1 mt-0">
                                45,760
                                <small class="text-muted ml-2">www.dribbble.com</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 48%;" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">48%</div>
                                </div>
                            </div>

                            <h5 class="mb-1 mt-0">
                                98,512
                                <small class="text-muted ml-2">www.behance.net</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 59%;" aria-valuenow="59" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">59%</div>
                                </div>
                            </div>

                            <h5 class="mb-1 mt-0">
                                2,154
                                <small class="text-muted ml-2">www.vimeo.com</small>
                            </h5>
                            <div class="row align-items-center no-gutters">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 21%;" aria-valuenow="21" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">21%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
        </div>
        <!-- end col-->
    </div>
    <!-- end row-->
    <div class="row">
        <div class="col-lg-6">
            <Users />
        </div>
        <div class="col-lg-6">
            <Sources />
        </div>
    </div>
    <!-- end row -->
    <div class="row">
        <div class="col-xl-4 col-lg-6">
            <Channels />
        </div>
        <div class="col-xl-4 col-lg-6">
            <SocialMedia />
        </div>
        <div class="col-xl-4 col-lg-6">
            <Overview />
        </div>
    </div>
    <div class="card">
    <div class="card-body">
        <a href="" class="p-0 float-right mb-3">Export <i class="mdi mdi-download ml-1"></i></a>
        <h4 class="header-title mt-1">Channels</h4>

        <div class="table-responsive mb-0">
            <table class="table table-sm table-centered mb-0 font-14">
                <thead class="thead-light">
                    <tr>
                        <th>Channel</th>
                        <th>Visits</th>
                        <th style="width: 40%;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Direct</td>
                        <td>2,050</td>
                        <td>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Organic Search</td>
                        <td>1,405</td>
                        <td>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Refferal</td>
                        <td>750</td>
                        <td>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Social</td>
                        <td>540</td>
                        <td>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- end table-responsive-->
    </div>
    <!-- end card-body-->
</div>


</div>
</template>
