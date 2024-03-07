import { create } from "zustand";

export const useCounterStore = create(()=>({
    count: 10,
}))