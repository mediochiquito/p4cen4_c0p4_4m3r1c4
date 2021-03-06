(function(window)
{
	function Header(bool)
	{
		var self = this;
		
		self.div = document.createElement('div');
		self.div.className = 'header-seccion';

			
		var logo = new Image();
			logo.src = 'img/general/logo-pacena.png';
			logo.id = 'logo-pacena';
			logo.width = 130;
			logo.height = 101;
			$(self.div).append(logo);
		
		var holderUserName = document.createElement('div');
			holderUserName.id = 'holder-user-name';
			$(self.div).append(holderUserName);
		
		var btnInicio = new Image();
			btnInicio.width = 70;
			btnInicio.id = 'btn-inicio-header';
			btnInicio.src = 'img/general/btnInicio.png';
			$(self.div).append(btnInicio);
			$(btnInicio).css({'display':'none','position' : 'absolute', 'top' : 0, 'left' : '50%', 'margin-left' : -35});
			$(btnInicio).bind('click' , doClick);
			
		self.animIn = function()
		{
			$(holderUserName).delay(300).css({opacity : 0}).transition({opacity : 1});
			$(logo).delay(0).css({scale : 0.5, rotate : -210, opacity : 0}).transition
			({
				duration : 500, scale : 1, rotate : 0, opacity : 1
			});
		}	
		
		self.setUser = function(nombre)
		{
			$(holderUserName).append('<h3>BIENVENIDO</h3>');
			$(holderUserName).append('<p>'+nombre+'</p>');
		}
		
		function doClick()
		{
			objApp.Navigate('inicio', null);
		}
		
		self.ocultarBtn = function()
		{
			$(btnInicio).css({'display' : 'none'});
		}

		self.mostrarBtn = function()
		{
			$(btnInicio).css({'display' : 'block'});
		}		
		
		self.ocultarBtn();		
		self.animIn();
	}
	
	window.Header = Header;

})(window);