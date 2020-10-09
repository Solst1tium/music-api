<template>
  <v-container>
    <h1>Explora la música loly</h1>
    <v-row>
      <v-col v-for="album in albums"  :key="album.id" cols="6" md="4"   class="d-flex child-flex">
        <v-img :src="album.image" aspect-ratio="1" class="grey lighten-2">             
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn  class="mx-2 mt-3" fab dark small color="teal" v-bind="attrs" v-on="on">
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
    computed: {
    ...mapState(['albums', 'album'])
  },
  methods: {
    ...mapActions (['getAlbums', 'getAlbum'])
  },
  created() {
    this.getAlbums()
  },
  addAlbum(){
    
  }

}
</script>

<style>

</style>