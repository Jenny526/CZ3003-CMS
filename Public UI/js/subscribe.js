function postData(){
	var name = $("#name").val();
	var mobile = $("#mobileNumber").val();
	var location = $("#location").val();
	var email = $("#email").val();
	var data = {};
	data.name = name;
	data.mobile = mobile;
	data.location = location;
	data.email = email;

	post(data);
}

function post(data){
	$.post('server url', null, data)
		.success(function(data, status, headers, config){
			console.log("data posted successfully!!!");
		})
		.error(function(data, status, headers, config){
			console.log("submit error");
		});
}