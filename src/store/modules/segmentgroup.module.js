const getters = {
  groups: (state) => state.groups,
};

const actions = {
  addSegment: ({ commit, rootGetters }, payload) => {
    if (!payload.groupId) {
      commit('ADD_GROUP');
    }
    const activeCategory = {
      id: payload.categoryId,
      name: rootGetters['application/categories'][payload.categoryId],
    };
    commit('ADD_SEGMENT', { ...payload, ...{ activeCategory } });
  },
  updateSegment: ({ commit }, payload) => {
    commit('UPDATE_SEGMENT', payload);
  },
  removeSegment: ({ commit }, payload) => {
    commit('REMOVE_SEGMENT', payload);
  },
  updateGroup: ({ commit }, payload) => {
    commit('UPDATE_GROUP', payload);
  },
};

const mutations = {
  ADD_GROUP(state) {
    const index = (Object.entries(state.groups).length + 1).toString();
    const group = {
      conditionLogic: 'and',
      groupLogic: index === '1' ? 'none' : 'and',
      conditionList: [],
    };
    const newgroups = {};
    newgroups[index] = group;
    state.groups = { ...state.groups, ...newgroups };
  },
  ADD_SEGMENT(state, payload) {
    const groups = JSON.parse(JSON.stringify(state.groups));
    const groupId = payload.groupId ? payload.groupId : Object.entries(state.groups).length;
    const activeGroup = JSON.parse(JSON.stringify(state.groups[groupId]));
    activeGroup.conditionList.push({
      id: null,
      operator: null,
      inputs: {},
      activeCategory: payload.activeCategory,
    });
    groups[groupId] = activeGroup;
    state.groups = groups;
  },
  UPDATE_SEGMENT(state, payload) {
    const groups = JSON.parse(JSON.stringify(state.groups));
    groups[payload.groupId].conditionList[payload.segmentIndex] = payload.segment;
    state.groups = groups;
  },
  UPDATE_GROUP(state, payload) {
    const groups = JSON.parse(JSON.stringify(state.groups));
    groups[payload.groupId] = payload.group;
    state.groups = groups;
  },
  REMOVE_SEGMENT(state, payload) {
    const groups = JSON.parse(JSON.stringify(state.groups));
    groups[payload.groupId].conditionList.splice(payload.segmentIndex, 1);
    if (groups[payload.groupId].conditionList.length < 1) {
      delete groups[payload.groupId];
    }
    state.groups = groups;
  },
};

const state = {
  loading: false,
  loaded: false,
  groups: {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
