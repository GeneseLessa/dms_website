<template>
  <div class="content-box">
    <h2>Autentique-se</h2>

    <div v-if="message.length">
      <p class="message error" v-for="msg in message" key="msg">{{ msg }}</p>
    </div>

    <input
      ref="username"
      type="email"
      placeholder="Digite o seu e-mail"
      v-model="user.email"
    />
    <input
      type="password"
      placeholder="Digite a sua senha"
      v-model="user.password"
      ref="password"
      @keyup.enter="authenticate"
    />

    <button class="button" @click="authenticate">Entrar</button>
  </div>
</template>

<script>
import axios from "@/helpers/axios.js";

export default {
  name: "AuthenticateForm",
  data() {
    return {
      user: { email: "", password: "" },
      message: [],
      loading: false,
    };
  },
  methods: {
    async authenticate() {
      try {
        const response = await axios.post("users/authenticate", this.user);

        localStorage.setItem("gariobald", response.data.result);
        this.$router.push({ name: "welcome" });
      } catch (err) {
        this.message = err.response.data.result;
      }
    },
  },
  mounted() {
    this.$refs.username.focus();
  },
};
</script>
