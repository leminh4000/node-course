const tasks={
    tasks:[
        {
            text:'Grocery shoppping',
            complete: true,
        },
        
        {
            text:'Clean yard',
            complete: false,
        },
        {
            text:'Film course',
            complete: false,
        },

    ],
    getTasksToDo: function() {
        return this.tasks.filter((task)=>{
            return !task.complete;
        });
    }
}

console.log(tasks.getTasksToDo());