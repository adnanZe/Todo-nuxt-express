<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object as () => { statusCode?: number } | null,
      default: null,
    },
  },
  setup(props) {
    const pageNotFound = ref("404 Not Found");
    const otherError = ref("An error occurred");

    const title = computed(() =>
      props.error?.statusCode === 404 ? pageNotFound.value : otherError.value
    );

    return {
      pageNotFound,
      otherError,
      title,
    };
  },
});
</script>

<template>
  <v-app dark>
    NOT FOUND
    <h1 v-if="error?.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
