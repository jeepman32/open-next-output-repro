/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "open-next-output-repro",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
      providers: {
        cloudflare: true,
      },
    };
  },
  async run() {
    new sst.cloudflare.Nextjs("MyWeb", {
      openNextVersion: "snapshot",
    });
  },
});
