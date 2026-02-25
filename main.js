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
    { task: '1', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
    { task: '2', status: STATUS.DONE, priority: PRIORITY.MEDIUM },
    { task: '3', status: STATUS.TO_DO, priority: PRIORITY.HIGH },
    { task: '4', status: STATUS.IN_PROGRESS, priority: PRIORITY.MEDIUM },
    { task: '5', status: STATUS.DONE, priority: PRIORITY.LOW },
    { task: '6', status: STATUS.TO_DO, priority: PRIORITY.LOW },

];

function showList() {
    console.log(`\tTO DO LIST:`)
    toDoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task} | ${task.status} | ${task.priority}`)
    })
};

function showListSpecial(status) {
    toDoList.forEach((task) => {
        if (task.status === status) {
            console.log(task)
        }
    })
};

function addTask(task) {
    toDoList.push(task)
};

function changeTask(index, task) {
    toDoList[index] = task
};

function removeTask(taskName) {
    const index = toDoList.findIndex(x => x.task === taskName)
    if (index !== -1) {
        toDoList.splice(index, 1)
    } else {
        return false
    }
};

showListSpecial(STATUS.DONE)