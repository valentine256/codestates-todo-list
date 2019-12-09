import io from 'socket.io-client';

const socketHelper = () => {
  const socket = io('http://localhost:3000')

  getData = (callback) => {
    socket.on('get storage data res', (data) => {
      callback(data);
    })
  }

  emitData = (eventName, data) => {
    socket.emit(eventName, data);
  }
}
