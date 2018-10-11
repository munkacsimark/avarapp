<template>
  <header>
    <span>Fogyasztás: {{ currentPrice }}</span>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataBaseService from '@/services/database/DataBaseService';
import IItem from '@/services/database/interfaces/IItem';

@Component({
  components: {},
})
export default class ViewHeader extends Vue {

  public constructor() {
    super();
  }

  private get currentPrice(): number {
    return DataBaseService.getItemsByIds(this.$store.state.app.consumption)
      .reduce((accumulator: number, item: IItem) => accumulator + item.price, 0);
  }

}
</script>
