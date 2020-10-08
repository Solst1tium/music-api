<template>
  <v-parallax dark src="https://images.unsplash.com/photo-1557682250-33bd709cbe85" height="100vh">
    <v-container>
      <v-row>
        <v-col cols="5" md="4">
          <div class="texto">
            <h1 style="font-size:89px;">RETOMA EL RITMO</h1>
            <h4 class="mb-12">Sigue disfrutando de la musica que estabas escuchando justo donde la dejaste</h4>
              <v-btn rounded color="success">
                Abrir reproductor web
              </v-btn>              
          </div>
        </v-col>      
        <v-col  cols="7" md="8">
          <v-row>
            <v-col v-for="album in albums"  :key="album.id" cols="6" md="4"   class="d-flex child-flex">
              <v-img :src="album.image"  
                aspect-ratio="1"
                class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>      
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
import { mapState, mapActions } from "vuex";
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState(['albums', 'album'])
  },
  methods: {
    ...mapActions (['getAlbums'])
  },
  created() {
    this.getAlbums()
  },
}
</script>
<style scoped>
.texto {
  position: fixed;
  width: 400px;
  height: 200px;
  left: 10%;
  top: 40%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>