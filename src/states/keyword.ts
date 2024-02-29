import { create } from "zustand";

type KeywordStore = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const useKeywordStore = create<KeywordStore>((set) => ({
  keyword: "",
  setKeyword: (keyword: string) => set({ keyword }),
}));
