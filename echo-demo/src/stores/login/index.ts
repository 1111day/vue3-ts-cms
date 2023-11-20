import { defineStore } from "pinia";
import { LoginAction } from "@/service/login/login";
import { localCache } from "@/utils/cache";
import router from "@/router";
const useLoginStore = defineStore("login", {
  state: () => {
    return {
      LoginFormData: {},
    };
  },
  actions: {
    async LoginActionFn(fromData: any) {
      const LoginData = await LoginAction(fromData);
      router.push("/main");
    },
  },
});

export default useLoginStore;
