const getters = {
  loading: (state) => state.loading,
  loaded: (state) => state.loaded,
};

const actions = {
  getAppData: ({ commit }) => {
    commit('SET_LOADING', true);

    fetch('/conditionSettings.json')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          commit('SET_LOADED', true);
        },
        (err) => {
          // error callback
          console.error(err);
          commit('SET_LOADED', false);
        },
      )
      .finally(() => {
        commit('SET_LOADING', false);
      });
  },
  setContent: ({ commit }) => {
    commit('SET_LOADED', true);
    commit('SET_LOADING', false);
  },
};

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_LOADED(state, loaded) {
    state.loaded = loaded;
  },
};

const state = {
  loading: false,
  loaded: false,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
