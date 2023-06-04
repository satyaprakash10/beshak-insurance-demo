<template>
  <div
    class="px-4 py-6 bg-white border-t-4 border-indigo-500 shadow-lg rounded-t-xl md:px-5 md:rounded-tl-none md:rounded-r-md md:mt-1"
  >
    <div>
      <BaseXIcon
        class="absolute w-5 h-5 text-gray-900 cursor-pointer right-4 hover:text-indigo-500"
        @click="closeContainer"
      />
    </div>

    <h4 class="font-bold text-[20px] text-dark-gray leading-[24px]">
      You’re just steps away...
    </h4>

    <p class="mt-2 text-sm font-normal text-dark-gray">
      ... to get the best recommendations for your term insurance
    </p>

    <ul class="mt-4">
      <li
        class="flex items-center justify-between py-4 text-sm font-normal line-through border-b cursor-pointer text-dark-gray border-extra-light hover:text-indigo-500"
      >
        Select an insurance type
        <div>
          <BaseCheckMarkCircleIcon
            class="flex items-end justify-end w-5 text-indigo-500 transition-all duration-500 ease-in cursor-pointer hover:bg-indigo-500 hover:rounded-full hover:text-white"
          />
        </div>
      </li>
      <li
        class="flex items-center justify-between py-4 text-sm font-bold border-b cursor-pointer text-dark-gray border-extra-light hover:text-indigo-500"
      >
        Get detailed report
        <div class="">
          <button
            class="text-sm cursor-pointer hover:shadow-lg hover:bg-indigo-500 hover:text-white bg-transparent transition-all duration-500 ease-in font-semibold text-indigo-500 border border-indigo-500 rounded-lg border-primary-500 px-2 py-1.5"
          >
            Go
          </button>
        </div>
      </li>
      <li
        class="py-4 text-sm font-normal border-b cursor-pointer text-dark-gray border-extra-light hover:text-indigo-500"
      >
        Compare insurance plans
      </li>
      <li
        class="pt-4 text-sm font-normal cursor-pointer text-dark-gray hover:text-indigo-500"
      >
        Choose an advisor
      </li>
    </ul>
  </div>
</template>

<script>
import BaseCheckMarkCircleIcon from "./icons/BaseCheckMarkCircleIcon.vue";
import BaseXIcon from "./icons/BaseXIcon.vue";
export default {
  components: {
    BaseXIcon,
    BaseCheckMarkCircleIcon,
  },

  data() {
    return {};
  },

  methods: {
    closeContainer() {
      this.$emit("on-close", true);
    },
  },
};
</script>

<style scoped>
.beshak-insurance-hero-bg {
  background-image: url("./public/beshak-insurance-hero-banner.png");
}

.banner-bg {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}
</style>
