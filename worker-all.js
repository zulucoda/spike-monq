const monq = require('monq');

const client = monq('mongodb://localhost:27017/monq_example', { safe: true });
const worker = client.worker(['alfaRomeo']);

worker.register({ uppercase: require('./uppercase') });

worker.on('dequeued', data => {
 console.log('Dequeued');
 console.log(data);
});

worker.on('failed', data => {
 console.log('Failed:');
 console.log(data);
});

worker.on('complete', data => {
 console.log('Complete:');
 console.log(data);
});

worker.on('error', err => {
 console.log('Error:');
 console.log(err);
 worker.stop();
});

worker.start();
