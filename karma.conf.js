// Karma configuration
// Generated on Fri Mar 31 2016 21:30:24 GMT+0000 (WET)

module.exports = function(config) {
  config.set({
  
  basePath: '',
  
  frameworks: ['mocha', 'chai'],
  
   files: [
     'test.html',
      'assets/js/*',
      'test/*.js',
      'test/*.css'
    ],
    
  client: {
          mocha: {
            ui: 'bdd'
          }
    },
    
  exclude: [
      'gulpfile.js'
    ],
    
  preprocessors: {
      'test/index.html': ['html2js']
    },
    
  reporters: ['progress'],

  port: 9876,

  colors: true,

  logLevel: config.LOG_INFO,

  autoWatch: true,

     browsers: ['Firefox', 'PhantomJS'], 

  singleRun: false
  
  
    });
};
