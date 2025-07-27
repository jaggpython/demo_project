<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToItemPage = () => {
    router.push('/item_page');
};

const goToAbout = () => {
    router.push('/about_us');
};

const goToProducts = () => {
    router.push('/products');
};

const goToContact = () => {
    router.push('/contact_us');
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
            <div class="col-6 col-md-4 col-lg-3 mb-4" v-for="i in 8" :key="i">
                <div class="card h-100" @click="goToItemPage" style="cursor: pointer;">
                    <img src="/images/shilajit.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Test</p>
                        <p>Price:</p>
                        <div class="d-flex flex-column flex-sm-row gap-2">
                            <!-- BUY NOW -->
                            <button class="btn btn-primary w-100" @click.stop="goToBuyNow">
                                BUY NOW
                            </button>
                            <!-- ADD TO CART -->
                            <button class="btn btn-outline-success w-100" @click.stop="addToCart">
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
                    preserving and sharing the profound knowledge of traditional medicines passed down through
                    generations.
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
                                <li class="mb-3"><a href="#" class="text-dark text-decoration-none">Home</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="text-dark text-decoration-none"
                                        @click="goToAbout">About Us</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="text-dark text-decoration-none"
                                        @click="goToProducts">Products</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="text-dark text-decoration-none"
                                        @click="goToContact">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Products Column -->
                        <div class="col-6 col-md-3 mb-3">
                            <h5 class="fw-bold">Products</h5>
                            <ul class="list-unstyled">
                                <li class="mb-3">Thandra Ortho Pain Relief Oil</li>
                                <li class="mb-3">Thandra Anti Acid Powder</li>
                                <li class="mb-3">Thandra Anti Obesity Powder</li>
                            </ul>
                        </div>

                        <!-- Contact Column -->
                        <div class="col-12 col-md-3">
                            <h5 class="fw-bold">Contact Us</h5>

                            <!-- Phone -->
                            <p class="mb-3">
                                <i class="bi bi-telephone-fill text-success me-2"></i>
                                +91 7488985349, +91 8105755470
                            </p>

                            <!-- Email -->
                            <p class="mb-3">
                                <i class="bi bi-envelope-fill text-success me-2"></i>
                                <a href="mailto:thandraayur.usha@gmail.com" class="text-decoration-none text-dark">
                                    thandraayur.usha@gmail.com
                                </a>
                            </p>

                            <!-- Address with location icon -->
                            <p class="mb-1 address-block">
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

.move-filter {
    position: relative;
    bottom: -50px;
}

.selected-items {
    position: relative;
    top: 45px;
}

.card img {
    object-fit: cover;
    height: 200px;
    border-radius: 8px;
}

.card {
    position: relative;
    top: 45px;
}

.why-thandra {
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

.logos {
    position: relative;
    top: 30px;
    gap: 2rem;
    flex-wrap: wrap;
}

.under-line {
    width: 100%;
    height: 4px;
    background-color: #0f0303ec;
    border: none;
    margin: 10px auto;
}

.footer-page {
    position: relative;
    top: 80px;
}

.about-container {
    display: flex;
    flex-direction: row;
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

.address-block {
    padding-left: 25px;
    position: relative;
}

.address-block i {
    position: absolute;
    left: 0;
    top: 3px;
}

/* ============================= */
/* RESPONSIVE STYLES */
/* ============================= */

/* For tablets and below */
@media (max-width: 992px) {
    .card img {
        height: 180px;
    }
    .about-text h4 {
        font-size: 1.5rem;
    }
    .about-text p {
        font-size: 0.95rem;
    }
    .logo-img {
        width: 130px;
        height: 70px;
    }
}

/* For mobile */
@media (max-width: 768px) {
    .move-filter {
        bottom: 0;
        
    }
    /* .custom-select {
        width: 100%;
        max-width: 300px;
        margin: auto;
    } */
    .selected-items {
        top: 10px;
    }
    .card {
        top: 20px;
    }
    .about-container {
        flex-direction: column;
        text-align: center;
    }
    .about-text,
    .about-image {
        width: 100%;
    }
    .footer-page {
        top: 40px;
    }
}

/* For small mobile screens */
@media (max-width: 576px) {
    .logo-img {
        height: 60px;
        width: 110px;
    }
    .logos {
        gap: 1rem;
    }
    .card img {
        height: 160px;
    }
    .about-text h4 {
        font-size: 1.3rem;
    }
    .about-text p {
        font-size: 0.9rem;
    }
    footer h5 {
        font-size: 1rem;
    }
    footer p, footer li {
        font-size: 0.9rem;
    }
}
</style>


