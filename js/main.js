require.config({
    baseUrl: '../js',
    paths:{
        'jquery': 'lib/jquery-1.9.1.min'
        ,'jqueryEasing':'lib/jquery.easing.min'
        ,'jqueryUI': 'lib/jquery-ui'
        ,'wheel': 'lib/wheel'
        ,'handlebars': 'lib/handlebars-v4.0.8'
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
        ,'RunningRecord':'controller/RunningRecord'
        ,'RunningRecordView':'controller/RunningRecordView'
        ,'MyRepairList':'controller/MyRepairList'
        ,'MyRepairView':'controller/MyRepairView'
        ,'EditMyInformation':'controller/EditMyInformation'
        ,'RepairServiceInformation':'controller/RepairServiceInformation'
        ,'CommonLogin':'controller/CommonLogin'
        ,'RepairList':'controller/RepairList'
        ,'RepairView':'controller/RepairView'
        ,'Products':'controller/Products'
        ,'InquiryList':'controller/InquiryList'
        ,'InquiryDetail':'controller/InquiryDetail'
        ,'InquiryWrite':'controller/InquiryWrite'
        ,'TechnologyBraiding':'controller/TechnologyBraiding'

    	//Function Module
        ,'checkDevice':'constant/device'
        ,'getData':'constant/getData'
        ,'responsive':'module/responsive'
        ,'gnb' :'module/gnb'
        ,'slide' :'module/slide'
        ,'navigation' :'module/navigation'
        ,'showAnimation' :'module/showAnimation'
        ,'accodian' :'module/accodian'
        ,'productBannerAnimation' :'module/productBannerAnimation'
        ,'tab' :'module/tab'
        ,'parellaxTab' :'module/parellaxTab'
        ,'productParellaxTab' : 'module/productParellaxTab'
        ,'dataControll' :'module/dataControll'
        ,'layerPop' :'module/layerPop'
        ,'inputFunction' :'module/inputFunction'
        ,'parellaxNavigation' :'module/parellaxNavigation'
        ,'videoControll' :'module/videoControll'

        //dataController
        ,'RepairListData' : "data/RepairListData"

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
        'jquery':{
            exports:'$'
        },
        'layerPop': {
          exports: 'layerPop'
        }
    }
});
requirejs([CONTROLLER_TYPE]);
