import PromiseWorker from 'promise-worker'
import { MESSAGE_TYPE_FILE, transferrableToValidation } from './importConstants'
import Worker from 'worker-loader!./importWorker'

const worker = new PromiseWorker(new Worker())

export const sendFile = file => worker.postMessage({
    type: MESSAGE_TYPE_FILE,
    file: file
}).then(results => results.map(result => transferrableToValidation(result)))