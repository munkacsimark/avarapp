<template>
  <div class="category">
    Category: {{ $route.params.category }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Category extends Vue {}
</script>
