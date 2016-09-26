<script>
import AppDropdown from './Dropdown.vue'

export default {
  data () {
    return {
      navItems: [
        { href: '/', label: 'Dashboard', icon: 'icon-grid' },
        { href: '/', label: 'Dashboard', icon: 'icon-grid' },
        { href: '/', label: 'Dashboard', icon: 'icon-grid' }
      ],
      navUser: [
        { href: '/', label: 'Account settings', icon: 'icon-equalizer' },
        { href: '/', label: 'Logout', icon: 'icon-logout' }
      ]
    }
  },

  components: {
    AppDropdown
  }
}
</script>

<template>
  <nav class="app-nav fixed-top display-flex flex-alignment--middle">
    <div class="app-nav--navigation display-flex">
      <app-dropdown :items="navItems">
        <a class="app-nav--menu"><span class="bars-icon"></span></a>
      </app-dropdown>
    </div>
    <div class="app-nav--brand display-flex">
      <span class="wordmark font-size-l font-weight-600">Voyager</span>
    </div>
    <div class="app-nav--user display-flex">
      <app-dropdown :items="navUser" :position="'right'">
        <div class="avatar avatar-xs bg-voyager--dark">
          <div class="avatar-initials">DS</div>
        </div>
        <a slot="custom-item" href="/" class="dropdown-menu--item dropdown-menu--item__acount">
          <div class="text-center padding-top-m padding-bottom-m">
            <div class="avatar avatar-s bg-voyager margin-auto">
              <div class="avatar-initials">DS</div>
            </div>
            <div class="account-name font-size-s text-align-center">Donald Silveira</div>
          </div>
        </a>
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
    background-color: $primary-light;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.2);
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
      background: $primary-dark;
    }
  }

  .app-nav--navigation {
    margin-right: 15px;
  }

  .app-nav--menu {
    .bars-icon {
      display: block;
      width: 32px;
      height: 30px;
      background: url('data:image/svg+xml;utf8,<svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g><path d="M940.9,230.4H59.1c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,208.4,968,230.4,940.9,230.4z"/><path d="M940.9,549.1H59.1C32,549.1,10,527.1,10,500c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,527.1,968,549.1,940.9,549.1z"/><path d="M940.9,867.8H59.1c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,845.8,968,867.8,940.9,867.8z"/></g></svg>');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 25px 25px;
    }
  }

  .app-nav--brand {
    flex: 1;
    -ms-flex: 1;
    -webkit-box-flex: 1;

    .wordmark {
      height: 50px;
      line-height: 50px;
      color: $light;
    }
  }

  .dropdown-menu {
    top: 60px;
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
