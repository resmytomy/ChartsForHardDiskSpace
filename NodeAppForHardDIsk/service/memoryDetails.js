const nodeDiskInfo = require('node-disk-info');
class MemoryDetails{
  constructor(){}


getMemoryDetails () {
  return new Promise((resolve, reject) => {
    nodeDiskInfo.getDiskInfo()
    .then(disks => {
      console.log(disks);
       resolve(disks);
    })
    .catch(reason => {
        reject(reason);
    })

})





}}
module.exports=MemoryDetails;

