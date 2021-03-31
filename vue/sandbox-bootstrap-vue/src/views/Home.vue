<template>
  <div class="home">
    <sand-box-form></sand-box-form>
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import SandBoxForm from "@/components/SandBoxForm.vue";

@Component({
  components: {
    HelloWorld,
    SandBoxForm,
  },
})
export default class Home extends Vue {}
</script>
