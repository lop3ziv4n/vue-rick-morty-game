<template>
  <article>
    <div>
      <h3>Indicaciones:</h3>
      <p>Intenta adivinar quien se encuentra en la tarjeta oculta de la parte superior,
        Seleccionando uno de los tres personajes que se encuentran en la parte inferior.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CharacterHint'
}
</script>

<style scoped>
article {
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding: 2px;
  background: linear-gradient(
      90deg,
      rgb(154, 221, 212) 0%,
      rgba(171, 214, 227, 1) 50%,
      rgba(171, 214, 227, 1) 100%
  );
}
</style>
