import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    album: undefined,
    currentAlbum: undefined,
    playlist: []
  },
  mutations: {
    GET_ALBUMS(state, albums){
      state.albums = albums
    },
     GET_ALBUM(state, album){
       state.album = album

     },
     ADD_ALBUM(state, currentAlbum){
      state.playlist.push(currentAlbum)
    },
    SET_CURRENTALBUM(state, newValue){
      state.currentAlbum = newValue
    }
  },
  actions: {
    /*setCurrentAlbum({commit, dispatch}, newValue){
      commit('SET_CURRENTALBUM', newValue)
      dispatch('addAlbum')    
    },*/
    addAlbum({commit}, newValue){
      commit('ADD_ALBUM', newValue)
      console.log("new value", newValue)
    },
    getAlbums({commit}){
      axios.get('https://api.jamendo.com/v3.0/albums/?client_id=105e2031').then ((response) => {
      commit('GET_ALBUMS', response.data.results)
      })
    },
    getAlbum({commit}, id){
      axios.get(`https://api.jamendo.com/v3.0/playlists/file/?client_id=105e2031${id}`).then((response) =>{
        commit('GET_ALBUM', response.data.results)
      })
    },  

  },
  modules: {
  },
  getters: {
    selected: (state) => {       
     return state.currentAlbum;  
      }
  }
})
