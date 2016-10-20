<script>
import AppPopup from './ui/Popup.vue'

export default {
  data () {
    return {
      navItems: [
        { href: '/', label: 'Dashboard', icon: 'icon-grid' },
        { href: '/products', label: 'Products', icon: 'icon-basket-loaded' },
        { href: '/', label: 'Dashboard', icon: 'icon-grid' }
      ],
      navUser: [
        { href: '/settings/profile', label: 'Account settings', icon: 'icon-equalizer' },
        { href: '/logout', label: 'Logout', icon: 'icon-logout' }
      ]
    }
  },

  components: {
    AppPopup
  }
}
</script>

<template>
  <nav class="app-nav fixed-top display-flex flex-alignment--middle">
    <div class="col-xs-4 flex-alignment--start app-nav--navigation">
      <a class="app-nav--menu" ref="appNavMenu"><span class="bars-icon"></span></a>
      <app-popup trigger="appNavMenu">
        <router-link v-for="item in navItems" :to="item.href" class="dropdown-menu--item">
          <i v-if="item.icon" :class="item.icon"></i>
          {{item.label}}
        </router-link>
      </app-popup>
    </div>
    <div class="col-xs-4 flex-alignment--center app-nav--brand">
      <span class="font-size-l font-weight-600">Voyager</span>
    </div>
    <div class="col-xs-4 flex-alignment--end">
      <div class="app-nav--user" ref="appUserMenu">
        <div class="avatar avatar-xs bg-voyager--dark">
          <div class="avatar-initials">DS</div>
        </div>
        <app-popup trigger="appUserMenu" position="bottom right">
          <router-link to="/settings/profile" class="dropdown-menu--item dropdown-menu--item__acount">
            <div class="text-center padding-top-m padding-bottom-m">
              <div class="avatar avatar-s bg-voyager margin-auto">
                <div class="avatar-initials">DS</div>
              </div>
              <div class="account-name font-size-s text-align-center">Donald Silveira</div>
            </div>
          </router-link>
          <router-link v-for="item in navUser" :to="item.href" class="dropdown-menu--item">
            <i v-if="item.icon" :class="item.icon"></i>
            {{item.label}}
          </router-link>
        </app-popup>
      </div>
    </div>
  </nav>
</template>

<style lang='scss' scoped>
@import '../assets/scss/variables';

.app-nav {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  background-color: $primary-light;
  background: -webkit-linear-gradient(left, $primary 0%, $primary-light 100%);
  background: linear-gradient(to right, $primary, $primary-light);
  border-bottom: 3px solid $primary-dark;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 90;
}

.app-nav--menu {
  .bars-icon {
    display: block;
    width: 32px;
    height: 30px;
    background: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="20" height="20" viewBox="0 0 20 20"><path d="M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path d="M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path></svg>');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px 32px;
  }
}

.app-nav--brand {
  color: $light;
}

.app-nav--user {
  display: inline-block;
  cursor: default;
}

.dropdown-menu {
  width: 240px;
}

.drop-open .dropdown-menu {
  margin-top: 20px;
}

.dropdown-menu--item__acount {
  height: auto;
  padding-left: 0;
  padding-right: 0;

  .avatar {
    display: block;
    margin-bottom: 15px;
  }

  .account-name {
    display: block;
    line-height: normal;
  }
}
</style>
