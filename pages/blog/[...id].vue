<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-700 prose-pre:text-gray-700 dark:prose-pre:text-white max-w-none"
  >
    <ContentDoc>
      <template #not-found>
        <div class="text-center">
          <h1 class="text-4xl font-bold">404</h1>
          <p>Not found</p>
        </div>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div
            :class="{
              'col-span-6 md:col-span-4': doc.toc,
              'col-span-6': !doc.toc,
            }"
          >
            <ContentRenderer :value="doc" />
          </div>
          <div class="not-prose hidden md:col-span-2 md:block" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Toc</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null);
onMounted(() => {
  let elements = [];

  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  setTimeout(() => {
    elements = document.querySelectorAll("h2, h3");
    for (const element of elements) {
      observer.observe(element);
    }
  }, 150);

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
