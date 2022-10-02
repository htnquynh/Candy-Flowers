<script setup>
import { ref } from 'vue';
const reasons = ref([
  { text: 'Hoa tươi được nhập hàng liên tục từ các vườn hoa', image: '/assets/imgs/banner-image-1.jpg' },
  { text: 'Hoa tươi được bảo quản và chăm sóc tỉ mỹ', image: '/assets/imgs/banner-image-1.jpg' },
  { text: 'Hoa tươi được lựa chọn kỹ càng theo yêu cầu', image: '/assets/imgs/banner-image-1.jpg' },
]);
</script>

<template>
  <div>
    <div class="container py-16">
      <div class="space-y-16">
        <div class="text-center space-y-4">
          <h3 class="text-xl font-serif">Tại sao bạn nên chọn</h3>
          <h1 class="text-5xl font-serif relative z-2 inline-block px-2 text-rose-600">
            Candy Flowers & Garden
            <span class="absolute -z-1 left-0 -bottom-1 block w-full h-6 bg-yellow-50"></span>
          </h1>
        </div>
        <div>
          <div class="flex justify-between gap-12">
            <div v-for="item in reasons" class="max-w-60 text-center space-y-4">
              <img :src="item.image" alt="image" class="rounded-full" />
              <h4 class="text-lg font-medium">{{ item.text }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>