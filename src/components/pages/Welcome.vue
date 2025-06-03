<script setup></script>
<template>
  <section id="welcome" class="flex flex-col items-center justify-center">
    <div
      class="z-20 flex md:flex-row flex-col items-center justify-center gap-4 mt-10"
    >
      <div class="bg-[#F8F8F9] md:w-1/2 w-full p-6 rounded-lg shadow-2xl">
        <h2 class="text-2xl font-bold uppercase">
          Selesaikan program ini <br />
          jika Anda ingin....
        </h2>
        <div class="mt-2">
          <p>✅ Ikuti program yang sederhana dengan hasil yang terbukti.</p>
          <p>✅ Dapatkan rencana latihan lengkap untuk 12 minggu.</p>
          <p>✅ Dapatkan tubuh yang sehat, kuat, dan sangat bugar.</p>
          <p>✅ Pelajari lebih lanjut tentang gym, pelatihan, dan teknik.</p>
        </div>
        <div class="mt-2">
          <h3 class="text-lg font-bold">Rencana Latihan</h3>
          <p>
            Rencana latihan ini mengikuti struktur yang dikenal <br />
            sebagai
            <strong>Bro split</strong>
          </p>
          <h5 class="text-base font-semibold mt-2">
            <i>Dorong &rarr; Tarik &rarr; Kaki &rarr; Ulangi</i>
          </h5>
        </div>
      </div>
      <div class="bg-[#F8F8F9] p-4 md:w-1/2 w-3/4 shadow-2xl rounded-lg">
        <h3 class="text-base font-bold">🔥 Tantangan Anda</h3>
        <p>Selesaikan semua latihan dan lacak kemajuan Anda sepanjang jalan!</p>
        <p>Apakah Anda menerima?</p>
        <button class="neo focus:neo-pressed mt-3 bg-[#2d2d2d] text-white">
          Lanjut &rarr;
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
