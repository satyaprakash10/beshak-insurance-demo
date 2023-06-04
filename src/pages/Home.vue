<template>
  <div
    class="relative w-full h-screen bg-top bg-no-repeat bg-contain beshak-insurance-hero-bg"
  >
    <div v-click-outside="onClickOutside">
      <!-- Card Container -->
      <div class="relative">
        <div
          @click="onClickOutside"
          class="fixed top-0 z-10 w-screen h-screen bg-black bg-dark-500 backdrop-blur md:hidden"
          v-show="!isBannerView"
        ></div>
        <div
          class="fixed bottom-0 right-0 z-20 w-auto h-auto transition-all duration-150 md:w-[330px] md:translate-y-0 md:left-0 md:top-1/4 md:bottom-auto"
          :class="
            !isBannerView
              ? 'md:translate-x-0 translate-y-0 '
              : 'md:-translate-x-full translate-y-full'
          "
        >
          <BaseContainer
            @on-close="(val) => (isBannerView = val)"
            class="relative z-20"
          />
        </div>
      </div>

      <!-- Banner Step -->
      <div
        class="fixed right-0 z-50 transition-all duration-150 top-[18%] md:top-1/3 md:left-0"
        :class="
          isBannerView
            ? ' translate-x-0'
            : 'md:-translate-x-full translate-x-full'
        "
      >
        <BaseBanner @click="isBannerView = !isBannerView" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBanner from "../components/BaseBanner.vue";
import BaseContainer from "../components/BaseContainer.vue";

export default {
  components: {
    BaseBanner,
    BaseContainer,
  },

  data() {
    return {
      isBannerView: true,
    };
  },
  methods: {
    onClickOutside(event) {
      this.isBannerView = true;
    },
  },
};
</script>

<style scoped>
.beshak-insurance-hero-bg {
  background-image: url("/beshak-insurance-hero-banner.png");
}
@media (max-width: 767px) {
  .beshak-insurance-hero-bg {
    background-image: url("/mobile-screen.png");
  }
}
</style>
