require.config({
	// urlArgs:'v=' +Date.now(),
	// baseUrl:'js',
	paths:{
		jquery:'jquery-3.2.1',
		jqueryui:'../lib/jquery-ui-1.12.1/jquery-ui',
        JAlunbo:'../lib/JAlunbo/JAlunbo',
        com:'com'
	},
	shim:{
		jqueryui:['jquery'],
        JA:['jquery'],
        com:['jquery']
	}
});