angular.module('app.services', [])

.factory('BlankFactory', function(){
	blanckfactory = {};
	blanckfactory.id = 0;
	blanckfactory.name = "";
	blanckfactory.email = "";
	blanckfactory.phone = "";
	return blanckfactory;

})

.service('BlankService', [function(){

}]);

