const URL = "http://localhost:8080";

Vue.createApp({
  data(){
    return {
      page: 1,
      car: {
        name: "",
        exterior: "",
        interior: "",
        price: "",
        mileage: "",
        transmission: "",
        drive: "",
        make: "",
        status: "In Stock",
        url: "",
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
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(this.car),
        };
        let response = await fetch(`${URL}/cars`, requestOptions);
  
        if (response.ok) {
          await this.getCarList();
          this.car = {
            name: "",
            exterior: "",
            interior: "",
            price: "",
            mileage: "",
            transmission: "",
            drive: "",
            make: "",
            status: "In Stock",
            url: "",
          };
        } else {
          alert('Error adding car');
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