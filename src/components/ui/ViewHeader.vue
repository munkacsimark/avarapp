<template>
  <header :class="$style.header">
    <span>Fogyasztás: {{ currentPrice }} Ft</span>
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

<style lang="scss" module>
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .header {
    width: 100%;
    height: $header-height;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: map-get($colors, 'blue-shadow');
    font-weight: bold;
    text-align: center;
  }
</style>
