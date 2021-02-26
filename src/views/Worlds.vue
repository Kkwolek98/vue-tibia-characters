<template>
  <div class="worlds">
    <div v-for="world in worlds" :key="world.name">
      {{ world.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import charactersService from '../http/characters';
import worldsService from '../http/worlds';
import { World } from '../interfaces/world';

export default Vue.extend({
  name: 'Worlds',
  components: {
  },
  data() {
    return {
      worlds: [] as World[]
    }
  },
  mounted: function() {
    worldsService.getWorlds().then((response) => {
      this.worlds = response.worlds.allworlds;
      console.log({response})
      console.log(this.worlds)
      });
  }
});
</script>
