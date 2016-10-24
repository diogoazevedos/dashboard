<script>
</script>

<template>
  <footer class="app-footer">
    <div class="row middle-xs">
      <div class="col-xs-6 col-sm-6">
        © 2016 Voyager, inc.
      </div>
      <div class="col-xs-6 col-sm-6 flex-alignment--end">
        <ul>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
@import 'src/assets/scss/variables';

.app-footer {
  position: fixed;
  width: 100%;
  padding: 15px 15px;
  font-size: $font-size-s;
  background-color: $light;
  color: $gray-light;
  border-top: 1px solid $snow-dark;
  bottom: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    display: inline-block;
    margin-left: 10px;

    > a {
      display: block;
      color: $gray-light;
      text-decoration: none;
    }

    > a:hover {
      color: $primary;
    }
  }
}
</style>
