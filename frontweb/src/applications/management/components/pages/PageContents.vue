<template>
  <div id="pageContents">
    <div v-if="step === 'index'" class="itemContents">
      <h1>Componentes na página</h1>
      <p>ID: {{ page }}</p>

      <div class="contentsContainer">
        <div class="contentsMenu">
          <div class="content-box" @click="step = 'textual'">
            <h3>Textual</h3>
          </div>
          <div class="content-box">
            <h3>Carrossel</h3>
          </div>
          <div class="content-box">
            <h3>Álbum</h3>
          </div>
          <div class="content-box">
            <h3>Formulário</h3>
          </div>
          <div class="content-box">
            <h3>Lista</h3>
          </div>
          <div class="content-box">
            <h3>Banner</h3>
          </div>
          <div class="content-box">
            <h3>GMaps</h3>
          </div>
        </div>
        <div class="contents">
          <p>
            Componentes são as pequenas partes que irão compôr as suas páginas.
            Cada componente possui uma função distinta e, por ser modularizado,
            o Manager poderá adicionar novos itens de página conforme sejam
            desenvolvidos.
          </p>
        </div>
      </div>
    </div>

    <div v-if="step === 'textual'">
      <TextualContent :page="page" />
    </div>
  </div>
</template>

<script>
import TextualContent from "../contents/Textual.vue";

export default {
  name: "PageContents",
  props: ["page"],
  components: { TextualContent },
  data() {
    return {
      step: "index",
    };
  },
};
</script>

<style lang="css" scoped>
#pageContents,
.itemContents {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contentsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.contentsMenu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.content-box:hover {
  background-color: var(--light-grey);
  cursor: pointer;
  transition: 0.4s;
}
</style>
