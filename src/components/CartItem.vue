<template>

  <div class="cart-page">
    <!-- Cart Heading -->
    <h1 class="cart-heading">Your Cart</h1>

    <!-- If Cart is Empty -->
    <div v-if="cartItems.length === 0" class="empty-cart-section">
      <p class="empty-message">Your cart is empty.</p>
      <p class="fill-message">Fill it with our products.</p>
      <a href="/" class="shop-link">Shop Now</a>
    </div>

    <!-- If Cart Has Items -->
    <div v-else class="cart-content">
      <!-- Cart Items Section -->
      <div class="cart-item-container">
        <div 
          class="cart-item" 
          v-for="(item, index) in cartItems" 
          :key="item.id"
        >
          <!-- Left Side Image -->
          <div class="cart-image">
            <img :src="item.image" :alt="item.name" />
          </div>

          <!-- Right Side Description -->
          <div class="cart-details">
            <h2 class="product-title">{{ item.name }}</h2>
            <p class="product-description">{{ item.description }}</p>
            <p class="product-price">₹ {{ item.price }}</p>

            <!-- Quantity Selector -->
            <div class="quantity-section">
              <label>Quantity:</label>
              <button @click="decreaseQuantity(index)" class="qty-btn">–</button>
              <span class="quantity-value">{{ item.quantity }}</span>
              <button @click="increaseQuantity(index)" class="qty-btn">+</button>
            </div>

            <!-- Remove Button -->
            <button class="remove-btn" @click="removeItem(index)">Remove</button>
          </div>
        </div>
      </div>

      <!-- Price Details Section -->
      <div class="price-details">
        <h3>PRICE DETAILS</h3>
        <div class="price-row">
          <span>Price ({{ totalItems }} items)</span>
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
        <button 
          class="btn-place-order" 
          :disabled="cartItems.length === 0"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export default defineComponent({
  name: 'CartPage',
  setup() {
    const protectFee = ref<number>(9);
    const discountRate = ref<number>(0.3); // 30% discount

    const cartItems = ref<CartItem[]>([
      {
        id: 1,
        name: "Premium Shilajit Resin",
        description:
          "Shilajit is a natural mineral resin packed with 85+ minerals, vitamins, and fulvic acid.",
        price: 2499,
        quantity: 1,
        image: "/images/shilajit.jpg",
      },
      {
        id: 2,
        name: "Organic Honey",
        description:
          "Pure organic honey sourced from Himalayan forests, rich in antioxidants.",
        price: 999,
        quantity: 2,
        image: "/images/honey.jpg",
      },
    ]);

    const totalItems = computed(() => 
      cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
    );

    const totalPrice = computed(() => 
      cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    const totalDiscount = computed(() => 
      Math.floor(totalPrice.value * discountRate.value)
    );

    const finalAmount = computed(() => 
      cartItems.value.length > 0
        ? totalPrice.value - totalDiscount.value + protectFee.value
        : 0
    );

    const increaseQuantity = (index: number): void => {
      cartItems.value[index].quantity++;
    };

    const decreaseQuantity = (index: number): void => {
      if (cartItems.value[index].quantity > 1) {
        cartItems.value[index].quantity--;
      }
    };

    const removeItem = (index: number): void => {
      cartItems.value.splice(index, 1);
    };

    return {
      cartItems,
      protectFee,
      totalItems,
      totalPrice,
      totalDiscount,
      finalAmount,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
    };
  },
});
</script>

<style scoped>
/* (Same styles as the previous version) */
.cart-page {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

/* Heading */
.cart-heading {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Empty Cart Section */
.empty-cart-section {
  text-align: center;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.empty-message {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.fill-message {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.shop-link {
  background: #2a9d8f;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;
}

.shop-link:hover {
  background: #21867a;
}

/* Cart Content */
.cart-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

/* Cart Items */
.cart-item-container {
  flex: 1;
  min-width: 300px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.cart-image img {
  max-width: 200px;
  border-radius: 10px;
}

.cart-details {
  flex: 1;
}

.product-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px;
  color: #e63946;
  font-weight: bold;
  margin-bottom: 15px;
}

.quantity-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.qty-btn {
  background: #e9c46a;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
}

.remove-btn {
  background: #ff6b6b;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.remove-btn:hover {
  background: #e63946;
}

/* Price Details */
.price-details {
  flex: 0 0 300px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
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

.btn-place-order:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-place-order:hover:enabled {
  background: #21867a;
}

@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }
  .price-details {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
