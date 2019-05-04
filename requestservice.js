// overkill for now?
class CreateRequest {
	constructor(braid) {
		this.braid = braid;
	}
}

// TODO: class
const braid = {
  name: 'Devotional',
  desc: 'Read the Word every morning',
  freq: 'daily', // TODO: enum
};

class TransportService {
	constructor() {
		this.url = 'https://' + 'localhost:9000';
		// this.authUser = 
	}

	createBraid() {
		const path = '/create';
// TODO: url args?
		return this.send_(path, data);
	}

	getBraid() {
		const path = '/get';
		return this.send_(path, data);
	}


	/** @return {!Promise<!Braid>} */
	getAllBraids() {
		const path = '/getAll';
		return this.send_(path, data);
	}

	send_(path, data) {
		const settings = {
			// beforeSend:
			data,
			// success:
			// error:
			// complete:
			// method: 'POST' 'PUT' // if mutate
		    type: "GET",
  			// dataType: "json",
		    url: "/my/url/",
		    success: function(data){
		        console.log("call to " + path + " succeeded");
		        console.log(data);
		    },
		    failure: function(data){
		        console.log("call to " + path + " failed");
		        console.log(data);
		    },
		};

		// TODO: send xhr to url+path
		jQuery.ajax(this.url+path, settings);
		// return Promise.resolve(result);
	}

}


// Test script
const req = new CreateRequest(braid);

const transportService = new TransportService();
transportService.createBraid(req); //.then(response => {});
transportService.getAllBraids(req); //.then(response => {});
transportService.getBraid(req); //.then(response => {});
//

//