<template>
  <div class="buy-now-page">
    <h1 class="page-heading">Buy Now</h1>

    <!-- Product Details -->
    <div class="buy-item">
      <div class="buy-image">
        <img :src="item.image" :alt="item.name" />
      </div>
      <div class="buy-details">
        <h2 class="item-title">{{ item.name }}</h2>
        <p class="item-description">{{ item.description }}</p>
        <p class="item-price">₹ {{ item.price }}</p>

        <!-- Quantity Selector -->
        <div class="quantity-section">
          <label>Quantity:</label>
          <button @click="decreaseQuantity" class="qty-btn">–</button>
          <span class="quantity-value">{{ quantity }}</span>
          <button @click="increaseQuantity" class="qty-btn">+</button>
        </div>
      </div>
    </div>

    <!-- Price Details -->
    <div class="price-details">
      <h3>PRICE DETAILS</h3>
      <div class="price-row">
        <span>Price ({{ quantity }} item)</span>
        <span>₹ {{ totalPrice }}</span>
      </div>
      <div class="price-row discount">
        <span>Discount</span>
        <span>- ₹ {{ totalDiscount }}</span>
      </div>
      <div class="price-row">
        <span>Protect Promise Fee</span>
        <span>₹ {{ protectFee }}</span>
      </div>
      <hr />
      <div class="price-row total">
        <span>Total Amount</span>
        <span>₹ {{ finalAmount }}</span>
      </div>
      <hr />
      <p class="save-text">
        You will save ₹ {{ totalPrice - finalAmount }} on this order
      </p>

      <!-- Place Order Button -->
      <button class="btn-place-order" @click="placeOrder">Place Order</button>
      <!-- Go Back Button -->
      <button class="btn-go-back" @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => router.push('/');

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const item = ref<Item>({
  id: 1,
  name: 'Premium Shilajit Resin',
  description:
    'Shilajit is a natural mineral resin packed with 85+ minerals, vitamins, and fulvic acid.',
  price: 2499,
  image: '/images/shilajit.jpg',
});

const quantity = ref<number>(1);
const protectFee = ref<number>(9);
const discountRate = ref<number>(0.3);

const totalPrice = computed(() => item.value.price * quantity.value);
const totalDiscount = computed(() => Math.floor(totalPrice.value * discountRate.value));
const finalAmount = computed(() => totalPrice.value - totalDiscount.value + protectFee.value);

const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const placeOrder = () => {
  alert(`Order placed for ${quantity.value} x ${item.value.name} at ₹ ${finalAmount.value}!`);
};
</script>


<style scoped>
.buy-now-page {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.page-heading {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.buy-item {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.buy-image img {
  max-width: 350px;
  border-radius: 10px;
}

.buy-details {
  flex: 1;
}

.item-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.item-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

.item-price {
  font-size: 20px;
  color: #e63946;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Quantity */
.quantity-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.qty-btn {
  background: #e9c46a;
  border: none;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
}

/* Price Details */
.price-details {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.price-details h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.price-row.discount {
  color: green;
}

.price-row.total {
  font-size: 18px;
  font-weight: bold;
}

.save-text {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.btn-place-order {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #2a9d8f;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-place-order:hover {
  background: #21867a;
}

@media (max-width: 768px) {
  .buy-item {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .buy-image img {
    max-width: 100%;
  }
}

.btn-go-back {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #6c757d;
  border-radius: 8px;
  background: #fff;
  color: #6c757d;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-go-back:hover {
  background: #f0f0f0;
}
</style>
