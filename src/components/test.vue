<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Your Files</h3>

                        <div class="card-tools">
                            <button type="" class="btn btn-primary" @click="newModal"><i class="fas fa-upload fa-fw"></i> Add new file</button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tbody><tr>
                                <th>S.N.</th>
                                <th>Name</th>
                                <th>size</th>
                                <th>hash</th>
                            </tr>
                            <tr v-for="(file, index) in files.data" :key="file.id">
                                <td>{{index+1}}</td>
                                <td>{{file.name}}</td>
                                <td>{{file.size}}</td>
                                <td>{{file.hash}}</td>
                                <td>
                                    <a href="#" @click="downloadfile(file.id)" class="btn btn-sm btn-danger">download
                                        <i class="fa fa-download"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
                <!-- /.card -->
            </div>

        </div>
        <!-- Modal -->
        <div class="modal fade" id="addNewFile" tabindex="-1" role="dialog" aria-labelledby="addNewFileLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewFileLabel">Add New file</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form  @submit.prevent="sendFile()">
                        <div class="modal-body">
                                <div class="file-field">
                                        <div class="btn btn-primary mt-5">
                                          <label>  
                                            <input class="file-input" type="file" ref="file" @onchange="selectFile">
                                            <span><i class="fas fa-upload"></i></span>
                                          </label>
                                        </div>
                                      </div>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close</button>
                            <button type="submit" class="btn btn-primary"><i class="fas fa-plus fa-fw"></i>update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";
window.swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;
    export default {
        /*Filling the data into form*/
        data(){
            return{
                totalfiles:0,
                files : {},
                form: new Form({
                    id:'',
                    name :'',
                    size :'',
                    hash:'',
                    
                })
            }
        },
        methods: {
            /*===== Call add new user modal ====*/
            newModal(){
                this.form.reset();
                $('#addNewFile').modal('show');
            },
            /*Create User Function Starts*/
            selectFile(){
                 this.file = this.$refs.file.files[0];
               },
               async sendFile(){
        const formData = new FormData();
        formData.append('file', this.file);
        try{
         await axios.post('api/upload', formData)
        }
        catch(err) {
          console.log(err);
        }
      },
            /*==== Call Delete Modal uith user id ====*/
            downloadfile(id){
                swal.fire({
                    title: 'Download!',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, download it!'
                }).then((result) => {
                    //send an ajax request to the server
                    if (result.value) {
                        this.form.delete('api/upload/' + id).then(() => {
                            swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            Fire.$emit('AfterCreate'); //Fire an reload event
                        }).catch(() => {
                            swal.fire(
                                'Warning!',
                                'Unauthorized Access to download.',
                                'warning'
                            )
                        })
                    }

                })
            },
            /*==== End of Delete Modal ====*/

            /*==== Start of Show existing User function ====*/
            loadUsers(){
                    axios.get("api/upload").then(({ data }) => (this.users = data, this.totaluser = data.total));
            }
            /*==== End of existing User ====*/

        },
        created() {    
            this.loadUsers(); //load the user in the table

            //Load the userlist if add or created a new user
            Fire.$on("AfterCreate",()=>{
                this.loadfiles();
            })


            //setInterval(() => this.loadUsers(),3000);
        }
    }
</script>
