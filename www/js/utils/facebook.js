function Facebook(){

	var self = this;
	var access_token = 0;
	var callback;
	var inter;

	this.init = function(){


	}

	function get_obj_user()
	{
		clearTimeout(inter)


		objApp.mostrarCargador()

			$.ajax({
			  dataType: "json",
			  url: 'https://graph.facebook.com/v2.3/me?fields=id,name,email&access_token=' + access_token,
			  type: 'get',
			  success: function(json){
			 		
			  		callback(json, access_token)
			  		objApp.ocultarCargador()
			  },
			  error: function()
			  {
			  	console.log('grapf error')
			
			  }
			});
	}


	this.conectar = function($callback){

		 callback = $callback
		 objApp.mostrarCargador()

		 inter =  setTimeout(function (){
		 	objApp.ocultarCargador()
		 }, 3000);
		 


		 facebookConnectPlugin.login(['email', 'public_profile'], function (obj){

		 	access_token = obj.authResponse.accessToken;
			objApp.ocultarCargador()
			get_obj_user()		 	

		 }, function (obj){
		 	
		 	objApp.ocultarCargador();
			objApp.error('User cancelled login or did not fully authorize.');

		 })


 

	}

	
}