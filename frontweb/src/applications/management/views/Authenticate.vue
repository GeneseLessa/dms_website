<template>
  <div id="authentication" class="animate__animated animate__fadeInDown">
    <FirstUser v-if="users.length < 1" class="box-size" />
    <AuthenticateForm v-else class="box-size" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import "/src/assets/manager.css";

import AuthenticateForm from "../components/forms/AuthenticateForm.vue";
import FirstUser from "../components/forms/FirstUser.vue";

const users = ref([]);
const loading = ref(false);

const getUsers = () => {
  // here I can get the alients
  users.value.push(1);
  console.log("montado");
};

onBeforeMount(() => {
  console.log("antes de montar");
});
</script>

<style lang="css" scoped>
#authentication {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box-size {
  max-width: 400px;
}
</style>
