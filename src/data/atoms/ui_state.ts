import { atom } from "jotai";
import { VIEWS } from "../constants";

export type View = (typeof VIEWS)[number];
export const view_jotai = atom<View>(null);

export type Dialog = "cancel" | "continue" | null;
export const dialog_jotai = atom<Dialog>(null);
