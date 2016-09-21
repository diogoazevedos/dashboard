<script>
import AppDropdown from './Dropdown.vue'

export default {
  data() {
    return {
      showAppNavMenu: false,
      showAppNavUser: false
    }
  },
  components: {
    AppDropdown
  },
  methods: {
    toggleDropdown(e, target) {
      window.console.log(target)
      target = !target
      if (target) {
        this.$dispatch('shown::dropdown')
        e.stopPropagation()
      } else {
        this.$dispatch('hide::dropdown')
      }
    }
  },
  events: {
    'hide::dropdown'() {
      this.showAppNavMenu = false
      this.showAppNavUser = false
    }
  }
}
</script>

<template>
  <nav class="app-nav fixed-top display-flex flex-alignment--middle">
    <div class="app-nav--brand display-flex">
      <a class="app-nav--menu" @click.prevent="toggleDropdown($event, showAppNavMenu)">
        <span class="bars-icon"></span>
      </a>
      <span class="wordmark font-size-l font-weight-600 text-voyager--light">Voyager</span>
      <app-dropdown :is-open="showAppNavMenu">
        <a href="/" class="dropdown-menu--item"><i class="icon-grid"></i> Dashboard</a>
        <a href="/" class="dropdown-menu--item">Dashboard</a>
        <a href="/" class="dropdown-menu--item">Dashboard</a>
        <a href="/" class="dropdown-menu--item">Dashboard</a>
        <a href="/" class="dropdown-menu--item">Dashboard</a>
      </app-dropdown>
    </div>
    <div class="app-nav--user display-flex">
      <div class="avatar avatar-xs bg-voyager" @click.prevent="showAppNavUser=!showAppNavUser">
        <div class="avatar-initials">DS</div>
      </div>
      <app-dropdown class="dropdown-menu--account" :is-open="showAppNavUser">
        <a href="/" class="dropdown-menu--item dropdown-menu--item__acount">
          <div class="text-center padding-top-m padding-bottom-m">
            <div class="avatar avatar-s bg-voyager margin-auto">
              <div class="avatar-initials">DS</div>
            </div>
            <div class="account-name font-size-s text-align-center">Donald Silveira</div>
          </div>
        </a>
        <a href="/" class="dropdown-menu--item"><i class="icon-equalizer"></i> Account settings</a>
        <a href="/" class="dropdown-menu--item"><i class="icon-logout"></i> Sign out</a>
      </app-dropdown>
    </div>
  </nav>
</template>

<style lang='scss'>
  @import '~voyager-assets/scss/variables';

  .app-nav {
    width: 100%;
    height: 50px;
    padding: 0 15px;
    background-color: $light;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      left: 0;
      right: 0;
      bottom: -3px;
      background: -webkit-linear-gradient(left, $primary 0%, $blue-light 100%);
      background: linear-gradient(to right, $primary, $blue-light);
    }
  }

  .app-nav--brand {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;

    .wordmark {
      height: 50px;
      line-height: 50px;
    }
  }

  .app-nav--menu {
    display: inline-block;
    margin-right: 15px;
    .bars-icon {
      display: block;
      width: 32px;
      height: 50px;
      background: url('data:image/svg+xml;utf8,<svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" fill="#865fb3"><g><path d="M940.9,230.4H59.1c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,208.4,968,230.4,940.9,230.4z"/><path d="M940.9,549.1H59.1C32,549.1,10,527.1,10,500c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,527.1,968,549.1,940.9,549.1z"/><path d="M940.9,867.8H59.1c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,845.8,968,867.8,940.9,867.8z"/></g></svg>');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 25px 25px;
    }
  }

  .dropdown-menu { top: 60px; }
  .dropdown-menu--account { right: 15px; }

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
