<template>
  <input @focus="logs" />
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

Component;
export default class SandBoxForm extends Vue {
  logs() {
    console.log("test");
  }
}
</script>
