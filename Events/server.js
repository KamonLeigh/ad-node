const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks= {};
        this.taskId= 1;
        process.nextTick(() => this.emit('response', 'Type a command (help to list commands)'))
        client.on('command', (command, args) => {
            console.log(`Command: ${command}`);
            // help, add, ls, delete
            switch (command) {
                case 'help':
                case 'add' :
                case 'ls':
                case 'delete':
                    this[command](args);
                  break
                default:
                    this.emit('response', 'unknown command')
            
            }
        })
    }

    taskStrings(){
        return Object.keys( this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`
        }).join('\n');
    }

    help() {
        this.emit('response', `Availlable Commands:
            add task
            ls
            delete :id
        `);
    }
    add(args) {
        const task = args.join(' ');
        this.tasks[this.taskId] = task;
        this.emit('response', `Created new task ${this.taskId}`);
        this.taskId++;
    }
    ls() {
        
        this.emit('response', `Tasks:\n${this.taskStrings()}`);
    }
    delete(args) {
        delete this.tasks[args[0]];
        this.emit('response', `Delete task ${args[0]}`);
    }

}

module.exports = (client) => new Server(client);