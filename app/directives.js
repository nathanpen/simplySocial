angular.module('App.directives', [])


.directive('customHeader', function() {
	return {
		templateUrl: 'app/directives/views/header.tpl.html'
	};
})

.directive('postPanel', function() {
	return {
		templateUrl: 'app/directives/views/postPanel.tpl.html',
		scope:{

		},
		link: function(scope,elem,attr) {

			scope.collapsed = true;

			scope.toggleCollapse = function() {
				if (scope.collapsed==true) {
					scope.collapsed = false;
				}
				else if (scope.collapsed==false) {
					scope.collapsed = true;
				}
			}


		}
	};
})

.directive('mainNav', function() {
	return {
		templateUrl: 'app/directives/views/mainNav.tpl.html'
	};
});