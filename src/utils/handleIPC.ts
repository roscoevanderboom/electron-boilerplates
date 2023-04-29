import { preload } from "@/data/constants"

export const handleWindow = (action: "minimize" | "maximize" | "close" | "hide") => {
   preload.winControl(action)
}

export const handleWindowbarMenu = (action: "reload" | "devTools" | "exit") => {
    preload.winMenu(action)
}