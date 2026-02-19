const STATUS = {
    IN_PROGRESS: "In progress",
    DONE: "Done",
    TO_DO: "To Do"
}

const toDoList = {
    list: {
        "make a bed": STATUS.IN_PROGRESS,
        "have a shower": STATUS.DONE,
        "have a breakfast": STATUS.IN_PROGRESS,
        "eat": STATUS.TO_DO
    },
    showTaskStatus(status) {
        let isEmpty = true
        console.log(`${status}:`)
        for (task in this.list) {
            if (this.list[task] === status) {
                console.log(`\t${task}`)
                isEmpty = false
            }
        }
        if (isEmpty) {
            console.log("-")
        }
    },
    showlist() {
        this.showTaskStatus(STATUS.TO_DO)
        this.showTaskStatus(STATUS.IN_PROGRESS)
        this.showTaskStatus(STATUS.DONE)
    },

    addTask(task, status) {
        if (typeof (task) === 'string' && Object.values(STATUS).includes(status) && task.length < 12) {
            this.list[task] = status
        }
    },
    removeTask(task) {
        delete this.list[task]
    },
    changeStatus(task, status) {
        if (task in this.list) {
            this.list[task] = status
        };
    }
}

//toDoList.addTask(`12345`, STATUS.TO_DO);
toDoList.showlist()

