Vue.createApp({
  data(){
    return {
      page: 1,
      car: {
        name: "",
        exColor: "",
        inColor: "",
        price: "",
        mileage: "",
        transmission: "",
        driveType: "",
        make: ""
      },
      carList: [],

    }

  },
  methods: {
    togglePage: function(page){
      this.page = page
    },
    addCar: async function(page){
      
    },

  },
  created: function(){
    console.log("vue app loaded");
  }

}).mount("#app");