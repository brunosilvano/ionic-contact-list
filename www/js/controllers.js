angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function($scope, $stateParams, BlankFactory) {
  db.executeSql('SELECT * FROM contatos WHERE id = ?', [$stateParams.id], function(res){
    if (res.rows.length > 0) {
    	blanckfactory.id = res.rows.item(0).id;
    	blanckfactory.name = res.rows.item(0).name;
    	blanckfactory.email = res.rows.item(0).email;
    	blanckfactory.phone = res.rows.item(0).phone;
    	//alert(blanckfactory.id + "\n" + blanckfactory.name + "\n" + blanckfactory.email + "\n" + blanckfactory.phone);

    	 //$scope.contacts.push({
    	// 	name: res.rows.item(0).name, 
    	 //	email: res.rows.item(0).email, 
    	 //	phone: res.rows.item(0).phone});
    	$scope.id = res.rows.item(0).id;
      	$scope.name = res.rows.item(0).name;
      	$scope.email = res.rows.item(0).email;
     	$scope.phone = res.rows.item(0).phone;
    }

  });
})

.controller('newContactCtrl', function($scope) {
	$scope.name = "";
    $scope.email = "";
    $scope.phone = "";

    $scope.insert = function() {
    //alert("Scope name: " + this.name);
    var query = "INSERT INTO contatos (name, email, phone) VALUES (?, ?, ?)";
	db.executeSql(query, [this.name, this.email, this.phone], function (resultSet) {
	  alert('Id: ' + resultSet.insertId);
	  //alert("Name: " + resultSet.rows.item(0).name);
	}, function(error) {
	  alert('SELECT error: ' + error.message);
	});

	this.name = "";
    this.email = "";
    this.phone = "";

  }

})

.controller('contactsCtrl', function($scope, $ionicPlatform) {

  	$scope.contacts = [];
  	//$scope.$on('$ionicView.beforeEnter', function() {  	  	

	  	$ionicPlatform.ready(function() {  		
		    db.executeSql("SELECT id, name FROM contatos", [], function(res){
		    	if (res.rows.length > 0) {
					for (var i = 0; i < res.rows.length; i++) {
		        	$scope.contacts.push({id:res.rows.item(i).id, name: res.rows.item(i).name});
		        	}
		      	}
		    }, function (err) {
		        alert(err);
		    });
		});
	//$ionicHistory.clearCache();
	//});

})

.controller('contactEditCtrl', function ($scope, $stateParams, BlankFactory) {
	//$scope.id = 0;
	$scope.$on('$ionicView.beforeEnter', function() {	
		$scope.name = blanckfactory.name;
	    $scope.email = blanckfactory.email;
	    $scope.phone = blanckfactory.phone;
    });
    //alert("contactEdit");
	//alert("Scope name: " + $stateParams.id);
    $scope.insert = function() {
    //alert(blanckfactory.id + "\n" + blanckfactory.name + "\n" + blanckfactory.email + "\n" + blanckfactory.phone);
     var query = "UPDATE contatos SET name=?, email=?, phone=? WHERE id=?";
	 db.executeSql(query, [this.name, this.email, this.phone, blanckfactory.id], function (res) {
	   alert('Success! ');
	   //alert("Name: " + resultSet.rows.item(0).name);
	 }, function(error) {
	   alert('SELECT error: ' + error.message);
	 });

	this.name = "";
    this.email = "";
    this.phone = "";

  };

})