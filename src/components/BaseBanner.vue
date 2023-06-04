<template>
  <div
    class="flex flex-col items-center justify-center w-24 h-32 transition-all duration-500 cursor-pointer "
  >
    <div
      class="px-[18px] py-3 h-full flex flex-col items-center justify-center rounded-l-lg banner-bg shadow-md hover:shadow-xl hover:bg-opacity-50 md:rounded-l-none md:rounded-r-lg bg-primary-indigo"
    >
      <BaseLoader />

      <h6 class="font-semibold mt-2 text-[13px] w-auto text-center text-white leading-[16px]">
        What do I do next?
      </h6>
    </div>
  </div>
</template>

<script>
import BaseLoader from "./icons/BaseLoader.vue";
export default {
  components: {
    BaseLoader,
  },


  data() {
    return {
      isToggle: true
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.banner-bg {
  /* background: #8b6fff; */
}
</style>
