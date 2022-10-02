<script setup>
import { ref } from 'vue';
const headerLinks = ref([
  { title: 'Về chúng tôi', link: '#' },
  { title: 'Tại sao bạn nên chọn chúng tôi', link: '#' },
  { title: 'Các dịch vụ', link: '#' },
  { title: 'Liên hệ', link: '#' },
]);
</script>
<template>
  <header class="">
    <div class="container py-4">
      <ul class="font-light flex items-center md:gap-6 lg:gap-12">
        <li>
          <a href="#" class="inline-block p-1 bg-yellow-900">
            <img src="/assets/imgs/logo.png" alt="Image" class="w-20 h-20" />
          </a>
        </li>
        <li v-for="item in headerLinks">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
</style>