import { env } from "process";

interface Config {
    interfaceUrl : string
    apiBaseUrl : string
}

export const config : Config = {
    interfaceUrl : process.env.INTERFACEURL || "",
    apiBaseUrl : process.env.NEXT_PUBLIC_API_BASE_URL || "",
}