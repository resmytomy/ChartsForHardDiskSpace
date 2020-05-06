const MemoryDetails=require('../service/memoryDetails')

class MemoryDetailsController{ 
    constructor(){
        this. memDet=new MemoryDetails();
    }
 
getDetails= (req, res) => {

        this.memDet.getMemoryDetails().
        then(mem=>res.json(mem))
       .catch(err=>res.json(err))


}

}
module.exports=MemoryDetailsController ;