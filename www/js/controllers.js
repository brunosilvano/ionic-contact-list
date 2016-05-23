angular.module('app.controllers', [])
  
.controller('contactDetailsCtrl', function($scope) {

})
   
.controller('newContactCtrl', function($scope) {

    $scope.insert = function() {
    alert("Scope name: " + this.name);
    var query = "INSERT INTO contatos (name, email, phone) VALUES (?, ?, ?)";
	db.executeSql(query, [this.name, this.email, this.phone], function (resultSet) {
	  alert('Id: ' + resultSet.insertId);
	  alert("Name: " + resultSet.rows.item(0).name);
	}, function(error) {
	  alert('SELECT error: ' + error.message);
	});
  }

})
      
.controller('contactsCtrl', function($scope) {

})
 