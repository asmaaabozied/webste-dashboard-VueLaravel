<template>
  <div class="pa-5">
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>{{$t('general.message')}}</th>
            <th>{{$t('general.date')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.message }}</td>
            <td>{{ formatDate(item.created_at) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.notifications;
    }
  }
};
</script>

<style scoped>
</style>