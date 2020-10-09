<template>
  <v-container>
    <h1>Explora la música loly</h1>
    <v-row>
      <v-col v-for="album in albums"  :key="album.id" cols="6" md="4"   class="d-flex child-flex">
        <v-img :src="album.image" aspect-ratio="1" class="grey lighten-2">             
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn  class="mx-2 mt-3" fab dark small color="teal" v-bind="attrs" v-on="on" @click="addPlaylist(album)">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Agregar</span>
          </v-tooltip>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>     
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selectedAlbum: {
        id: "",
        name: "",
        releasedate: "",
        artist_id: "",
        artist_name: "",
        image: "",
        zip: "",
        shorturl: "",
        shareurl: ""
      }
    }
  },
    computed: {
    ...mapState(['albums', 'album','currentAlbum']),

   /*currentAlbum: {
      get(){
        return this.$store.state.currentAlbum
      },
      set(newValue){
        return this.$store.dispatch('setCurrentAlbum', newValue)
      }      
    }, */

  },
  methods: {
    ...mapActions (['getAlbums', 'getAlbum','addAlbum']),

     async addPlaylist(album){
        this.selectedAlbum.id = album.id,
        this.selectedAlbum.name = album.name,
        this.selectedAlbum.releasedate = album.releasedate,
        this.selectedAlbum.artist_id = album.artist_id
        this.selectedAlbum.artist_name = album.artist_name,
        this.selectedAlbum.image = album.image,
        this.selectedAlbum.zip = album.zip,
        this.selectedAlbum.shorturl = album.shorturl,
        this.selectedAlbum.shareurl = album.shareurl
        console.log(this.selectedAlbum)  
        await this.addAlbum(this.selectedAlbum)    
        this.limpiarAlbum()     
        console.log("DESPUES DE LIMPIAR",this.selectedAlbum)
          
    },
    limpiarAlbum(){
        this.selectedAlbum.id = "",
        this.selectedAlbum.name =  "",
        this.selectedAlbum.releasedate =  "",
        this.selectedAlbum.artist_id =  "",
        this.selectedAlbum.artist_name =  "",
        this.selectedAlbum.image =  "",
        this.selectedAlbum.zip =  "",
        this.selectedAlbum.shorturl =  "",
        this.selectedAlbum.shareurl =  ""       
    }

  },
  created() {
    this.getAlbums()
  },
}
</script>

<style>

</style>