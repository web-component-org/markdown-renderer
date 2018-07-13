exports.config = {
  namespace: 'markdown-renderer',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};
