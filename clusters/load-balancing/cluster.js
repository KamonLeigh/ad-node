const cluster = require('cluster');
const os = require('os')


// MOCK API call
const numberOfUserInDB = () => {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
}


if (cluster.isMaster) {
    const cpus = os.cpus().length;

    for (let i = 0; i < cpus; i++ ) {
        cluster.fork();
    }

    const updateWorkers = () => {

      const userCount = numberOfUserInDB();
      Object.values(cluster.workers).forEach(worker => {
          worker.send({ userCount })
      })
    }

    updateWorkers();
    setInterval(() => updateWorkers(), 10000)

    // Object.values(cluster.workers).forEach(worker => {
    //     worker.send(`Hello Worker : ${worker.id}`)
    // })
} else {
    require('./server')
}