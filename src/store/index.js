import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    album: undefined
  },
  mutations: {
    GET_ALBUMS(state, albums){
      state.albums = albums
    },
     GET_ALBUM(state, album){
       state.album = album

     },
     ADD_ALBUM(state, album){
      state.albums.push(album)
    }
  },
  actions: {
    getAlbums({commit}){
      axios.get('https://api.jamendo.com/v3.0/albums/?client_id=105e2031').then ((response) => {
      commit('GET_ALBUMS', response.data.results)
      })
    },
    getAlbum({commit}, id){
      axios.get(`https://api.jamendo.com/v3.0/playlists/file/?client_id=105e2031${id}`).then((response) =>{
        commit('GET_ALBUM', response.data.results)
      })
    }
  },
  modules: {
  }
})
