<template>
  <v-navigation-drawer
    :value="drawer"
    :right="isRight"
    clipped
    app
    color="blue-grey darken-2"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title white--text">{{
          $t("topNav.controlPanel")
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <template v-for="(item, i) in items">
        <v-list-item
          v-if="$roleEquals(item.role)"
          :key="i"
          link
          :to="{ name: item.to }"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {
  mdiAccountGroup,
  mdiAccountMultiple,
  mdiTag,
  mdiTie,
  mdiCar,
  mdiAccountSupervisor,
  mdiTicket,
  mdiTimelapse,
  mdiOfficeBuilding,
  mdiFileAccount,
  mdiHammerScrewdriver,
  mdiTableOfContents,
} from "@mdi/js";

export default {
  data() {
    return {
      icon: {
        mdiTableOfContents,
        mdiAccountGroup,
        mdiAccountMultiple,
        mdiTag,
        mdiTie,
        mdiCar,
        mdiAccountSupervisor,
        mdiTicket,
        mdiTimelapse,
        mdiHammerScrewdriver,
      },
      items: [
          {
              title: this.$t("topNav.roles"),
              icon: "mdi-cogs",
              to: "roles",
              role: "admin",
          },

             {
              title: this.$t("auth.users"),
              icon: "mdi-cogs",
              to: "user",
              role: "admin",
          },
          {
              title: this.$t("topNav.services"),
              icon: "mdi-cogs",
              to: "services",
              role: "admin",
          },
        {
          title: this.$t("general.branches"),
          icon: "mdi-timeline-check-outline",
          to: "sa13",
          role: "admin",
        },
        {
          title: this.$t("admin.contentManagement"),
          icon: mdiTableOfContents,
          to: "sa12",
          role: "admin",
        },
        {
          title: this.$t("topNav.employees"),
          icon: mdiAccountSupervisor,
          to: "sa2-1",
          role: "admin",
        },
        {
          title: this.$t("admin.discounts"),
          to: "sa6-1",
          icon: mdiTag,
          role: "admin",
        },
        {
          title: this.$t("admin.ads"),
          to: "sa3-1",
          icon: mdiTie,
          role: "admin",
        },
        {
          title: this.$t("admin.cars"),
          to: "sa9-1",
          icon: mdiCar,
          role: "admin",
        },
        {
          title: this.$t("admin.agents"),
          icon: mdiAccountMultiple,
          to: "sa1-2",
          role: "admin",
        },
        {
          title: this.$t("general.orders"),
          icon: mdiTicket,
          to: "sa4",
          role: "admin",
        },
        // {
        //   title: this.$t("admin.setBusinessHours"),
        //   icon: mdiTimelapse,
        //   to: "sa5",
        //   role: "admin"
        // },
        {
          title: this.$t("technical.workshops"),
          icon: mdiHammerScrewdriver,
          to: "sa7-1",
          role: "admin",
        },
        {
          title: this.$t("general.fees"),
          icon: mdiFileAccount,
          to: "SA8-1",
          role: "admin",
        },
        {
          title: this.$t("general.department"),
          icon: mdiOfficeBuilding,
          to: "sa10-1",
          role: "admin",
        },


         {
              title: this.$t("general.devices"),
              icon: mdiOfficeBuilding,
              to: "devices",
              role: "admin",
          },
        {
          title: this.$t("general.manufacturer"),
          icon: mdiOfficeBuilding,
          to: "manufacturers",
          role: "admin",
        },

            {
          title: this.$t("sparePart"),
          icon: mdiOfficeBuilding,
          to: "sparePart",
          role: "admin",
        },
         
         

      ],
      right: null,
    };
  },
  computed: {
    drawer() {
      return this.$store.state.drawerOpen;
    },
    isRight() {
      return this.$vuetify.rtl;
    },
  },
};
</script>
