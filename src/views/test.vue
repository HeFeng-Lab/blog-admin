<template>
  <div>
    <h1>Hello World!</h1>
  </div>
</template>

<script setup lang="ts">
import { test } from "@/api/modules/test";
import { onMounted } from "vue";

onMounted(() => {
  test();
});
</script>

<style scoped lang="scss"></style>
