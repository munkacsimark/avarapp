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

@Component({
  components: {
    ViewContainer,
    ViewHeader,
    ViewFooter,
  },
})
export default class Summary extends Vue {

  private summaryList: IItem[] = [];

  public constructor() {
    super();
  }

  private get summaryListExists(): boolean {
    return this.summaryList.length > 0;
  }

  private mounted(): void {
    this.setSummaryList();
  }

  private async setSummaryList(): Promise<void> {
    this.summaryList = await DataBaseService.getItemsByIds(this.$store.state.app.consumption);
  }

  private removeConsumption(id: number): void {
    this.$store.dispatch(ActionKeys.REMOVE_CONSUMPTION, id);
    this.setSummaryList();
  }

}
</script>
