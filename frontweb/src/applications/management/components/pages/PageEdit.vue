<template>
  <div id="pageEdit">
    <h1>Edição de página</h1>
    <div class="form" v-if="pageFound">
      <label for="title">Título da página</label>
      <input type="text" v-model="pageFound.title" />
      <label for="menu">Ítem de menu</label>
      <input type="text" v-model="pageFound.menuItem" />
      <CheckBox :item="pageFound" field="isHome" label="Página principal?" />
      <CheckBox
        :item="pageFound"
        field="isPublished"
        label="Página publicada?"
      />
      <CheckBox :item="pageFound" field="isPrivate" label="Página privada?" />
      <CheckBox :item="pageFound" field="isExternal" label="Link externo?" />
      <label for="url">Link externo</label>
      <input type="url" v-model="pageFound.link" />

      <div style="display: flex; gap: 5px; margin-top: 20px">
        <button class="button" @click="savePage">Salvar</button>
        <button class="button secondary" @click="$emit('done')">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/helpers/axios.js";
import CheckBox from "@/components/CheckBox.vue";

export default {
  name: "PageEdit",
  props: ["page"],
  components: { CheckBox },
  data() {
    return {
      pageFound: null,
      loading: false,
      message: "",
    };
  },

  methods: {
    async getPage() {
      this.loading = true;

      const response = await axios.post("pages/read", {
        filters: { _id: this.page },
      });

      [this.pageFound] = [...response.data.result];
    },

    async savePage() {
      this.loading = true;

      const response = await axios.post("pages/update", {
        id: this.pageFound._id,
        values: this.pageFound,
      });

      if (response.data.failed) {
        this.message = response.data.message;
        this.loading = false;
        return;
      }

      this.loading = false;
      this.$emit("done");
    },
  },

  mounted() {
    this.getPage();
  },
};
</script>

<style lang="css" scoped>
#pageEdit {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
