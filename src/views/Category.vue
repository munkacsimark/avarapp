<template>
  <view-container>
    <view-header/>
      <h1 :class="$style.title">{{ categoryName }}</h1>
      <ul
        :class="$style.list"
        v-if="itemListExists">
        <li
          :class="$style.listItem"
          v-for="item in itemList"
          :key="item.id"
          @click="addConsumption($event, item.id)">
          <span :class="$style.itemName">
            {{ item.name }} {{ item.size ? `(${item.size}l)` : '' }}
          </span>
          <span>{{ item.price }}Ft</span>
        </li>
      </ul>
      <span
        v-else
        :class="$style.emptyCategory">Ez a kategória még üres.</span>
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

  private categoryName: string = '';
  private itemList: IItem[] = [];

  public constructor() {
    super();
  }

  private get itemListExists(): boolean {
    return this.itemList.length > 0;
  }

  private mounted(): void {
    this.categoryName = this.$route.params.category;
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

  private addConsumption(event: Event, id: number): void {
    this.$store.dispatch(ActionKeys.ADD_CONSUMPTION, id);
    if (event.currentTarget && event.currentTarget instanceof HTMLElement) {
      const element = event.currentTarget;
      element.classList.add('growToClick');
      const classRemoverTimeout: number = setTimeout(() => {
        element.classList.remove('growToClick');
        clearTimeout(classRemoverTimeout);
      }, 200);
    }
  }

}
</script>

<style lang="scss" module>
@import '../styles/backgrounds';

.title {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 0;
}
.emptyCategory {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.list {
  padding: 0;
  margin: 0;
}
.listItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  margin: 20px 0;
  
  &::before {
    content: '';
    width: 34px;
    height: 24px;
    background-position: left center;
    background-repeat: no-repeat;
    @include addItemBackgroundImage;
    transform: scale(1);
    transition: .8s;
  }
}
.itemName {
  flex-grow: 1;
}
</style>

<style>
.growToClick::before {
  transform: scale(1.2);
  transition: .2s;
}
</style>
