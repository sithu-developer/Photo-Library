import { env } from "process";

interface Config {
    interfaceUrl : string
    apiBaseUrl : string
    spaceEndpoint : string;
    spaceAccessKeyId : string;
    spaceSecretAccessKey : string;
}

export const config : Config = {
    interfaceUrl : process.env.INTERFACEURL || "",
    apiBaseUrl : process.env.NEXT_PUBLIC_API_BASE_URL || "",
    spaceEndpoint : process.env.SPACE_ENDPOINT || "",
    spaceAccessKeyId : process.env.SPACE_ACCESS_KEY_ID || "",
    spaceSecretAccessKey : process.env.SPACE_SECRET_ACCESS_KEY || "",
}