const LineConnect = require('./connect');
//const LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Egy JS\n\
Version: JS VERSION\n\
Thanks to @egydudul @eGy_NgapaK\n\
=========================================\n\
\nNOTE : Token Egy-NgapaK !");

const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		
	}
});
