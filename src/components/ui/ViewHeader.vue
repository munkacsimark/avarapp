<template>
  <header>
    <span>Fogyasztás: {{ currentPrice }}</span>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataBaseService from '@/services/database/DataBaseService';

@Component({
  components: {},
})
export default class ViewHeader extends Vue {

  private currentPrice: number = 0;

  public constructor() {
    super();
  }

  private mounted() {
    this.setCurrentPrice();
  }

  private async setCurrentPrice(): Promise<void> {
    this.currentPrice = Array.from(await DataBaseService.getItemsByIds(this.$store.state.app.consumption))
      .reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  }

}
</script>
