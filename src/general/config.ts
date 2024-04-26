import { env } from "process";

interface Config {
    interfaceUrl : string
}

export const config : Config = {
    interfaceUrl : env.INTERFACEURL || "",

}