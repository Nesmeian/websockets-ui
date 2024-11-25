import { resolve } from 'node:path';
import process from 'node:process';
import __dirname from 'path'
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  target: 'node',
  mode: isProduction ? 'production' : 'development',
  entry: resolve(__dirname, 'src', 'app.ts'),
  output: {
    clean: true,
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: { extensions: ['.ts', '.js'] },
};

export default config;