<script>
    import store from './../store/index';
    export default {
        name: "Notify",
        methods : {
            showErrorMessage(message) {
                return this.$notify({
                    text: message,
                    type: "error",
                });
            },
            showSuccessMessage(message) {
                return this.$notify({
                    text: message,
                    type: "success",
                });
            },
            showSuccessResponseMessage(){
                let lang = localStorage.getItem('locale');
                return lang == 'ar' ? 'تم جلب البيانات بنجاح'  : "retrieve data success";
            }
        }
    }
</script>
