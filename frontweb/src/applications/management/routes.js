import Authenticate from "./views/Authenticate.vue";
import Management from "./views/Management.vue";

import Welcome from "./views/Welcome.vue";

export default [
  {
    path: "/authenticate",
    component: Authenticate,
    name: "authenticate",
  },
  {
    path: "/cms/",
    component: Management,
    children: [{ path: "", name: "welcome", components: { main: Welcome } }],
  },
];
