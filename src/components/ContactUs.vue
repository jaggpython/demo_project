<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { reactive } from 'vue';

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();

const activeTab = ref('about');
const isMenuOpen = ref(false); // State for mobile menu toggle

const form = reactive({
    name: '',
    phone: '',
    email: '',
    message: ''
});

function handleSubmit() {
    console.log('Form submitted:', form);
    // Add your API call or logic here
}

onMounted(() => {
    if (route.path.includes('/products')) {
        activeTab.value = 'products';
    } else if (route.path.includes('/contact_us')) {
        activeTab.value = 'contact';
    } else if (route.path.includes('/about_us')) {
        activeTab.value = 'about';
    } else {
        activeTab.value = 'home';
    }
});

function setActive(tab: string, path: string) {
    activeTab.value = tab;
    isMenuOpen.value = false; // close menu on click
    router.push(path);
}

function changeLanguage(lang: string) {
    locale.value = lang;
}

const goToHome = () => {
    router.push('/');
}

const goToProducts = () => {
    router.push('/products');
};

const goToAbout = () => {
    router.push('/about_us')
}

const currentLocale = computed(() => locale.value);
</script>

<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

    <div class="contact-us-page">
        <!-- Top Bar -->
        <div class="top-bar d-flex justify-content-between px-3 py-3">
            <span>📞 080-69454448</span>
            <div class="lang-switch">
                <span :class="{ active: currentLocale === 'en' }" @click="changeLanguage('en')">English</span> |
                <span :class="{ active: currentLocale === 'kn' }" @click="changeLanguage('kn')">Kannada</span>
            </div>
        </div>

        <!-- Navbar -->
        <nav class="custom-navbar">
            <div class="container d-flex align-items-center justify-content-between">
                <!-- Logo -->
                <div class="navbar-logo">
                    <img src="/images/logo.png" alt="Thandra Logo" class="logo">
                </div>

                <!-- Hamburger Icon -->
                <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <!-- Navigation Links -->
                <ul class="nav-links" :class="{ 'open': isMenuOpen }">
                    <li class="nav-item" :class="{ active: activeTab === 'home' }" @click="setActive('home', '/')">
                        <a>{{ $t('home') }}</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeTab === 'about' }"
                        @click="setActive('about', '/about_us')">
                        <a>{{ $t('about_us') }}</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeTab === 'products' }"
                        @click="setActive('products', '/products')">
                        <a>{{ $t('products') }}</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeTab === 'contact' }"
                        @click="setActive('contact_us', '/contact_us')">
                        <a>{{ $t('contact_us') }}</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
            <h2>{{ $t('contact_us') }}</h2>
        </div>

        <!-- content -->
        <div class="contact-section container my-5">
            <div class="contact-card row">
                <!-- Left Content -->
                <div class="col-md-6 contact-info p-4">
                    <h4 class="fw-bold">{{ $t('contact_us_title') }}</h4>
                    <p class="text-muted mt-4">
                        {{ $t('contact_us_content') }}
                    </p>

                    <div class="mt-4">
                        <p class="mb-2 fw-semibold">{{ $t('company_name') }}</p>
                        <p class="address-block">
                            <i class="bi bi-geo-alt-fill text-success me-2"></i>
                            #45 Yanadahalli Hutur (Hobli), <br>
                            Kolar - 563101, Karnataka, India
                        </p>
                        <p>
                            <i class="bi bi-envelope-fill text-success me-2"></i>
                            <a href="mailto:thandraayur.usha@gmail.com" class="text-decoration-none text-dark">
                                thandraayur.usha@gmail.com
                            </a>
                        </p>
                        <p>
                            <i class="bi bi-telephone-fill text-success me-2"></i>
                            080-69454448
                        </p>
                    </div>
                </div>

                <!-- Right Form -->
                <div class="col-md-6 contact-form p-4">
                    <form @submit.prevent="handleSubmit">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Name" v-model="form.name" required />
                        </div>
                        <div class="mb-3 d-flex gap-2">
                            <input type="text" class="form-control" placeholder="Phone number" v-model="form.phone"
                                required />
                            <input type="email" class="form-control" placeholder="Email" v-model="form.email"
                                required />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4" placeholder="Message"
                                v-model="form.message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success px-4">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <!-- Footer -->
    <div class="footer-page">
        <hr class="under-line" />
        <footer class="footer-bg py-4">
            <div class="container">
                <div class="row text-start align-items-start">
                    <div class="col-12 col-md-3 text-center mb-3 mb-md-0">
                        <img src="/images/logo.png" alt="Thandra Logo" style="max-width: 150px;">
                    </div>
                    <div class="col-6 col-md-3 mb-3">
                        <h5 class="fw-bold">Quick Links</h5>
                        <ul class="list-unstyled">
                            <li class="mb-3"><a href="#" class="text-dark text-decoration-none"
                                    @click="goToHome">Home</a></li>
                            <li class="mb-3"><a href="#" class="text-dark text-decoration-none" 
                                    @click="goToAbout">About Us</a></li>
                            <li class="mb-3"><a href="#" class="text-dark text-decoration-none"
                                    @click="goToProducts">Products</a></li>
                            <li class="mb-3"><a href="#" class="text-dark text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-3 mb-3">
                        <h5 class="fw-bold">Products</h5>
                        <ul class="list-unstyled">
                            <li class="mb-3">Thandra Ortho Pain Relief Oil</li>
                            <li class="mb-3">Thandra Anti Acid Powder</li>
                            <li class="mb-3">Thandra Anti Obesity Powder</li>
                        </ul>
                    </div>
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
</template>

<style scoped>
/* Top Bar */
.top-bar {
    background-color: #e5e5e5;
    font-size: 14px;
    color: #000;
}

/* Navbar */
.custom-navbar {
    padding: 12px 0;
    border-bottom: 2px solid #4caf50;
}

.custom-navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.logo {
    max-width: 100px;
}

/* Navigation Links */
.nav-links {
    list-style: none;
    display: flex;
    gap: 100px;
    margin: 0;
    padding: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
}

.nav-links li {
    display: flex;
    align-items: center;
    position: relative;
}

/* Active Tab */
.nav-links .active a {
    color: #4caf50;
    border-bottom: 2px solid #4caf50;
    padding-bottom: 3px;
}

/* Default link style */
.nav-links a {
    text-decoration: none;
    color: #222;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 0;
    position: relative;
}

/* Hover underline animation */
.nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #4caf50;
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

/* Hamburger Icon */
.hamburger {
    display: none;
    /* Show only on mobile */
    flex-direction: column;
    cursor: pointer;
    border: 2px solid orange;
    padding: 6px;
    border-radius: 6px;
    margin-left: auto;
    /* Push hamburger to the far right */
}

.hamburger span {
    height: 3px;
    width: 22px;
    background: #333;
    margin: 4px 0;
    border-radius: 2px;
}

/* Ensure hamburger shows on mobile */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    /* Make sure nav-links collapse properly */
    .custom-navbar .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
}


/* Hero Section */
.hero-section {
    background: linear-gradient(to right, #4caf50, #6cc24a);
    padding: 30px 0;
    color: white;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    padding-left: 6%;
}


/* Language Switch */
.lang-switch span {
    cursor: pointer;
    padding: 0 5px;
    transition: color 0.3s;
}

.lang-switch .active {
    font-weight: bold;
    color: #4caf50;
    text-decoration: underline;
}

/* Footer */
/* .footer-bg {
    background-color: #f4fbe8;
} */

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-links {
        flex-direction: column;
        gap: 20px;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
    }

    .nav-links.open {
        max-height: 300px;
        opacity: 1;
    }

    .custom-navbar .container {
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-section {
        font-size: 20px;
        padding-left: 20px;
        text-align: center;
        justify-content: center;
    }

    .footer-page .row {
        text-align: center;
    }
}

.address-block {
    padding-left: 25px;
    /* Indent text after the icon */
    position: relative;
}

.address-block i {
    position: absolute;
    left: 0;
    top: 3px;
    /* Adjust vertical alignment */
}

.contact-card {
    border: 2px solid #ccc;
    border-radius: 10px;
}

.contact-info {
    border-right: 1px solid #ccc;
}

@media (max-width: 768px) {
    .contact-info {
        border-right: none;
        border-bottom: 1px solid #ccc;
    }
}
</style>
