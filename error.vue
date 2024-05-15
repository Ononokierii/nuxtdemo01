<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb-4">Opps {{ error.statusCode }}</h1>
      <h2>
        {{ error.message }}
      </h2>
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: Object,
});
</script>
