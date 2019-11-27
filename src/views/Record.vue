<template>
  <div>
    <div class="record">
      <h1>record mouse movements</h1>
      <h1>hallo world</h1>
    </div>
    <div class="square"></div>
  </div>
</template>

<style lang="stylus">
.square {
  width: 50%;
  border-style: solid;
  border-color: coral;
}

.square:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
</style>
