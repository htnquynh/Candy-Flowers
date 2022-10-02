<template>
  <div>
    <div class="container py-16">
      <div class="space-y-16">
        <div class="flex items-baseline gap-2">
          <h3 class="text-2xl font-serif">Các dịch vụ tại</h3>
          <h1 class="text-4xl font-serif relative z-2 inline-block px-2 text-rose-600">
            Candy Flowers & Garden
            <span class="absolute -z-1 left-0 -bottom-1 block w-full h-6 bg-yellow-50"></span>
          </h1>
        </div>
        <div class="space-y-16">
          <div class="space-y-8">
            <h3 class="text-xl font-medium">Thiết kế hoa tươi cho sự kiện, tiệc cưới
            </h3>
            <div class="flex gap-8">
              <div class="flex-1" v-for="item in 4">
                <img src="/assets/imgs/aboutus-image-1.jpg" alt="Image" class="" />
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <h3 class="text-xl font-medium">Pre-wedding
            </h3>
            <div class="flex gap-8">
              <div class="flex-1" v-for="item in 4">
                <img src="/assets/imgs/aboutus-image-1.jpg" alt="Image" class="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>