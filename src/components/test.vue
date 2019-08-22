<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Your Fils</h3>

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
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.email}}</td>
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
                    <form  @submit.prevent="createFile()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name"
                                       placeholder="Full Name"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email"
                                       placeholder="Email Address"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
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
            createUser(){
                this.$Progress.start(); //start a progress bar
                this.form.post('api/user/') // POST form data
                //Start Condition to check form is validate
                    .then(()=>{
                        Fire.$emit('AfterCreate'); //custom event to reload data

                        $("#addNewFile").modal('hide'); //Hide the model

                        //Sweetalert notification for the result
                        Toast.fire({
                            type: 'success',
                            title: 'User Created Successfully'
                        })

                        this.$Progress.finish(); //End the progress bar
                    })
                    //if form is not valid of handle any errors
                    .catch(()=>{
                        swal.fire(
                            'Error!',
                            'Something Went Wrong.',
                            'warning'
                        )
                        this.$Progress.fail(); //End the progress bar
                    })

            },
            /*==== End of User Create ====*/
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
                        this.form.delete('api/user/' + id).then(() => {
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
                    axios.get("api/user").then(({ data }) => (this.users = data, this.totaluser = data.total));
            }
            /*==== End of existing User ====*/

        },
        created() {    
            this.loadUsers(); //load the user in the table

            //Load the userlist if add or created a new user
            Fire.$on("AfterCreate",()=>{
                this.loadUsers();
            })


            //setInterval(() => this.loadUsers(),3000);
        }
    }
</script>
