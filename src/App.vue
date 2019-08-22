<template>
  <!DOCTYPE html>
  <!--
  This is a starter template page. Use this page to start your new project from
  scratch. This page gets rid of all links and provides the needed markup only.
  -->
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="x-ua-compatible" content="ie=edge">        
      <title>Admin Panel</title>

  </head>
  <body class="hold-transition sidebar-mini sidebar-collapse">
  <div class="wrapper" id="app">
  
      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand bg-secondary navbar-light border-bottom">
          <!-- Left navbar links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa fa-bars"></i></a>
            </li>
          </ul>
  
          <!-- SEARCH FORM -->
              <div class="input-group input-group-sm">
                  <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                  <div class="input-group-append">
                      <button class="btn btn-navbar">
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
              </div>
      </nav>
      <!-- /.navbar -->
  
      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <!-- Brand Logo -->
          <router-link to="./dashboard" class="brand-link bg-secondary">
            <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
              <span class="brand-text font-weight-light">group A</span>
          </router-link>
  
          <!-- Sidebar -->
          <div class="sidebar">
              <!-- Sidebar user panel (optional) -->
              <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                  <img src="../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                  <a href="#" class="d-block">Sagar Humagain</a>
                </div>
              </div>

              <!-- Sidebar Menu -->
              <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      <!-- Add icons to the links using the .nav-icon class
                           with font-awesome or any other icon font library -->
                      <li class="nav-item">
                          <router-link  to="./dashboard" class="nav-link">
                            <i class="nav-icon  fas fa-tachometer-alt"></i>
                            <p>
                                  Dashboard
                              </p>
                          </router-link>
                      </li>
                      
                      <li class="nav-item">
                          <router-link to="./profile" class="nav-link">
                              <i class="nav-icon  fas fa fa-user"></i>
                              <p>
                                  Profile
                              </p>
                          </router-link>
                      </li>
                      <li class="nav-item">
                            <router-link to="./uploadfile" class="nav-link">
                                <i class="nav-icon  fas fa-upload"></i>
                                <p>
                                    Upload File
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                                <router-link to="./test" class="nav-link">
                                    <i class="nav-icon  fas fa-upload"></i>
                                    <p>
                                        Upload File
                                    </p>
                                </router-link>
                            </li>
                        
                      <li class="nav-item">
                          <a class="nav-link" href=""
                             onclick="event.preventDefault();
                                                       document.getElementById('logout-form').submit();">
                              <i class="nav-icon red fa fa-power-off"></i>
                              <p>
                                  Logout
                              </p>
                          </a>
  
                          <form id="logout-form" action="logout" method="POST" style="display: none;">
                          </form>
                      </li>
                  </ul>
              </nav>
              <!-- /.sidebar-menu -->
          </div>
          <!-- /.sidebar -->
      </aside>
  
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
  
          <!-- Main content -->
          <div class="content">
              <div class="container-fluid">
                  <router-view></router-view>

              </div><!-- /.container-fluid -->
          </div>
          <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
  
  
      <!-- Main Footer -->
      
  </div>
  </body>
  </html>
  
</template>
 <!-- Styles -->
 <style>
  html, body {
      background-color: #fff;
      color: #636b6f;
      font-family: 'Nunito', sans-serif;
      font-weight: 200;
      height: 100vh;
      margin: 0;
  }

  .full-height {
      height: 100vh;
  }

  .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
  }

  .position-ref {
      position: relative;
  }

  .top-right {
      position: absolute;
      right: 10px;
      top: 18px;
  }

  .content {
      text-align: center;
  }

  .title {
      font-size: 84px;
  }

  .links > a {
      color: #636b6f;
      padding: 0 25px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
  }

  .m-b-md {
      margin-bottom: 30px;
  }
</style>

<script>
export default {
  name: 'app',
}
</script>

