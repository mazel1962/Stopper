<template>
  <div id="nav" class="container">
      <nav class="navbar navbar-expand-lg bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand text-white" href="#">Stopper</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li class="nav-item active text-white">
                          <router-link to="/"><p class="text-white">Racing</p></router-link>
                      </li>
                      <li class="nav-item text-white">
                          <router-link to="/about"><p class="text-white">Discount</p></router-link>
                      </li>
                      <li class="nav-item text-white">
                          <router-link to="/management"><p class="text-white">Management</p></router-link>
                      </li>
                  </ul>
            </div>
      </nav>
  </div>
    <router-view/>
  
</template>




