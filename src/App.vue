<template>
  <div @click="handleClick">hello{{ str }}</div>
</template>

<script setup lang="ts">
// import { greet } from "./index";

const str = "1";
console.log(str);

const handleClick = () => {
  // greet({
  //   name: "string",
  //   age: 1,
  // });
};
</script>
