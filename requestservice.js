console.log('loaded request service');

// overkill for now?
class CreateRequest {
	constructor(braid) {
		this.braid = braid;
	}
}

// TODO: class for type safety
const braid1 = {
  name: 'Devotional',
  desc: 'Read the Word every morning',
  freq: 'daily', // TODO: string enum
  creatorUsername: 'cltang01', // assume unique
  createdAt: 1556992380000, // millis since epoch
  participants: ['cltang01', 'kevinf', 'tosin', 'jeremychen'], //user names
};

const braid2 = {
  name: 'Exercise',
  desc: 'Stay healthy',
  freq: 'weekly', // TODO: string enum
  creatorUsername: 'tosin', // assume unique
  createdAt: 1546952380000, // millis since epoch
  participants: ['cltang01', 'tosin', 'jeremychen'], //user names
};

const user1 = {
	username: 'cltang01',
	braids: [braid1, braid2] // vs braidid
}

const user2 = {
	username: 'kevinf',
	braids: [braid1] // vs braidid
}

class TransportService {
	constructor(host) {
		this.url = host;
		// this.authUser = 
	}

	getUsers() {
		const path = '/users';
		const data = {};
		return this.send_(path, data);
	}

	getGroups() {
		const path = '/groups';
		const data = {};
		return this.send_(path, data);
	}

	createBraid(braid) {
		const path = '/create';
		const data = braid; //TODO: transform into expected API format		
// TODO: url args?
		return this.send_(path, data);
	}

	getBraid(braidId) {
		const path = '/get/' + braidId;
		const data = {};
		return this.send_(path, data);
	}


	/** @return {!Promise<!Braid>} */
	getAllBraids() {
		const path = '/getAll';
		const data = {};
		return this.send_(path, data);
	}

	send_(path, data) {
		// FIXME: configure origin
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

		return jQuery.ajax(this.url+path, settings).then(response => {
			// TODO: process response into Braid object
			return response;
		});
	}

}


// Test script
const req = new CreateRequest(braid1);

const host = 'http://localhost:8000';
// const host = 'https://httpbin.org/get'; // tester
//const host = 'https://braids-app.azurewebsites.net/'; // actual API
const transportService = new TransportService(host);
transportService.getUsers()
transportService.createBraid(req); //.then(response => {});
transportService.getAllBraids(req); //.then(response => {});
transportService.getBraid(req); //.then(response => {});
//

//