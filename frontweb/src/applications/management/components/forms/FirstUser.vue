<template>
  <div class="content-box">
    <h2>Primeiro usuário</h2>
    <p class="message" v-for="m in message">{{ m }}</p>
    <input
      type="email"
      placeholder="Digite o seu e-mail"
      v-model="user.credentials.email"
    />
    <input
      type="password"
      placeholder="Digite a sua senha"
      v-model="user.credentials.password"
    />
    <button class="button" @click="createUser">Criar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "@/helpers/axios";

const emit = defineEmits(["userCreated"]);

const user = ref({ credentials: { email: "", password: "" } });
const loading = ref(false);
const message = ref([]);

const createUser = async () => {
  loading.value = true;
  const response = await axios.post("users/first-user", user.value);

  if (response.data.error) {
    response.data.result.forEach((msg) => message.value.push(msg));
  }

  loading.value = false;
  emit("userCreated");
};
</script>
