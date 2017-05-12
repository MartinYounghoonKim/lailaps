require.config({
    baseUrl: '../js',
    paths:{
        'jquery': 'lib/jquery-1.9.1.min'
        ,'jqueryEasing':'lib/jquery.easing.min'
        ,'jqueryUI': 'lib/jquery-ui'
        ,'wheel': 'lib/wheel'
        //controller
        ,'Main':'controller/Main'
        ,'News':'controller/News'
        ,'NewsView':'controller/NewsView'
        ,'Promotion':'controller/Promotion'
        ,'Winners':'controller/Winners'
        ,'WinnersView':'controller/WinnersView'
        ,'Recommend':'controller/Recommend'
        ,'RecommendView':'controller/RecommendView'
        ,'ProfileView':'controller/ProfileView'
        ,'ProfileWrite':'controller/ProfileWrite'
        ,'RunningRecord':'controller/RunningRecord'
        ,'RunningRecordView':'controller/RunningRecordView'
        ,'MyRepairList':'controller/MyRepairList'
        ,'MyRepairView':'controller/MyRepairView'
        ,'EditMyInformation':'controller/EditMyInformation'
        ,'RepairServiceInformation':'controller/RepairServiceInformation'
        ,'CommonLogin':'controller/CommonLogin'

    	//Function Module
        ,'checkDevice':'constant/device'
        ,'responsive':'module/responsive'
        ,'gnb' :'module/gnb'
        ,'slide' :'module/slide'
        ,'navigation' :'module/navigation'
        ,'showAnimation' :'module/showAnimation'
        ,'accodian' :'module/accodian'
        ,'productBannerAnimation' :'module/productBannerAnimation'
        ,'tab' :'module/tab'
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
			deps: ['jquery','jqueryEasing'],
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
