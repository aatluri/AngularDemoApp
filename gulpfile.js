// First we create variables which store an instance of the components we need
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var jsFiles = ['*.js','app//js/*.js','./app/js/controllers/*.js','./app/js/services/*.js'];

//This task is a gulp task which runs the JSCS and JSHint against our code
//We need to install gulp-jshint, gulp-jscs, jshint first using npm
gulp.task('style', function (){
    return gulp.src(jsFiles)
        .pipe(jshint()) //The jshint here is the variable we created above
        .pipe(jshint.reporter('jshint-stylish',{
            verbose: true
    }))
    .pipe(jscs());
});

//This task uses wiredep to inject the css and java script files of our dependencies like bootstrap and font-awesome etc...
// It also uses gulp-inject to inject the custom css and js files we create as part of our application
gulp.task('inject', function(){
   
    //First we create the variables containing an instance of the components we need.
    var wiredep = require('wiredep').stream; 
    var inject = require('gulp-inject');
    
    //One of the options we pass to gulp-inject to tell it where our custom css and js files are located
    var injectSrc = gulp.src(['./app/css/*.css' , './app/js/*.js','./app/js/controllers/*.js','./app/js/services/*.js'], {read: false});
    //The second paramter we pass to gulp inject to specify some preferences like in this case to ignore the ../../ in the path
    var injectOptions = {
        ignorePath: '/app'
    };
    
    // These are the options for the wiredep which point it to the bower.json file from where it needs to pick up the css and js files of our dependencies. Also it tells it to ignore the ../../ path
    var options = {
       bowerJson: require('./bower.json'),
       directory: './app/lib',
       ignorePath: '../../app'
    };
    return gulp.src('./app/*.html')
        .pipe(wiredep(options)) // Calls the wiredep method
        .pipe(inject(injectSrc, injectOptions)) // Calls the gulp-inject method
        .pipe(gulp.dest('./app')); // Tells it where to inject the dependencies ie the location of out html file
});

//This tells nodemon to run style and inject first simulatenously and then run the function()
gulp.task('serve',['style','inject'], function(){
    var options = {
        script: 'app.js', // This is telling it which script to run
        delayTime: 1, // Tells is to wait 1 second 
        env: { // These are env specific settings
            'PORT': 4000
        },
        watch: jsFiles // The variable pointing to the location of all our jsFiles which we declared at the beginning.
    };
    
    return nodemon(options)
        .on('restart',function(ev){  // Tells nodemon what to do when files which are being watched change.
        console.log('Restarting....'); // In this case we tell it to log a message to the console.
    });
    
});