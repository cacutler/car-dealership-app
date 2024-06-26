const URL = "http://localhost:8080/cars";

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
    getCarList: async function(){
      let response = await fetch(URL)
      let data = await response.json();
      this.carList = data
    }
    // addCar: async function(page){
      
    // },

  },
  created: function(){
    console.log("vue app loaded");
    this.getCarList();
  }

}).mount("#app");