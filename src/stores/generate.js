import { defineStore } from "pinia";
import axios from "axios";

export const useGenerateStore = defineStore("generate-store", {
  state: () => ({
    error: "",
    pending: false,
    reccords: null,
    responseStatus: false,
  }),
  actions: {
    async genearteRecords(start_date) {
      this.pending = true;
      try {
        const res = await axios.get(
          `https://xsrr-l2ye-dpbj.f2.xano.io/api:oUvfVMO5/receive_week?start_date=${start_date}`
        );
        this.reccords = res.data;
        console.log(this.reccords);
        this.pending = false;
        console.log(res);
      } catch (error) {
        this.pending = false;
        console.log(error);
      }
    },
  },
  persist: true,
});
