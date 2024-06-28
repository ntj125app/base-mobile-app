import "@/ts/bootstrap";
import "@/ts/scss";

import { createApp, App } from "vue";
import { createPinia, Pinia } from "pinia";
const pinia: Pinia = createPinia();
import PrimeVue from "primevue/config";
import PrimeTailwind from "./presets/custom";

import { IonicVue } from "@ionic/vue";

/** Vue router needed for navigation menu */
import router from "./AppRouter";
import BaseApp from "./BaseApp.vue";

/** Primevue Globals */
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";

// Mount Application Instances
const MainApp: App<Element> = createApp(BaseApp)
    .use(IonicVue)
    .use(router)
    .use(pinia)
    .use(PrimeVue, {
        unstyled: true,
        pt: PrimeTailwind,
        ptOptions: { mergeProps: true },
    })
    .use(DialogService)
    .use(ToastService)
    .directive("tooltip", Tooltip);

/** Global Composenent / Page Registration */
import CmpAppSet from "@/views/Components/CmpAppSet.vue";
MainApp.component("CmpAppSet", CmpAppSet);

router.isReady().then(() => {
    MainApp.mount("#app");
});
