<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-3">
                <router-link to="./uploadfile">
                    <div class="info-box">
                        <span class="info-box-icon bg-light elevation-1"><i class="fas fa-upload indigo nav-icon"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">file upload</span>
                            <span class="info-box-number">Go To Page
                                <small><i class="fas fa-chevron-right"></i></small>
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <router-link to="./profile">
                <div class="info-box">
                    <span class="info-box-icon bg-light elevation-1"><i class="fas fa-user indigo nav-icon"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">profile</span>
                        <span class="info-box-number">Go To Page
                            <small><i class="fas fa-chevron-right"></i></small>
                        </span>
                    </div>
                </div>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
