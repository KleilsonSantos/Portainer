// 📦 webpack.config.js
import fs from 'fs'; // 📂 Manipulação de arquivos
import dotenv from 'dotenv'; // 🌐 Carrega variáveis de ambiente
import path from 'path'; // 🗂️ Manipulação de caminhos
import webpack from 'webpack'; // 🧰 Plugins Webpack
import HtmlWebpackPlugin from 'html-webpack-plugin'; // 🌐 Gera o index.html
import { fileURLToPath } from 'url'; // 🔗 Suporte para ES Modules
import { CleanWebpackPlugin } from 'clean-webpack-plugin'; // 🧹 Limpa a pasta dist

// 🌍 Carrega variáveis de ambiente do .env
dotenv.config();

// 📍 Resolvendo __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // 🚪 Pontos de entrada do app
  entry: {
    main: './src/index.js', // 🎬 Entrada principal
    ...(fs.existsSync('./src/vendor.js') && { vendor: './src/vendor.js' }), // 🧰 Dependências externas
  },

  // 🏗️ Modo de build
  mode: 'production',

  // 🐞 Mapas de código para debug
  devtool: 'source-map',

  // 💻 Dev Server com recarga automática
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 📂 Pasta de arquivos servidos
    },
    compress: true, // 🗜️ Compressão habilitada
    port: 9000, // 🚪 Porta local
    hot: true, // 🔥 Hot Module Replacement
    watchFiles: ['src/index.html'], // 👈 👀 Observa mudanças no HTML!
  },

  // 🔄 Resolução automática de extensões e aliases
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 📑 Extensões resolvidas
    alias: {
      '@': path.resolve(__dirname, 'src'), // 🧭 Atalho para src/
    },
  },

  // ⚡ Otimização de bundle: separa dependências
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // 🏢 Tudo que vem do node_modules
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  // 🚫 Desativa avisos de performance
  performance: {
    hints: false,
  },

  // 🔧 Loaders (você pode adicionar aqui conforme necessário)
  module: {
    rules: [
      // 👇 Adicione loaders aqui conforme seu projeto (TS, Babel, CSS, etc.)
    ],
  },

  // 📤 Arquivos de saída do bundle
  output: {
    filename: '[name].[contenthash].js', // 🧩 Nome com hash para cache busting
    path: path.resolve(__dirname, 'dist'), // 📁 Pasta de destino
    clean: true, // 🧽 Limpa a pasta antes do build
  },

  // 🧰 Plugins mágicos
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 📄 Template base
    }),
    new CleanWebpackPlugin(), // 🧹 Limpa dist/
    new webpack.DefinePlugin({
      'process.env.NODE_PROD': JSON.stringify(process.env.NODE_), // 🔐 Variáveis de ambiente
    }),
    new webpack.ProvidePlugin({
      $: 'jquery', // 🔗 jQuery global
      jQuery: 'jquery',
    }),
    new webpack.HotModuleReplacementPlugin(), // 🔥 HMR ativado
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }), // 🚫 Ignora locais do moment.js
  ],
};
