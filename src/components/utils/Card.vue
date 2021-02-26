<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
    name: 'app-card',
    
})
export default class Card extends Vue {

}
</script>

<style lang="scss" scoped>
.card {
    min-width: 200px;
    min-height: 200px;
    background: white;
    border-radius: 16px 8px;
    display: inline-block;
    box-shadow: 3px 2px 4px rgb(197, 197, 197);
    padding: 12px 24px;
    cursor: pointer;
    * {
        cursor: pointer;
    }
}
.card-header {
    font-size: var(--fontSize-medium);
    text-align: center;
    font-weight: 500;
    margin-bottom: 12px;
}
.card-options {
    display: grid;
    grid-template-columns: 1fr 1fr;

    label {
        font-weight: 500;
    }
    div {
        text-align: right;
    }
}
</style>