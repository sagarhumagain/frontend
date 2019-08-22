<template>
  <form class="md-form mt-5 mb-5" @submit.prevent="sendFile" enctype="multipart/form-data">
    <div>
            <div class="file-field">
              <div class="btn btn-primary mt-5">
                <label>  
                  <input class="file-input" type="file" ref="file" @onchange="selectFile">
                  <span><i class="fas fa-upload"></i></span>
                </label>
              </div>
            </div>
       
      </div>
      <button class="mt-5 mb-5 btn btn-secondary btn-lg">Upload</button>

  </form>
</template>


<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        file: "",
      }
    },
    methods:{
      selectFile(){
        this.file = this.$refs.file.files[0];
      },
      async sendFile(){
        const formData = new FormData();
        formData.append('file', this.file);
        try{
         await axios.post('/upload', formData)
        }
        catch(err) {
          console.log(err);
        }
      }
    }
  }
</script>