import { preload } from "@/data/constants"

export const handleWindow = (action: "minimize" | "maximize" | "close" | "hide") => {
   preload.winControl(action)
}