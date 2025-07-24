<template>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
/>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100 p-3">
  <div class="container-fluid">
    <img src="/images/logo.png" alt="">
    <a class="navbar-brand" href="#">Thandra Ayurusha</a>

    <!-- Toggle button for mobile -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

      <!-- Right side elements -->
      <div class="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
        <!-- Search Form -->
        <form class="d-flex w-100" @submit.prevent="onSearch">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            v-model="searchQuery"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <!-- Cart Icon -->
        <a href="/cart_item" class="btn btn-outline-primary position-relative">
          <i class="bi bi-cart"></i>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            3
          </span>
        </a>

        <!-- Login Button -->
        <a href="/login" class="btn btn-primary">Login</a>
      </div>
    </div>
  </div>
</nav>


<div id="carouselExampleDark" class="carousel carousel-dark slide move-up custom-carousel" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/images/vu.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Thandra Ayurusha India pvt ltd.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/images/vue1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-blockd-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/vue.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const searchQuery = ref<string>('');

    const onSearch = (): void => {
      alert(`Search for: ${searchQuery.value}`);
    };

    return {
      searchQuery,
      onSearch
    };
  }
});
</script>

<style scoped>
nav.navbar {
  width: 100%;
}

/* .custom-carousel {
  width: 100%; 
  height: 550px;   
  overflow: hidden;    
} */

.custom-carousel {
  width: 100%;
  max-height: 550px;
  overflow: hidden;
}

/* Make images responsive inside carousel */
.custom-carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Optional: Adjust height for mobile view */
@media (max-width: 576px) {
  .custom-carousel {
    max-height: 300px;
  }

  .carousel-caption {
    font-size: 0.9rem;
    bottom: 10px;
  }

  .carousel-caption h5 {
    font-size: 1rem;
  }
}

.navbar img {
  height: 50px; /* Adjust the image height as needed */
  object-fit: contain;
}



</style>
