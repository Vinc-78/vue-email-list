Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    urlAPI: "https://flynn.boolean.careers/exercises/api/random/mail",
    arrayEmail: [],

    
    pandingCall: 0,
    


  },

  methods: {

    generaEmail() {

      this.pandingCall= 0,
      
      this.arrayEmail = [];

      
      for (let i = 0; i < 10; i++) {

        axios.get(this.urlAPI).then((ajaxResponse) => {

          const rispostaServer = ajaxResponse.data;

          this.arrayEmail.push(rispostaServer.response);

          this.pandingCall++

        })

        
      }

      console.log(this.arrayEmail)

    },

    

  }

});




