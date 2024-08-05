<template>
  <div id="management" v-if="showContent">
    <DesktopMenu />
    <RouterView name="main" />
  </div>
</template>

<script>
import axios from "@/helpers/axios";
import DesktopMenu from "../components/menus/DesktopMenu.vue";

export default {
  name: "ManagementView",

  components: {
    DesktopMenu,
  },

  data() {
    return {
      showContent: false,
      intervalId: null,
    };
  },

  methods: {
    async checkAuthentication() {
      try {
        const response = await axios.post("users/is-authenticated");
        this.showContent = true;
      } catch (err) {
        if (err.response && err.response.data.error) {
          localStorage.setItem("gariobald", null);
          this.$router.push({ name: "authenticate" });

          this.clearMyInterval();
        }
      }
    },

    clearMyInterval() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
  },

  async beforeMount() {
    await this.checkAuthentication();
    this.intervalId = setInterval(this.checkAuthentication, 20000);
  },

  beforeDestroy() {
    this.clearMyInterval();
  },
};
</script>
