<template>
  <div id="authentication" class="animate__animated animate__fadeInDown">
    <AuthenticateForm v-if="hasUsers" class="box-size" />
    <FirstUser v-else class="box-size" @userCreated="hasUsers = true" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

import "/src/assets/manager.css";
import axios from "@/helpers/axios";

import AuthenticateForm from "../components/forms/AuthenticateForm.vue";
import FirstUser from "../components/forms/FirstUser.vue";

const users = ref([]);
const hasUsers = ref(true);

onBeforeMount(async () => {
  const response = await axios.post("users/has-users");
  hasUsers.value = response.data.result;
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
