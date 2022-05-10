<script>
    export default {
        computed: {
            $isLoggedin() {
                return this.$store.getters.isLoggedin;
            },
            redirectIfNotLoggedIn() {
                if (!this.$isLoggedin) {
                    this.showErrorMessage(this.$t('auth.youMustLogin'));
                    return this.$router.push({name : "login"})
                }
            }
        }
    };
</script>
