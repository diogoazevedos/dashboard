<script>
import AppHeader from '../../components/Header.vue'

export default {
  name: 'AppSettings',

  components: {
    AppHeader
  }
}
</script>

<template>
  <div>
    <app-header title="Settings" icon="icon-settings"></app-header>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3 settings-side-nav">
          <h3 class="font-weight-400 text-gray">
            Wellcome, Donald Silveira
          </h3>

          <ul class="settings-nav">
            <router-link tag="li" to="/settings/profile">
              <a>Profile</a>
            </router-link>
            <router-link tag="li" to="/settings/billing">
              <a>Billing</a>
            </router-link>
            <router-link tag="li" to="/settings/notifications">
              <a>Notifications</a>
            </router-link>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '../../assets/scss/variables';

.settings-side-nav {
}

.settings-nav {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 5px;

    &.router-link-active > a {
      color: $primary
    }

    > a {
      text-decoration: none;
      color: $gray-light;
      transition: all .5s linear;
    }

    > a:hover {
      color: $gray;
    }
  }
}
</style>
