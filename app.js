const app = Vue.createApp({
  data(){
    return{
      images: [
      'https://picsum.photos/600/200',
      'https://picsum.photos/600/200',
      'https://picsum.photos/600/200'],
      
      selectedImage: null,
  
      name: '',
      age: 20,
    };
  },

  methods: {
      Age(){
        return this.age + 5;
      },
      randomNum(){
        const randomNumber = Math.random();
        if(randomNumber >0 && randomNumber <1){
          return randomNumber;
        }
      },
      randomItem (items) {
        return items[Math.floor(Math.random()*items.length)];
      }
      },
      created() {
        this.selectedImage = this.randomItem(this.images)
      },
})
app.mount('#assignment');

