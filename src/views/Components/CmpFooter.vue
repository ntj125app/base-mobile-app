<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
    <div
        class="sticky top-screen right-0 left-0 p-1 bg-sky-700 w-full flex flex-row"
    >
        <div
            class="flex flex-row w-full mt-auto mb-auto ml-5 mr-auto text-white"
        >
            &copy; {{ year }} Base Developer Name
        </div>
    </div>
</template>
