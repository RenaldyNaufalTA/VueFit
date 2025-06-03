<script setup></script>
<template>
  <section id="welcome" class="flex flex-col items-center justify-center">
    <div
      class="z-20 flex md:flex-row flex-col items-center justify-center gap-4 md:m-10"
    >
      <div
        class="relative z-10 flex flex-col items-center justify-center bg-[#F8F8F9] shadow-lg md:w-1/2 w-10/12 p-8 rounded-lg shadow-3xl"
      >
        <h2 class="text-3xl font-extrabold uppercase text-center">
          <span class="text-[#ff9900] animate-pulse">Siapkan Diri</span>
          untuk perubahan signifikan dalam
          <span class="text-[#ff9900]">12 minggu</span>.
        </h2>
        <div class="mt-4 text-center">
          <p class="text-lg italic">
            Dengan mengikuti rencana latihan yang sederhana namun efektif ini,
            Anda akan dapat:
          </p>
          <ul class="list-disc space-y-1 mt-3 text-left">
            <li class="flex items-center">✅ Meningkatkan kebugaran tubuh</li>
            <li class="flex items-center">✅ Meningkatkan kemampuan Anda</li>
            <li class="flex items-center">✅ Meningkatkan masa otot</li>
            <li class="flex items-center">✅ Meningkatkan kepercayaan diri</li>
          </ul>
        </div>
        <div class="mt-4 text-center">
          <h3 class="text-lg font-bold">Rencana Latihan</h3>
          <p class="text-base">
            Rencana latihan ini mengikuti struktur yang dikenal sebagai
            <strong class="text-[#ff9900] underline">Bro split</strong>
          </p>
          <h5 class="text-base font-semibold mt-2">
            <i class="text-[#ff9900]"
              >Push &rarr; Pull &rarr; Legs &rarr; Repeat</i
            >
          </h5>
        </div>
      </div>
      <div
        class="bg-[#F8F8F9] shadow-lg md:w-1/2 w-10/12 p-8 rounded-lg shadow-3xl"
      >
        <h3 class="text-lg font-bold text-[#ff9900] animate-pulse">
          🔥 Tantangan Anda
        </h3>
        <p>Selesaikan semua latihan dan lacak kemajuan Anda sepanjang jalan!</p>
        <p class="mb-3">Apakah Anda menerima?</p>
        <button>
          <router-link
            to="/dashboard"
            class="neo focus:neo-pressed mt-3 bg-[#2d2d2d] text-white"
            >Lanjut &rarr;</router-link
          >
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.bg-img {
  background: url("../../assets/img/gym.jpg") no-repeat center center;
  background-size: auto;
  height: 100vh;
}
</style>
