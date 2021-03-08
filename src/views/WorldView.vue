<template>
    <div>
        <div class="grid-container" v-if="players.length">
            <card v-for="player in players" :key="player.name">
                <div class="card-header">{{ player.name }}</div>
                <div class="card-options">
                    <label>Vocation:</label> <div>{{ player.vocation }}</div>
                    <label>Level:</label> <div>{{ player.level }}</div>
                </div>
            </card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { World } from '@/interfaces/world'
import worldsService from '../http/worlds';
import Card from '../components/utils/Card.vue';
@Component({
    name: 'Worlds',
    components: {
        Card
    }
})
export default class WorldView extends Vue {
    public players: any[] = [];
    mounted() {
        worldsService.getWorld(this.$route.params.world).then((response) => {
            this.players = response.world.players_online
        });
    }


}

</script>