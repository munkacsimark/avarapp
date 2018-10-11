<template>
  <view-container>
    <view-header/>
      <ul v-if="summaryListExists">
        <li
          v-for="(item, index) in summaryList"
          :key="index"
          @click="removeConsumption(item.id)">
          {{ item.name }}, {{ item.price }}Ft, {{ item.size ? `${item.size}l` : '' }}</li>
      </ul>
      <span v-else>Még nem vittél fel fogyasztást.</span>
      <button @click="clearList">Lista törlése</button>
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

  private removeConsumption(id: number): void {
    this.$store.dispatch(ActionKeys.REMOVE_CONSUMPTION, id);
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
