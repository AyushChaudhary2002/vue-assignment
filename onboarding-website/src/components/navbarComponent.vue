<template>
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="@/assets/logo.svg" alt="logo" />
        <h3 class="app-name">OnBoarding</h3>
      </div>
      <div class="navbar-links">
        <a class="link" href="#">Home</a>
        <a class="link" href="#">About</a>
        <a class="link" href="#">Contact</a>
      </div>
      <v-card
            class="mb-2"
            density="compact"
            prepend-avatar="/src/assets/admin.svg"
            subtitle="Instructor"
            title= "Admin"
            variant="text"/>
    </nav>
</template>

<script setup>
</script>

<style scoped>
.app-name {
  font-size: 1.5rem;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  font-size: 1rem;
  color: white;
 
}
.navbar-logo {
  display: flex;
  align-items: center;
  width: 15vw;
}
.navbar-links {
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  width: 20vw;
}
.link{
  color: white;
  text-decoration: none;
}
</style>
