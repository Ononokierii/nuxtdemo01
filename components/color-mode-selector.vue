<template>
  <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showLabel">
      Change to {{ nextMode }}
    </div>
    <button
      @click="toggleColorMode"
      @mouseenter="showLabel = true"
      @mouseleave="showLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup>
const showLabel = ref(false);

const modes = ["system", "dark", "light"];
const moedIcons = {
  system: "🌓",
  dark: "🌙",
  light: "☀️",
};

const colorMode = useColorMode();

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  return modes[nextModeIndex];
});
const nextModeIcon = computed(() => moedIcons[nextMode.value]);

const toggleColorMode = () => (colorMode.preference = nextMode.value);
</script>
