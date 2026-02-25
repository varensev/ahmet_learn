const STATUS = ({
    IN_PROGRESS: 'In progress',
    TO_DO: 'To do',
    DONE: 'done'
})
const PRIORITY = ({
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
})
const toDoList = [
    { task: 'eat', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
    { task: 'wake up', status: STATUS.DONE, priority: PRIORITY.MEDIUM },
    { task: 'swim', status: STATUS.TO_DO, priority: PRIORITY.HIGH },
    { task: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
    { task: 'make a bed', status: STATUS.DONE, priority: PRIORITY.LOW },
    { task: 'walk', status: STATUS.TO_DO, priority: PRIORITY.MEDIUM },

];

function showList() {
    console.log(`\tTO DO LIST:`)
    toDoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task} | ${task.status} | ${task.priority}`)
    })
};

function addTask(task) {
    toDoList.push(task)
};

function changeTask(index, task) {
    toDoList[index] = task
}

function removeTask(taskName) {
    const index = toDoList.findIndex(x => x.task === taskName)
    if (index !== -1) {
        toDoList.splice(index, 1)
    } else {
        return false
    }
}


removeTask('eat')

changeTask(2, { task: 'swim', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH })

addTask({ task: 'dasdasd', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW })

showList()