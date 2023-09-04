<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="@/assets/logo.svg" alt="logo" />
      <h3 class="app-name">OnBoarding</h3>
    </div>
    <v-card
      class="mb-2"
      density="compact"
      prepend-avatar="/src/assets/admin.svg"
      subtitle="Instructor"
      title="Admin"
      variant="text" />
  </nav>
</template>

<script setup></script>

<style scoped>
.app-name {
  font-size: 1.5rem;
}
.link {
  color: white;
  text-decoration: none;
}
.navbar {
  align-items: center;
  color: white;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.navbar-logo {
  align-items: center;
  display: flex;
  width: 15vw;
}
.navbar-links {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  width: 20vw;
}
</style>
