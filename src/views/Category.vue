<template>
  <view-container>
    <view-header/>
      <ul v-if="itemListExists">
        <li
          v-for="item in itemList"
          :key="item.id"
          @click="addConsumption(item.id)">
          {{ item.name }}, {{ item.price }}Ft, {{ item.size ? `${item.size}l` : '' }}</li>
      </ul>
      <span v-else>Ez a kategória még üres.</span>
    <view-footer/>
  </view-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewContainer from '@/components/ui/ViewContainer.vue';
import ViewHeader from '@/components/ui/ViewHeader.vue';
import ViewFooter from '@/components/ui/ViewFooter.vue';
import IItem from '@/services/database/interfaces/IItem';
import { ItemCategories } from '@/services/database/ItemCategories';
import DataBaseService from '@/services/database/DataBaseService';
import { ActionKeys } from '@/store/ActionKeys';

@Component({
  components: {
    ViewContainer,
    ViewHeader,
    ViewFooter,
  },
})
export default class Category extends Vue {

  private itemList: IItem[] = [];

  public constructor() {
    super();
  }

  private get itemListExists(): boolean {
    return this.itemList.length > 0;
  }

  private mounted(): void {
    this.setItemList();
  }

  private setItemList(): void {
    let category: ItemCategories;
    switch (this.$route.params.category) {
      case ItemCategories.COFFEE: category = ItemCategories.COFFEE; break;
      case ItemCategories.BEER: category = ItemCategories.BEER; break;
      case ItemCategories.HOT_DRINK: category = ItemCategories.HOT_DRINK; break;
      case ItemCategories.SOFT_DRINK: category = ItemCategories.SOFT_DRINK; break;
      case ItemCategories.SNACK: category = ItemCategories.SNACK; break;
      case ItemCategories.WINE: category = ItemCategories.WINE; break;
      case ItemCategories.FROCCS: category = ItemCategories.FROCCS; break;
      default: throw new ReferenceError('Unknown ItemCategory');
    }
    this.itemList = DataBaseService.getItemsByCategories([category]);
  }

  private addConsumption(id: number): void {
    this.$store.dispatch(ActionKeys.ADD_CONSUMPTION, id);
  }

}
</script>
