<template>
  <div class="pageFormContent">
    <div id="pageForm">
      <h1>Cadastrar página</h1>
      <p class="message error" v-if="message">{{ message }}</p>

      <input type="text" placeholder="Título da página" v-model="page.title" ref="title" />
      <input type="text" placeholder="Ítem de menu" v-model="page.menuItem" />
      <CheckBox :item="page" field="isHome" label="Página principal?" />
      <CheckBox :item="page" field="isPublished" label="Página publicada?" />
      <CheckBox :item="page" field="isPrivate" label="Página privada?" />
      <CheckBox :item="page" field="isExternal" label="Link externo?" />
      <input type="url" placeholder="Link externo (URL)" v-model="page.link" />

      <button class="button" v-if="loading">
        <i class="spinner loading icon" />
        Aguarde...
      </button>

      <button class="button" @click="createPage" v-else>
        Cadastrar página
      </button>
    </div>

    <div class="pageFormInfo" style="display: flex; flex-direction: column; gap: 20px">
      <p>
        Uma página é a estrutura mínima em seu website. Ela é a área que abriga
        o conteúdo que você poderá inserir.
      </p>
      <p>
        Sempre que você desejar inserir um novo item de menu, estará inserindo
        uma página, contudo, você não necessariamente irá precisar associar a
        sua página a um item de menu, mas perceba que, ao fazer isso, a página
        não estará acessível através do menu principal do site.
      </p>
    </div>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox.vue";
import axios from "@/helpers/axios.js";

export default {
  name: "PageForm",
  components: { CheckBox },
  data() {
    return {
      loading: false,
      message: "",
      page: {
        title: "",
        menuItem: "",
        isHome: false,
        isPublished: true,
        isPrivate: false,
        isExternal: false,
        link: "",
      },
    };
  },

  methods: {
    cleanAll() {
      this.page.title = "";
      this.page.menuItem = "";
      this.page.isHome = false;
      this.page.isPublished = true;
      this.page.isPrivate = false;
      this.page.isExternal = false;
      this.page.link = "";
    },
    async createPage() {
      this.loading = true;

      const response = await axios.post("pages/create", { values: this.page });

      if (response.data.failed) {
        this.message = response.data.message;
      } else {
        this.cleanAll();
        this.$emit("created");
      }

      this.loading = false;
      this.$refs.title.focus();
    },
  },

  mounted() {
    this.$refs.title.focus();
  },
};
</script>

<style lang="css" scoped>
.pageFormContent {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
}

#pageForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
