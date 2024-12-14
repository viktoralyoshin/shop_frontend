import { IUser } from "@/types/user.types";
import { create } from "zustand";

interface IAuthStore {
  authenticated: boolean;
  setAuthentication: (val: boolean) => void;
  user: any;
  setUser: (user: any) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  authenticated: false,
  user: {},
  setAuthentication: (val) => set((state) => ({ authenticated: val })),
  setUser: (user) => set({ user }),
}));
