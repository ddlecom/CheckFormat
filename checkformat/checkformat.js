(function ($) {
	$.fn.checkformat = function (param) {

	var defopt = {
			className: 'checkformat',
			correct: 'correct',
			incorrect: 'incorrect'
		};
		
		var options = $.extend(defopt, param);			
	
		return this.length ? this.each(function () {
			var $this = $(this); 
			if(!$this.is('input')) return;
			
			function check(event) {
				var target = event.target;
				var val = target.value;
				
				if(!val) {
					target.classList.remove('correct');
					target.classList.remove('incorrect');
					return;
				}
				
				var str = null;
				
				switch(target.dataset.type) {
					case 'email': 
						str = /[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}/;
						break;
					case 'phone': 
						str = /^((8|\+\d{1,4})[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
						break;
					case 'url': 
						str = /^https?:\/\/([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
						break;
					case 'date': 
						str = /^(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
						break;	
				}
				
				if(str) {
					if(str.test(val)) {
						target.classList.add('correct');
						target.classList.remove('incorrect');
					} else { 
						target.classList.add('incorrect');
						target.classList.remove('correct');									
					}
				}
			}
			
			$this.addClass(options.className);
			$this.keyup(check);
			
		}) : this;
	};
} (jQuery));