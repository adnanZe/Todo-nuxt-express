<template></template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  router.push("/todo");
});
</script>
