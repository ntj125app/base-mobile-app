<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "@/AppState";

import TieredMenu from "primevue/tieredmenu";

import CmpPusherState from "./CmpPusherState.vue";

const main = useMainStore();
const { browserSuppport, menuItems } = storeToRefs(main);

const menu = ref<TieredMenu>();

const toggleMenu = (event: Event) => {
    if (menu.value !== undefined) {
        menu.value.toggle(event);
    }
};

onBeforeMount(() => {
    main.init();
});
</script>

<template>
    <div class="header-container">
        <div class="bg-base-300 py-3 px-5 flex flex-row">
            <div class="flex flex-row w-full">
                <button class="btn" @click.prevent="toggleMenu">
                    <i class="pi pi-bars m-1" />
                    <span class="m-1">Menu</span>
                </button>
                <TieredMenu ref="menu" :model="menuItems" :popup="true" />
            </div>

            <div class="flex justify-end w-full">
                <div class="flex justify-end w-full my-auto">
                    <CmpPusherState v-if="browserSuppport" />
                    <button
                        v-if="!browserSuppport"
                        class="btn btn-sm btn-error"
                    >
                        <i class="pi pi-times m-1" />
                        <span class="m-1">Browser Unsupported</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
