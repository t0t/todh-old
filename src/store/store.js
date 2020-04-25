import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentIndex: 0,
    obras: [
      {
        title: "Start A New Day",
        description: "Resina, arena, oleo, cera.",
        img: "/img1.jpg",
      },
      {
        title: "Feel The Nature",
        description: "Resina, arena, oleo, cera.Resina, arena, oleo, cera.",
        img: "/img2.jpg",
      },
      {
        title: "Take A Deep Breath",
        description: "Resina, arena, oleo, cera.",
        img: "/img3.jpg",
      },
      {
        title: "Time For A Change",
        description: "sit amet.",
        img: "/img4.jpg",
      },
    ],
  },
  getters: {
    currentIndex: (state) => {
      return state.currentIndex;
    },
    obras: (state) => {
      return state.obras;
    },
  },
  mutations: {
    nextIndex: (state) => {
      if (state.currentIndex < state.obras.length - 1) state.currentIndex++;
    },
    prevIndex: (state) => {
      if (state.currentIndex > 0) state.currentIndex--;
    },
  },
});
