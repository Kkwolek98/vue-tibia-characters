<template>
    <div>
        {{ world }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
    name: 'Worlds'
})
export default class World extends Vue {
    public world: string = '';
    mounted() {
        this.world = this.$route.params.world;
    }
}

</script>