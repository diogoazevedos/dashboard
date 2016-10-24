<script>
import AppHeader from 'components/Header.vue'
import AppInput from 'components/ui/Input.vue'

export default {
  name: 'AppCreateProduct',

  components: {
    AppHeader, AppInput
  }
}
</script>

<template>
  <form>
    <AppHeader title="Create a new product" icon="icon-plus">
      <div slot="right">
        <button class="button button-m button--flat bg-green">Create Product</button>
      </div>
    </AppHeader>

    <div class="container">
      <div class="padding-s shadow-level--0 border-radius-s">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <div class="input-group">
              <label for="title">Title</label>
              <AppInput name="title" class="input input-m input--primary" placeholder="Product title"></AppInput>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="input-group">
              <label for="url">URL</label>
              <AppInput type="url" name="url" class="input input-m input--primary" placeholder="Product URL"></AppInput>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="input-group">
              <label for="cost">Cost Price</label>
              <AppInput name="cost" class="input input-m input--primary" placeholder="Cost Price"></AppInput>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
