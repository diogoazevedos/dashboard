<script>
import AppHeader from '../../components/Header.vue'
import AppPopup from '../../components/ui/Popup.vue'

export default {
  name: 'AppProducts',

  data () {
    return {
      productList: [
        { title: 'Apple iPhone 6s 16GB Silver', cost: 'R$ 1000,00', created: '2 months ago' },
        { title: 'Apple iPhone 6s 16GB Silver', cost: 'R$ 1000,00', created: '2 months ago' },
        { title: 'Apple iPhone 6s 16GB Silver', cost: 'R$ 1000,00', created: '2 months ago' },
        { title: 'Apple iPhone 6s 16GB Silver', cost: 'R$ 1000,00', created: '2 months ago' },
        { title: 'Apple iPhone 6s 16GB Silver', cost: 'R$ 1000,00', created: '2 months ago' }
      ]
    }
  },

  components: {
    AppHeader, AppPopup
  }
}
</script>

<template>
  <div>
    <app-header title="Products" icon="icon-basket-loaded">
      <div slot="right">
        <a href="#" class="button button-m button--flat bg-green" role="button">New Product</a>
      </div>
    </app-header>

    <div class="container">
      <table class="table table-listing table-fixed">
        <thead>
          <tr>
            <th class="title active">Title</th>
            <th class="cost-price">Cost Price</th>
            <th class="created">Created</th>
            <th class="action empty-text">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, key) in productList">
            <td class="title" v-text="product.title"></td>
            <td class="cost-price" v-text="product.cost"></td>
            <td class="created" v-text="product.created"></td>
            <td class="action">
              <div class="pull-right">
                <span class="text-blue" role="button" v-bind:data-aaaoi="'action'+key" :ref="'action'+key">
                  More <i class="icon-arrow-down"></i>
                </span>
                <app-popup :trigger="'action'+key" position="bottom center" class="dropdown-menu--action">
                  <a href="/" class="item">Edit product</a>
                  <a href="/" class="item item--destroy">Remove</a>
                </app-popup>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
