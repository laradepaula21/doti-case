import { create } from 'zustand'

const useStore = create((set) => ({
  value: '',
  setValue: () => set((state) => ({ count: state.count + 1 })),
}))


