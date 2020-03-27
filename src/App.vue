<template>
  <a-layout class="i-wing">
    <a-layout-content>
      <a-row
        class="i-wing__container"
        type="flex"
        justify="center"
      >
        <a-col :span="12">
          <a-row
            class="i-wing__row"
            type="flex"
          >
            <a-col :span="24">
              <comment-form />
            </a-col>
            <a-col :span="24">
              <comments />
            </a-col>

          </a-row>
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
body,
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4 {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}
.i-wing {
  height: 100%;
  .i-wing__container {
    height: 100%;
    .i-wing__row {
      flex-direction: column;
      height: 100%;
    }
  }
}
</style>
