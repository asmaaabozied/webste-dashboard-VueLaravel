<template>
  <div>
     <h3>{{$t('technical.orders.title')}}</h3>
    <!-- controls -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col md="2" lg="2" xl="2">
        <v-btn color="primary" dark @click="addItem" icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- items -->
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
                   <th class="text-center">{{$t('auth.users')}}</th>
         <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
                    <th class="text-center">{{ $t("myRequests.requestTechnicalStatus") }}</th>
                    <th class="text-center">{{$t('myRequests.requestType')}}</th>
                    <th class="text-center">{{$t('myRequests.requestDate')}}</th>
           
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i" >
          <th class="text-center">{{i+1}}</th>
          <td class="text-center">{{ item.user }}</td>
          <td class="text-center">{{ item.status }}</td>
          <td class="text-center">{{ item.technical_status }}</td>
          <td class="text-center">{{ item.type }}</td>
          <td class="text-center">{{ item.created_at }}</td>
  
        
          </tr>
        </tbody>
      </template>
    </v-simple-table>
 
  </div>
</template>
<script>

export default {
  name: "services",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Services" : "الخدمات",
    };
  },

  data() {
    return {
      items: [],
     
      deleteDialog: false,
      deleteItemId: null,
    };
  },
  methods: {
    open(id) {
      this.$router.push({ name: "service", params: { id: id } });
    },
    addItem(id) {
      this.$router.push({ name: "service", params: { id: 0 } });
    },
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    load() {

      axios
                        .get(`/api/orderss`)
                        
                        .then(res => {
                            this.items = res.data.data;
                            console.log("itemss",this.items)
                            console.log("res",res)

                        })
                        .catch(err => {
                            console.warn(err)
                        });
    },
 
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.load();
    });
  },
};
</script>
<style scoped></style>
