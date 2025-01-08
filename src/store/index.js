import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      submittedPassword: false,
      contactStatus: null,
    }
  },
  actions: {
    setPassword(context) {
      context.commit('setPassword');
    },
    sendEmail(context, payload) {
      axios({
        url: "https://formspree.io/f/xnnnoryb",
        method: "post",
        headers: {
          Accept: "application/json",
        },
        data: {
          ...payload
        },
      }).then((response) => {
        context.commit('changeEmailStatus', response.data.ok);
      }).catch((error) => {
        context.commit('changeEmailStatus', error.response.data.error);
      })
    },
  },
  mutations: {
    setPassword(state) {
      state.submittedPassword = true;
    },
    changeEmailStatus(state, payload) {
      state.contactStatus = payload
    },
  },
  getters: {
    passwordStatus(state) {
      return state.submittedPassword;
    },
    didEmailSend(state) {
      return state.contactStatus;
    }
  }
})

export default store;