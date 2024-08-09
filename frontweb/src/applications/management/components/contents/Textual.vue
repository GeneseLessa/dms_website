<template>
  <div id="textualContent">
    <h1>Conteúdo textual</h1>
  </div>
</template>

<script>
export default {
  name: "TextualContent",
  props: ["page"],
  data() {
    return {
      content: "",
      loading: false,
      message: "",
    };
  },
};
</script>
