import { OpenNextConfig } from "open-next/types/open-next.js";

const config: OpenNextConfig = {
  default: {
    // minify: true,
    // placement: 'global',
    // runtime: 'edge',
    debug: true,
    // override: {
    //   wrapper: 'cloudflare',
    //   converter: 'edge',
    // },
  },
  // functions: {
  //   edge: {
  //     runtime: 'edge',
  //     routes: ['app/api/testEdge/route'],
  //     patterns: ['api/testEdge'],
  //     override: {
  //       wrapper: 'cloudflare',
  //       converter: 'edge',
  //     },
  //   },
  // },
  // This middleware part is necessary to make it work
  middleware: {
    external: true,
    debug: true,
    override: {
      wrapper: "cloudflare",
      converter: "edge",
    },
  },
};

export default config;
