<script>
    export default {
        methods: {
            $getOrderTypeAPI(type) {
                return (type == 'job_application_order') ? 'JobApplicationOrder' :
                        (type == 'maintenance_order') ? 'MaintenanceOrder' :
                        (type == 'consultant_order') ? 'ConsultantOrder' :
                        (type == 'prevention_maintenance_order') ? 'PreventionMaintenanceOrder' :
                        (type == 'installment_order') ? 'InstallmentOrder' :
                        (type == 'review_order') ? 'ReviewOrder' : 'Order'
            }
        }
    }
</script>