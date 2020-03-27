<template>
  <a-layout class="i-wing">
    <a-layout-content>
      <a-row
        class="i-wing__wrapper"
        type="flex"
        justify="center">
        <a-col
          :span="12">
          <comments />
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss">
body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}
.i-wing{
  height: 100%;
  .i-wing__wrapper{
    height: 100%;
  }
}
</style>
