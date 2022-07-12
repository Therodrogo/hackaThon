<template>
  <v-app>
    <v-main>
      <div >
        <v-row>
            <v-col>
        <v-container class="fluid target">
          <v-row>
            <h1>{{ title }}</h1>
          </v-row>
          <v-row class="date"> Publicado el {{ date }}</v-row>

          <v-row>
            <v-img class="imageView"
              :src="imageUrl"
                height="30vh"
            ></v-img>
          </v-row>

          <v-row> {{ description }}</v-row>
        </v-container>
        </v-col>
        <v-col cols= "3" md="3">
        <v-container class="others">
            <h3>Otras publicaciones</h3>

            <v-row dense>
        <v-col
          v-for="post in selectedPosts"
          :key="post.title"
          :flex = "12"
        >
          <v-card class= "cards" to ="loginWindow" @click="change()">
            <v-img
              :src="post.imageUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="post.title"></v-card-title>
            </v-img>

          </v-card>
        </v-col>
      </v-row>



        </v-container>
        </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import API from '~/api'
export default {
  data: () => ({
    post: undefined,
    allPosts: [],
    selectedPosts : [],
    date: '',
    description: undefined,
    imageUrl: '',
    title: undefined,

  }),
  methods: {
    async getData() {
      const id = '62bd096b61f11be4645b8d5b'
      let post = await API.getPostByID(id);
      let allPost = await API.getAllPosts();
      this.allPosts = allPost.data;
      this.post = post.data;
      this.parsePost();
      this.selectPost();
    },

    async parsePost() {
      this.title = this.post.title;
      this.description = this.post.description;
      let dateNoParse = this.post.date;
      for (let i = 0; i < 10; i++) {
        this.date = this.date + dateNoParse[i];
      }
      this.imageUrl = this.post.imageUrl;
    },

    async selectPost(){
        let randomIndex = []
        for (let i = 0; i<4; i++){
            let index =this.getRandomInt(0,this.allPosts.length)
            if (index in randomIndex){
                i--;
            }else{
                randomIndex.push(index);
            }
        }

        for (let i = 0; i<randomIndex.length; i++){
            let value = randomIndex[i].result;
            this.selectedPosts.push(this.allPosts[i]);
        }
        console.log(this.selectedPosts);


    },

    async getRandomInt(mini, maxi) {
        let min = Math.ceil(mini);
        let max = Math.floor(maxi);
        return Math.floor(Math.random() * (max - min) + min);
    },

    async change(){
        console.log("change");
        
    }
    
  },
  beforeMount() {
    this.getData()
  },
}
</script>

<style>

.date{
    font-size: 14px;
}

.target{
    padding: 3% 5%;
}
.imageView{
    margin-top: 1%;
    margin-bottom: 1%;
}


.others{
    padding: 10% 10%;
}

.cards{
    margin-top: 1%;
    margin-bottom: 1%;
}
</style>
