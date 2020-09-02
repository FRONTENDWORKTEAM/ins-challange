const getters = {
  loading: (state) => state.loading,
  loaded: (state) => state.loaded,
  categories: (state) => state.application.categories,
  categoriesSelected: (state) => state.application.categoriesSelected,
  operators: (state) => state.application.operators,
  inputs: (state) => state.application.inputs,
  conditions: (state) => state.application.conditions,
  groupList: (state) => state.groupList,
};

const actions = {
  getAppData: ({ commit }) => {
    commit('SET_LOADING', true);

    fetch('/conditionSettings.json')
      .then((response) => response.json())
      .then(
        (data) => {
          commit('SET_LOADED', true);
          commit('SET_APPLICATION', data);
          commit('SET_GROUPLIST', {});
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
  selectCategory: ({ commit, state }, id) => {
    const conditions = state.conditions.filter((item) => item.category === id);
    commit('SET_CONDITIONS', conditions);
  },
};

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_LOADED(state, loaded) {
    state.loaded = loaded;
  },
  SET_APPLICATION(state, application) {
    state.application = application;
  },
  SET_GROUPLIST(state, groupList) {
    state.groupList = groupList;
  },
};

const state = {
  loading: false,
  loaded: false,
  application: {},
  groupList: {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
