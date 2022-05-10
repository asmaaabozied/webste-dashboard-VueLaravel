<script>
import moment from "moment";

export default {
  methods: {
    formatDate(date) {
      return moment(date).isValid()
        ? moment(date).format("YYYY-MM-DD hh:mm")
        : "";
    }
  }
};
</script>