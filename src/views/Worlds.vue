<template>
  <div class="worlds">
    <div class="container">
      <card v-for="world in worlds" :key="world.name" @click.native="navigateTo(world.name)">
        <div class="card-header">{{ world.name }}</div>
        <div class="card-options">
          <label>Online:</label> <div>{{ world.online }} players</div>
          <label>Location:</label> <div>{{ world.location }}</div>
          <label>PvP:</label> <div>{{ world.worldtype }}</div>
          <label>Additional:</label> <div>{{ world.additional }}</div>
        </div>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import worldsService from '../http/worlds';
import { World } from '../interfaces/world';
import Card from "@/components/utils/Card.vue"
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Card
  },
  name: 'Worlds',
})
export default class Worlds extends Vue {
  private worlds: World[] = [];

  mounted() {
    worldsService.getWorlds().then((response) => this.worlds = response.worlds.allworlds);
  }

  public navigateTo(world: string) {
    this.$router.push('/world/' + world)
  }

}
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 20px;
  padding: 24px 64px;
}
</style>
