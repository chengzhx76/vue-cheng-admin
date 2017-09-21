<template>
  <div class="error">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'error',
  data() {
    return {
      msg: '出错啦~~~~~'
    }
  }
}
</script>

<style scoped>

</style>
