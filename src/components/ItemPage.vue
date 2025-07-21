<template>
  <div class="item-page">
    <!-- Product Image -->
    <div class="item-image">
      <img :src="item.image" :alt="item.name" />
    </div>

    <!-- Product Details -->
    <div class="item-details">
      <h1 class="item-title">{{ item.name }}</h1>
      <p class="item-description">{{ item.description }}</p>
      <p class="item-price">₹ {{ item.price }}</p>

      <!-- Quantity Selector -->
      <div class="quantity-section">
        <label>Quantity:</label>
        <button @click="decreaseQuantity" class="qty-btn">–</button>
        <span class="quantity-value">{{ quantity }}</span>
        <button @click="increaseQuantity" class="qty-btn">+</button>
      </div>

      <!-- Add to Cart & Buy Now Buttons -->
      <div class="action-buttons">
        <button class="btn-add-cart" @click="addToCart">Add to Cart</button>
        <button class="btn-buy-now" @click="buyNow">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default defineComponent({
  name: 'ItemPage',
  setup() {
    const item = ref<Item>({
      id: 1,
      name: 'Premium Shilajit Resin',
      description:
        'Shilajit is a natural mineral resin packed with 85+ minerals, vitamins, and fulvic acid, known for its health benefits.',
      price: 2499,
      image: '/images/shilajit.jpg',
    });

    const quantity = ref<number>(1);

    const increaseQuantity = (): void => {
      quantity.value++;
    };

    const decreaseQuantity = (): void => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const addToCart = (): void => {
      alert(`${item.value.name} (x${quantity.value}) added to cart!`);
      // Integrate with Pinia/Vuex store to add item to cart
    };

    const buyNow = (): void => {
      alert(`Buying ${item.value.name} (x${quantity.value}) now!`);
      // Redirect to checkout page or handle buy now logic
    };

    return {
      item,
      quantity,
      increaseQuantity,
      decreaseQuantity,
      addToCart,
      buyNow,
    };
  },
});
</script>

<style scoped>
.item-page {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Image Section */
.item-image img {
  max-width: 400px;
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
}

/* Details Section */
.item-details {
  flex: 1;
  min-width: 280px;
}

.item-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
}

.item-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

.item-price {
  font-size: 22px;
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

.qty-btn:hover {
  background: #d4a83e;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
}

.btn-add-cart {
  background: #2a9d8f;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-add-cart:hover {
  background: #21867a;
}

.btn-buy-now {
  background: #e76f51;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-buy-now:hover {
  background: #c15038;
}

@media (max-width: 768px) {
  .item-page {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .item-image img {
    max-width: 100%;
  }

  .action-buttons {
    justify-content: center;
  }
}
</style>
