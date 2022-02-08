import { mount } from '@vue/test-utils'
import productSearch from './ProductsCard.vue'
// import BannerComponent from './BannerComponent.vue'

describe('Product Search', () => {
  test('Comprobar input de barra de búsqueda', () => {
    const wrapper = mount(productSearch, {})
    // await wrapper.find('#search').setValue('balon')
    // expect(wrapper.find('#productTitle').text()).toBeEqual('Balón')
  })
})
