require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndRemove("637f2fa8ce7f9bce0744b4ac").then(() => {
    return Task.count({})
}).then((count) => {
    console.log(count)
}).catch(err => {
    console.log(err);
})
 */

const delAndCount = async (id)=>{
    const user= await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count;
}
delAndCount("637f2fa8ce7f9bce0744b4ac").then((count)=>{
    console.log(count);
})