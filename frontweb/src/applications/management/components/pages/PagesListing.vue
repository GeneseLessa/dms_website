<template>
  <div id="pagesListing">
    <h1>Páginas cadastradas</h1>

    <p class="message error" v-if="message" :style="loadStyle">
      {{ message }}
    </p>

    <p class="message error" v-if="pages.length < 1 && !loading" :style="loadStyle">
      Ainda não há cadastro de páginas
    </p>

    <!-- pages loading -->
    <div :style="loadStyle" v-if="loading">
      <i class="spinner loading icon" />
      <p>Buscando páginas...</p>
    </div>

    <!-- pages listing -->
    <div class="listing" v-else style="margin-top: 20px">
      <div class="item" v-for="page in pages" :key="page._id" @click="selectPage(page)">
        <div>
          <i class="green circle small icon" v-if="page.isPublished" />
          <i class="circle small icon" v-else />
          {{ page.title.toLowerCase() }}
        </div>

        <i class="home icon" v-if="page.isHome" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/helpers/axios.js";

export default {
  name: "PagesListing",

  props: {
    reload: false,
  },

  data() {
    return {
      pages: [],
      loading: false,
      message: "",
    };
  },

  computed: {
    loadStyle() {
      return "display: flex; align-items: center; margin-top: 20px";
    },
  },

  methods: {
    async getPages() {
      this.loading = true;

      const response = await axios.post("pages/read", {
        fields: "title isHome isPublished",
      });

      if (response.data.failed) {
        this.message = response.data.message;
      } else {
        this.pages = response.data.result;
      }

      this.loading = false;
      this.$emit("loaded");
    },

    selectPage(page) {
      this.$emit("select", page._id);
    },
  },

  watch: {
    reload() {
      if (this.reload) this.getPages();
    },
  },

  mounted() {
    this.getPages();
  },
};
</script>

<style scoped>
@import "./PagesListing.css";
</style>
