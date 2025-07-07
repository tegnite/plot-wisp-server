import * as process from "node:process";

const ENV_KEYS = ['MONGO_URI', 'DB_NAME', 'JWT_SECRET'] as const;
export type ENV_KEYS_TYPE = typeof ENV_KEYS[number];

export function get_env(key : ENV_KEYS_TYPE) : string {
    const value = process.env[key];
    if(!value) throw new Error(`Environment key ${key} is not defined in the environment variables(.env)`);
    return value;
}
