export const state = () => ({
    show: false
  })

export const mutations = {
  false(state) {
    state.show = false;
  },
  true(state) {
    state.show = true;
  }
}