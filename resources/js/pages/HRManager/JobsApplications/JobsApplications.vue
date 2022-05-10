<template>
    <div>
        <v-dialog v-model="jobDialog" scrollable max-width="60vw">
            <JobApplication :id="jobID"/>
        </v-dialog>

        <div class="b-section m-5">
            <h5 class="pt-3 m-0" style="padding: 0 40px;" :class="{'text-right': $vuetify.rtl}">{{$t('hr.jobApplicationOrders.order')}}</h5>
            <v-simple-table class="table-striped">
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-center">{{$t('general.customerName')}}</th>
                        <th class="text-center">{{$t('hr.jobApplicationOrders.type')}}</th>
                        <th class="text-center">{{$t('general.createdAt')}}</th>
                        <th class="text-center"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="order in jobApplications" :key="order.order_info.id">
                        <td class="text-center">{{ order.order_info.user_info.user_name }}</td>
                        <td class="text-center">{{ order.job_type }}</td>
                        <td class="text-center">{{ formatDate(order.created_at) }}</td>
                        <td class="text-center">
                            <v-btn color="primary" rounded small @click="showDialog(1)">{{$t('hr.jobApplicationOrders.view')}}</v-btn>
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <div class="text-center">
                <v-pagination v-model="page" @input="load" :length="Math.ceil( total / limit )" :total-visible="5" circle></v-pagination>
            </div>            
        </div>
    </div>

</template>

<script>
    import JobApplication from '../JobApplication/JobApplication'

    export default {
        name: "JobsApplications",
        components: {JobApplication},
        data() {
            return {
                jobApplications: [],
                jobID: '',
                jobDialog: false,
                page: 1,
                total: 0,
                limit: 5,
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                axios.get(`/api/jobApplicationOrder?page=${this.page}`)
                .then(({data}) => {
                    this.jobApplications = data.data.resource.data;
                    this.total = data.data.resource.total;
                })
            },
            showDialog(id) {
                this.jobID = id
                this.jobDialog = true
            }
        }
    }
</script>

<style scoped>
    .b-section {
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
        border-radius: 10px;
    }

    tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, .05);
    }
</style>
