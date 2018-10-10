<template>
  <footer>
    <router-link
      v-if="!isCategoriesRoute"
      :to="categoriesRoute">Kategóriák</router-link>
    <router-link
      v-if="!isSummaryRoute"
      :to="summaryRoute">Összesen</router-link>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Routes } from '@/router/Routes';
import { RouteNames } from '@/router/RouteNames';

@Component({
  components: {},
})
export default class ViewFooter extends Vue {

  private categoriesRoute: Routes = Routes.CATEGORIES;
  private summaryRoute: Routes = Routes.SUMMARY;

  public constructor() {
    super();
  }

  private get isCategoriesRoute(): boolean {
    return this.$router.currentRoute.name === RouteNames.CATEGORIES;
  }

  private get isSummaryRoute(): boolean {
    return this.$router.currentRoute.name === RouteNames.SUMMARY;
  }

}
</script>
