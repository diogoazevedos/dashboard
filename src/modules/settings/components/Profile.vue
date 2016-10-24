<script>
import AppInput from 'components/ui/Input.vue'

export default {
  name: 'AppProfile',

  components: {
    AppInput
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="font-weight-300">Profile</h2>
    </div>

    <div class="col-xs-3 col-sm-3 col-md-2">
      <div class="avatar avatar-xl bg-voyager--dark">
        <div class="avatar-initials">DS</div>
      </div>
      <small>Manage your avatar using <a href="https://gravatar.com/">Gravatar</a>.</small>
    </div>

    <div class="col-xs-12 col-sm-7">
      <form>
        <div class="input-group">
          <label for="email">Full Name</label>
          <AppInput name="email" class="input input-m input--primary" placeholder="Your full name"></AppInput>
        </div>
        <div class="input-group">
          <label for="email">Email Address</label>
          <AppInput name="email" class="input input-m input--primary" placeholder="Your email address"></AppInput>
        </div>
      </form>
    </div>

    <hr class="line-divider">

    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">Password</h2>

      <form>
        <div class="input-group">
          <label for="currentPassword">Current Password</label>
          <AppInput type="password" name="currentPassword" class="input input-m input--primary" placeholder="Enter your current password"></AppInput>
        </div>

        <div class="input-group">
          <label for="newPassword">New Password</label>
          <AppInput type="password" name="newPassword" class="input input-m input--primary" placeholder="Enter a new password"></AppInput>
        </div>

        <div class="input-group">
          <label for="confirmNewPassword">Confirm New Password</label>
          <AppInput type="password" name="confirmNewPassword" class="input input-m input--primary" placeholder="Enter the password again"></AppInput>
        </div>

        <div class="input-group">
          <button class="button button-m button--flat bg-voyager--light">Update Password</button>
        </div>
      </form>
    </div>

    <hr class="line-divider">

    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">API Key</h2>

      <div class="input-group">
        <app-input name="apiKey" class="input input-m input--primary" placeholder="Your API Key"></app-input>
      </div>

      <div class="input-group">
        <button class="button button-m button--flat bg-voyager--light">Regenerate API Key</button>
      </div>
    </div>

    <hr class="line-divider">

    <div class="col-xs-12 col-sm-7">
      <h2 class="font-weight-300">Deactivate Account</h2>
      <p class="text-gray--light">This will permanently delete everything of your account.</p>

      <div class="input-group">
        <button class="button button-m button--inverted bg-red--hover">Deactivate Account</button>
      </div>
    </div>
  </div>
</template>
