const URL = "http://localhost:8080";

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
      let response = await fetch(`${URL}/cars`)
      let data = await response.json();
      this.carList = data
    },
    addCar: async function(){
      try{
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        let encodedData = "name=" + encodeURIComponent(this.car.name) + 
        "exterior=" + encodeURIComponent(this.car.exColor) + 
        "exterior=" + encodeURIComponent(this.car.exColor) +
        "interior=" + encodeURIComponent(this.car.inColor) +
        "price=" + encodeURIComponent(this.car.price) +
        "mileage=" + encodeURIComponent(this.car.mileage) +
        "transmission=" + encodeURIComponent(this.car.transmission) +
        "drive=" + encodeURIComponent(this.car.driveType) +
        "make=" + encodeURIComponent(this.car.make) +
        "status=" + encodeURIComponent("in stock");

        let requestOptions = {
          
          method: 'POST',
          body: encodedData,
          headers: myHeaders, 

        }
        let response = await fetch(`${URL}/cars`, requestOptions);
  
        if (response.ok) {
          await this.getCarList();
          this.car = {
            name: "",
            exColor: "",
            inColor: "",
            price: "",
            mileage: "",
            transmission: "",
            driveType: "",
            make: ""
          };
        } else {
          alert('Error adding company');
        }
        

      }
      catch(error){

        console.error('Error fetching company:', error);
      }
      
    },

  },
  created: function(){
    console.log("vue app loaded");
    this.getCarList();
  }

}).mount("#app");