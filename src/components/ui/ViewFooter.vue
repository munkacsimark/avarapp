<template>
  <footer>
    <nav :class="$style.navigation">
      <router-link
        :class="$style.route"
        :active-class="$style.activeRoute"
        :to="categoriesRoute">Kategóriák</router-link>
      <router-link
        :class="$style.route"
        :active-class="$style.activeRoute"
        :to="summaryRoute">Összesítés</router-link>
    </nav>
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

}
</script>

<style lang="scss" module>
@import '../../styles/colors';
@import '../../styles/sizes';

.navigation {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  height: $footer-height;
  bottom: 0;
  left: 0;
}
.route {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: map-get($colors, 'blue-shadow');
  color: map-get($colors, 'white');
  font-size: 1.8rem;
  font-weight: bold;
  transition: .3s;
  text-decoration: none;

  &.activeRoute {
    background-color: map-get($colors, 'blue');
    transition: .3s;
  }
}
</style>
