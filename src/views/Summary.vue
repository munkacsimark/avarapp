<template>
  <view-container>
    <view-header/>
      <h1 :class="$style.title">Eddigi fogyasztás</h1>
      <ul
        :class="$style.list"
        v-if="summaryListExists">
        <li
          :class="$style.listItem"
          v-for="(item, index) in summaryList"
          :key="index"
          @click="removeConsumption(item.id, $event)">
          <span :class="$style.itemName">
            {{ item.name }} {{ item.size ? `(${item.size}l)` : '' }}
          </span>
          <span>{{ item.price }}Ft</span>
        </li>
      </ul>
      <span
        v-else
        :class="$style.emptySummary">Még nem ittál semmit. Gyerünk! :)</span>
      <button
        v-if="summaryListExists"
        :class="$style.clearList"
        @click="clearList">Lista törlése</button>
    <view-footer/>
  </view-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewContainer from '@/components/ui/ViewContainer.vue';
import ViewHeader from '@/components/ui/ViewHeader.vue';
import ViewFooter from '@/components/ui/ViewFooter.vue';
import IItem from '@/services/database/interfaces/IItem';
import DataBaseService from '@/services/database/DataBaseService';
import { ActionKeys } from '@/store/ActionKeys';
import LocalStorageService from '@/services/localstorage/LocalStorageService';

@Component({
  components: {
    ViewContainer,
    ViewHeader,
    ViewFooter,
  },
})
export default class Summary extends Vue {

  public constructor() {
    super();
  }

  private removeConsumption(id: number, event: Event): void {
    if (event.currentTarget && event.currentTarget instanceof HTMLElement) {
      const element = event.currentTarget;
      element.classList.add('swipeOut');
      const removeTimeout: number = setTimeout(() => {
        this.$store.dispatch(ActionKeys.REMOVE_CONSUMPTION, id);
        element.classList.remove('swipeOut');
        clearTimeout(removeTimeout);
      }, 200);
    }
  }

  private clearList(): void {
    LocalStorageService.clearConsumptions();
    this.$store.dispatch(ActionKeys.FETCH_DATA);
  }

  private get summaryListExists(): boolean {
    return this.summaryList.length > 0;
  }

  private get summaryList(): IItem[] {
    return DataBaseService.getItemsByIds(this.$store.state.app.consumption);
  }

}
</script>

<style lang="scss" module>
@import '../styles/colors';
@import '../styles/backgrounds';

.title {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 0;
}
.emptySummary {
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
  opacity: 1;
  
  &::before {
    content: '';
    width: 34px;
    height: 24px;
    background-position: left center;
    background-repeat: no-repeat;
    @include removeItemBackgroundImage;
  }
}
.itemName {
  flex-grow: 1;
}
.clearList {
  display: flex;
  align-self: center;
  background-color: map-get($colors, 'red');
  font-size: 1.6rem;
  color: map-get($colors, 'white');
  font-weight: bold;
  border: 0;
  border-radius: 2px;
  padding: 10px 20px;
}
</style>

<style>
.swipeOut {
  transform: translateX(200px);
  opacity: 0;
  transition: .2s;
}
</style>
