require('../src/db/mongoose')
const User = require('../src/models/user')

/* User.findByIdAndUpdate('637ef1cfcba57060d048c061', {age:1})
.then((user) => {
    console.log(user)
    return User.countDocuments({age:1})
}).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
}) */

const updateAndCount= async (id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAndCount('637ef269057cd00cea384427', 1).then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)
})