<template>
  <div class="mainContent">
    <div class="pagesContainer">
      <div class="tabs">
        <div class="content-box" v-if="pageToUpdate">
          <h1>Edição de página</h1>
        </div>

        <div class="content-box" v-else-if="pageListing">
          <PagesListing
            @loaded="reload = false"
            :reload="reload"
            @select="showDetails"
            class="animate__animated animate__fadeIn"
          />
        </div>

        <div class="content-box" v-if="pageToDetail">
          <PageDetails
            :page="pageToDetail"
            @reset="reset"
            class="animate__animated animate__fadeIn"
          />
        </div>
      </div>

      <div class="tabs">
        <div class="content-box" v-if="pageCreating">
          <PageForm
            @created="reload = true"
            class="animate__animated animate__fadeIn"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageForm from "../components/pages/PageForm.vue";
import PagesListing from "../components/pages/PagesListing.vue";
import PageDetails from "../components/pages/PageDetails.vue";

export default {
  name: "PagesView",
  components: { PageForm, PagesListing, PageDetails },
  data() {
    return {
      pageToUpdate: null,
      pageToDetail: null,
      pageToDetailComponents: null,
      pageCreating: true,
      pageListing: true,
      reload: false,
    };
  },

  methods: {
    reset() {
      this.pageToUpdate = null;
      this.pageToDetail = null;
      this.pageToDetailComponents = null;
      this.pageCreating = true;
      this.pageListing = true;
      this.reload = true;
    },
    showDetails(page) {
      this.pageListing = false;
      this.pageToDetail = page;
      this.pageCreating = false;
    },
  },
};
</script>

<style lang="css" scoped>
.pagesContainer {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 10px;
  min-height: calc(100vh - 100px);
}

.tabs {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
}
</style>
