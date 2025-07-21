<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToItemPage = () => {
  router.push('/item_page');
};

const goToBuyNow = () => {
  router.push('/buy_now');
};

const addToCart = () => {
  alert('Item added to cart!');
  // Add cart logic here (e.g., using Pinia/Vuex)
};
</script>


<template>
  <div class="container py-4">
    <!-- Filter Section -->
    <div class="move-filter mb-4">
      <h5 class="mb-2">SELECT CONCERN:</h5>
      <select class="form-select custom-select w-200" aria-label="Custom select">
        <option selected>Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>

    <!-- Selected Items Section -->
    <div class="selected-items mb-4">
      <h3>Selected Items</h3>
    </div>

    <!-- Cards Section -->
   <div class="cards row">
    <div
      class="col-6 col-md-4 col-lg-3 mb-4"
      v-for="i in 8"
      :key="i"
    >
      <div
        class="card h-100"
        @click="goToItemPage"
        style="cursor: pointer;"
      >
        <img src="/images/shilajit.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Test</p>
          <p>Price:</p>
          <div class="d-flex flex-column flex-sm-row gap-2">
            <!-- BUY NOW -->
            <button
              class="btn btn-primary w-100"
              @click.stop="goToBuyNow"
            >
              BUY NOW
            </button>
            <!-- ADD TO CART -->
            <button
              class="btn btn-outline-success w-100"
              @click.stop="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Divider Line -->
    <hr class="cards-underline" />
    <hr>

<div class="about-container">
  <div class="about-text">
    <h4>About Us</h4>
    <p>
      Thandra, is a destination where the ancient wisdom of traditional Indian Ayurvedic medicine 
      comes to life. Our roots trace back to a family with a rich heritage in the practice of these 
      time-honed remedies. Founded by the Pandith Munesh Gowda a descendant of a humble former 
      family living in the village Yanadahalli of the Kolar district, Thandra is dedicated to 
      preserving and sharing the profound knowledge of traditional medicines passed down through generations.
    </p>
  </div>
  <div class="about-image">
    <img src="/images/td.jpg" alt="About Thandra">
  </div>
</div>

<hr>

    <!-- Why Thandra Section -->
    <div class="why-thandra mt-4">
  <h3>Why Thandra</h3>
  <p>
    At Thandra, we set a new standard for traditional Indian Ayurvedic medicine.
    Our commitment to your well-being goes beyond tradition; it’s embedded in every aspect of our brand.
  </p>
  <div class="logos d-flex justify-content-center align-items-center gap-4 mt-3 flex-wrap">
    <img src="/images/lg.jpg" alt="Logo 1" class="logo-img">
    <img src="/images/lg1.jpg" alt="Logo 2" class="logo-img">
    <img src="/images/lg2.jpg" alt="Logo 3" class="logo-img">
  </div>
</div>


<div class="footer-page">
    <hr class="under-line" />
    <footer class="bg-light-green py-4">
  <div class="container">
    <div class="row text-start align-items-start">
      
      <!-- Logo Column -->
      <div class="col-12 col-md-3 text-center mb-3 mb-md-0">
        <img src="/images/thandra_lg.jpg" alt="Thandra Logo" style="max-width: 150px;">
      </div>

      <!-- Quick Links Column -->
      <div class="col-6 col-md-3 mb-3">
        <h5 class="fw-bold">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-dark text-decoration-none">Home</a></li>
          <li><a href="#" class="text-dark text-decoration-none">About Us</a></li>
          <li><a href="#" class="text-dark text-decoration-none">Products</a></li>
          <li><a href="#" class="text-dark text-decoration-none">Contact Us</a></li>
        </ul>
      </div>

      <!-- Products Column -->
      <div class="col-6 col-md-3 mb-3">
        <h5 class="fw-bold">Products</h5>
        <ul class="list-unstyled">
          <li>Thandra Ortho Pain Relief Oil</li>
          <li>Thandra Anti Acid Powder</li>
          <li>Thandra Anti Obesity Powder</li>
        </ul>
      </div>

      <!-- Contact Column -->
      <div class="col-12 col-md-3">
        <h5 class="fw-bold">Contact Us</h5>
        <p class="mb-1"><i class="bi bi-telephone-fill text-success me-2"></i>080-69454448</p>
        <p class="mb-1"><i class="bi bi-envelope-fill text-success me-2"></i>thandraayur.usha@gmail.com</p>
        <p class="mb-1">
          <i class="bi bi-geo-alt-fill text-success me-2"></i>
          Thandra Ayurusha India Pvt. Ltd.<br>
          #45 Yanadhalli Hutur (Hobli)<br>
          Kolar - 563101, Karnataka, India
        </p>
      </div>
    </div>
  </div>
</footer>

</div>

  </div>
</template>


<style scoped>

.custom-select {
  width: 180px;
}

.move-filter{
    position: relative;
    bottom: -50px;

}

.selected-items{
  position: relative;
  top: 45px;
  padding: 0 15px;
  right:15px;
}

.card img {
  object-fit: cover;
  height: 200px;
}

.card{
    position: relative;
    top: 45px;
}

.why-thandra{
    text-align: center;
    position: relative;
    top: 20px;
}

.cards-underline {
  border: none;
  height: 0px;
  background-color: #e0e0e0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.selected-items h3 {
  font-weight: bold;
}

.why-thandra p {
  font-size: 1rem;
  color: #444;
}


.logo-img {
  height: 80px;
  width: 150px;
  object-fit: contain;
}

/* Responsive adjustments for mobile view */
@media (max-width: 576px) {
  .logo-img {
    height: 60px;
    width: 120px;
  }

  .logos {
    gap: 1rem; /* slightly smaller gap on mobile */
  }
}
.logos {
    position: relative;
    top: 30px;
}

.under-line {
    width: 100%;           /* Make the line longer */
    height: 4px;          /* Make the line thicker */
    background-color: #0f0303ec;  /* Set line color */
    border: none;         /* Remove default border */
    margin: 10px auto;    /* Center the line with spacing */
}

.footer-page{
    position: relative;
    top: 80px;
}

.about-container {
  display: flex;
  flex-direction: row;        /* Text left, image right on larger screens */
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
}

.about-text,
.about-image {
  width: 50%;
}

.about-text h4 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.about-text p {
  line-height: 1.6;
  font-size: 1rem;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Responsive for Mobile */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;   /* Stack text & image vertically */
    text-align: center;
  }
  
  .about-text,
  .about-image {
    width: 100%;              /* Full width on mobile */
  }
}
</style>
