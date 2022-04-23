<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
    <h1>Vue Dashboard</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>