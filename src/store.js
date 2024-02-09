import { reaactive } from "vue";
export const store = reaactive({
  searchText: "",
  loading: true,
});
