<template>
  <header>
    <h2>Juego Adivinanza Rick & Morty</h2>
  </header>
</template>

<script>
export default {
  name: 'CharacterHeader'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 2px;
  background: linear-gradient(
      90deg,
      rgb(154, 221, 212) 0%,
      rgba(171, 214, 227, 1) 50%,
      rgba(171, 214, 227, 1) 100%
  );
}
</style>
