import { reactive } from "vue";
export const store = reactive({
  searchText: "",
  loading: true,
  yuCards: [],
  archeTypeArr: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0",
  apiUrlAll: " https://db.ygoprodeck.com/api/v7/cardinfo.php",
});
