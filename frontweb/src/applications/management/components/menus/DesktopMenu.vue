<template>
  <div id="desktopMenu" class="animate__animated animate__fadeInDown">
    <div class="lateralContent">
      <i class="home icon"></i>
      <RouterLink to="/">Páginas</RouterLink>
      <RouterLink to="/">Usuários</RouterLink>
      <RouterLink to="/">Configurações</RouterLink>
    </div>

    <div class="lateralContent">
      <RouterLink to="/">
        <i class="globe icon" />
      </RouterLink>
      <i
        class="power off icon"
        @click="showLogout = true"
        style="cursor: pointer"
      />
    </div>
  </div>

  <transition :enter-active-class="fadeIn" :leave-active-class="fadeOut">
    <div class="confirmation" v-if="showLogout">
      <h2>Tem certeza que deseja sair?</h2>

      <div style="display: flex; gap: 10px; justify-content: center">
        <button class="button" @click="logout">Sim</button>
        <button class="button" @click="showLogout = false">Não</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DesktopMenu",
  data() {
    return { showLogout: false };
  },
  methods: {
    logout() {
      localStorage.setItem("gariobald", null);
      this.$router.push({ name: "authenticate" });
    },
  },
  computed: {
    fadeIn() {
      return "animate__animated animate__fadeInRight animate__faster";
    },
    fadeOut() {
      return "animate__animated animate__fadeOutRight animate__faster";
    },
  },
};
</script>

<style lang="css" scoped>
@import url("./desktop-menu.css");
</style>
