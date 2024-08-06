<template>
  <div id="pageContents">
    <h1>Componentes na página</h1>
    <p>ID: {{ page }}</p>

    <div class="contentsContainer">
      <div class="contentsMenu">
        <div class="content-box">
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
      <div class="contents"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContents",
  props: ["page"],
};
</script>

<style lang="css" scoped>
#pageContents {
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
