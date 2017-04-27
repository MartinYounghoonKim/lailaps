require.config({
    baseUrl: '../js',
    paths:{
        'jquery': 'lib/jquery-1.9.1.min'
        ,'jqueryEasing': 'lib/jquery.easing.min'
        ,'jqueryUI': 'lib/jquery-ui'
        ,'wheel': 'lib/wheel'
        //controller
        ,'Main':'controller/Main'

    	//Function Module
        ,'checkDevice':'constant/device'
        ,'responsive':'module/responsive'
        ,'gnb' :'module/gnb'
        ,'slide' :'module/slide'
        ,'navigation' :'module/navigation'
    },
    shim:{
        'jquery':{
            exports:'$'
        },
		'jqueryUI':{
			deps: ['jquery'],
			exports :'jqueryUI'
		},
		'jqueryEasing':{
			deps: ['jquery'],
			exports :'jqueryEasing'
		},
        'wheel':{
			deps: ['jquery'],
			exports :'wheel'
		},
    },
    map: {
      '*': {
        'css': 'lib/css'
      }
    }
});
requirejs([CONTROLLER_TYPE]);
