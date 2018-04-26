const monq = require('monq');

const client = monq('mongodb://localhost:27017/monq_example', { safe: true });
const queue = client.queue('alfaRomeo');

queue.enqueue('uppercase', { text: 'bar' }, {priority: 0}, (err, job) => {
 if (err) throw err;
 console.log('Enqueued-0:', job.data);
});

queue.enqueue('uppercase', { text: 'bar' }, { priority: 5 }, (err, job) => {
 if (err) throw err;
 console.log('Enqueued-5:', job.data);
});

queue.enqueue('uppercase', { text: 'bar' }, { priority: 10 }, (err, job) => {
 if (err) throw err;
 console.log('Enqueued-10:', job.data);
 process.exit();
});


