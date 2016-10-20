<script>
import AppInput from '../../components/ui/Input.vue'

export default {
  name: 'AppProfile',

  components: {
    AppInput
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">Profile</h2>

      <form>
        <div class="input-group">
          <label for="email">Full Name</label>
          <app-input name="email" class="input input-m input--primary" placeholder="Your email address"></app-input>
        </div>
        <div class="input-group">
          <label for="email">Email Address</label>
          <app-input name="email" class="input input-m input--primary" placeholder="Your email address"></app-input>
        </div>
      </form>
    </div>

    <div class="line-divider"></div>

    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">Password</h2>

      <form>
        <div class="input-group">
          <label for="currentPassword">Current Password</label>
          <app-input type="password" name="currentPassword" class="input input-m input--primary" placeholder="Enter your current password"></app-input>
        </div>

        <div class="input-group">
          <label for="newPassword">New Password</label>
          <app-input type="password" name="newPassword" class="input input-m input--primary" placeholder="Enter a new password"></app-input>
        </div>

        <div class="input-group">
          <label for="confirmNewPassword">Confirm New Password</label>
          <app-input type="password" name="confirmNewPassword" class="input input-m input--primary" placeholder="Enter the password again"></app-input>
        </div>

        <div class="input-group">
          <button class="button button-m button--flat bg-voyager--light">Update Password</button>
        </div>
      </form>
    </div>

    <div class="line-divider"></div>

    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">API Key</h2>

      <div class="input-group">
        <app-input name="apiKey" class="input input-m input--primary" placeholder="Your API Key"></app-input>
      </div>

      <div class="input-group">
        <button class="button button-m button--flat bg-voyager--light">Regenerate API Key</button>
      </div>
    </div>

    <div class="line-divider"></div>

    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">Deactivate Account</h2>
      <p class="text-gray--light">This will permanently delete everything of your account.</p>

      <div class="input-group">
        <button class="button button-m button--inverted bg-red">Deactivate Account</button>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '../../assets/scss/variables';

.line-divider {
  display: block;
  width: 100%;
  height: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid $snow-dark;
}
</style>
