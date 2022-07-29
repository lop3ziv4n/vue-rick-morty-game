<template>
  <CharacterHeader/>
  <main class="dashboard">

    <div class="dashboard-group">
      <CharacterHint/>
      <div class="dashboard-select">
        <CharacterCard :character="chosenCharacter"
                       :closed="isClosed"/>
      </div>
      <div class="dashboard-button">
        <img src="./assets/refresh.png" alt="" @click="refresh()">
        <p>"Barajar y dar de nuevo!!"</p>
      </div>
    </div>
    <div class="dashboard-helper">
      <h3>Ayuda: </h3>
      <p> Especie: {{ chosenCharacter.species }} </p>
      <p> Genero: {{ chosenCharacter.gender }} </p>
    </div>
    <div class="dashboard-options">
      <CharacterCard v-for="option in options"
                     :key="option.id"
                     :character="option"
                     :closed="false"
                     @click="validate(option.id)"/>
    </div>
  </main>
</template>

<script>
import {getCharacters, randomNumber} from "./utils/api";
import CharacterCard from "@/components/CharacterCard";
import CharacterHeader from "@/components/CharacterHeader";
import CharacterHint from "@/components/CharacterHint";

export default {
  name: "App",
  components: {
    CharacterHint,
    CharacterHeader,
    CharacterCard
  },
  data() {
    return {
      options: [],
      chosenCharacter: {},
      isClosed: true
    }
  },
  async beforeCreate() {
    const characters = await getCharacters();
    const chosenCharacter = characters[randomNumber(0, 2)];
    this.options = characters;
    this.chosenCharacter = chosenCharacter;
  },
  methods: {
    validate(chosenCharacter) {
      if (chosenCharacter === this.chosenCharacter.id) {
        this.isClosed = false;
        alert("¡Lo has adivinado!");
      } else {
        alert("Personaje incorrecto, inténtalo de nuevo");
      }
    },
    async refresh() {
      this.isClosed = true;
      const characters = await getCharacters();
      const chosenCharacter = characters[randomNumber(0, 2)];
      this.options = characters;
      this.chosenCharacter = chosenCharacter;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: linear-gradient(114deg, rgba(154, 221, 212, 1) 0%, rgba(171, 214, 227, 1) 100%);
}

.dashboard-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 15px;
  justify-items: center;
}

.dashboard-select {
  display: flex;
  justify-content: center;
}

.dashboard-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dashboard-button p {
  padding-top: 15px;
  color: black;
}

.dashboard-button img {
  width: 30%;
  height: 40%;
}

.dashboard-button img:hover {
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  transform: scale(1.09);
  cursor: pointer;
}

.dashboard-helper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

.dashboard-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 15px;
  justify-items: center;
}

.dashboard-options .card {
  cursor: pointer;
}

.image-container {
  display: flex;
}

.image-container img {
  display: inline-block;
  width: 100%;
}
</style>
