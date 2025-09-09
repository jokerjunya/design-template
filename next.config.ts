import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // SVGRの設定
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            ext: 'tsx',
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'removeDimensions',
              ],
            },
            replaceAttrValues: {
              '#000': 'currentColor',
              '#000000': 'currentColor',
              'black': 'currentColor',
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
