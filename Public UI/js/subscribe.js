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
	console.log(data);
	
	$.post('http://10.27.163.216:5000/subscribe', data)
		.success(function(data, status, headers, config){
			console.log(data);
			console.log(status);
			console.log("data posted successfully!!!");
		})
		.error(function(data, status, headers, config){
			console.log(data);
			console.log(status);
			console.log("submit error");
		});
}