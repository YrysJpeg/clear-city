module.exports = {
  pages: {
      index: {
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html'
      }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    proxy: "http://94.247.128.130:5001",
  },
};
