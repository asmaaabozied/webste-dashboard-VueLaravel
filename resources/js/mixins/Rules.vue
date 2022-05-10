
<script>
    export default {
        name: "Rules",
        computed:{
            $requiredRules(){
                return localStorage.getItem('locale') == 'ar'  ? "الحقل مطلوب" :'the field is required';
            }
        }
    }
</script>
