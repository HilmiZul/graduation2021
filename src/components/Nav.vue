<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/9/9e/Logo_SMK_Negeri_4_Tasikmalaya.png"
            alt="logo"
            class="logo"
          />
          <span class="mx-3 prototype">SMK Negeri 4 Tasikmalaya</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">HOME</router-link>
            <router-link class="nav-link" to="/about">ABOUT</router-link>
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
