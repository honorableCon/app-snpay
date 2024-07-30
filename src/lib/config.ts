import { randomUUID } from "crypto";

export const getConfig = (key: string): string => {
  const environment: string = process.env?.ENVIRONMENT || "development";
  const config: string = CONFIGS[environment][key];

  return config;
};

const CONFIGS: any = {
  development: {
    appId: "app.saleor.senpay.test",
    name: "Senpay.test",
  },
  production: {
    appId: "senpay.saleor.app",
    name: "Senpay",
  },
};
