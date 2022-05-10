<script>
export default {
  methods: {
    $roleEquals(roleName) {
      return this.$store.state.user.role === roleName;
    }
  }
};
</script>