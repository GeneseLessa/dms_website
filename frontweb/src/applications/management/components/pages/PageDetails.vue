<template>
  <div id="pageDetails">
    <div v-if="loading">
      <i class="spinner loading icon" />
      Carregando dados...
    </div>

    <div v-if="pageFound">
      <h1 style="margin-bottom: 20px">{{ pageFound.title }}</h1>
      <div class="item">
        <p>Identificador:</p>
        <p>{{ pageFound._id }}</p>
      </div>
      <div class="item">
        <p>Menu:</p>
        <p>{{ pageFound.menuItem }}</p>
      </div>
      <div class="item">
        <p>Slug:</p>
        <p>{{ pageFound.slug }}</p>
      </div>
      <div class="item">
        <p>Página inicial?</p>
        <p>{{ formatBoolean(pageFound.isHome) }}</p>
      </div>
      <div class="item">
        <p>Publicada?</p>
        <p>{{ formatBoolean(pageFound.isPublished) }}</p>
      </div>
      <div class="item">
        <p>Link externo?</p>
        <p>{{ formatBoolean(pageFound.isExternal) }}</p>
      </div>
      <div class="item" v-if="pageFound.isExternal">
        <p>URL:</p>
        <p>{{ pageFound.link }}</p>
      </div>
      <div class="item">
        <p>Data de cadastro:</p>
        <p>{{ formatDate(pageFound.createdAt) }}</p>
      </div>
      <div class="item">
        <p>Última alteração:</p>
        <p>{{ formatDate(pageFound.updatedAt) }}</p>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 10px">
        <button class="button">Editar</button>
        <button class="button secondary" @click="$emit('reset')">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/helpers/axios.js";

export default {
  name: "PageDetails",
  props: {
    page: String,
  },
  data() {
    return {
      loading: false,
      message: "",
      pageFound: null,
    };
  },
  methods: {
    async getPage() {
      this.loading = true;

      const response = await axios.post("pages/read", {
        filters: { _id: this.page },
      });

      if (response.data.failed) {
        this.message = response.data.message;
      } else {
        const result = response.data.result;
        this.pageFound = result.length > 0 ? result[0] : null;
      }

      this.loading = false;
    },

    formatDate(date) {
      return new Date(date).toLocaleString("pt-br");
    },

    formatBoolean(value) {
      return value ? "Sim" : "Não";
    },
  },
  mounted() {
    this.getPage();
  },
};
</script>

<style lang="css" scoped>
.pageData {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--border);
  padding: 5px 10px;
}
</style>
