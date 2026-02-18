const STATUS = {
    IN_PROGRESS: "In progress",
    DONE: "Done",
    TO_DO: "To Do"
}

export const toDoList = {
    list: {
        "make a bed": STATUS.IN_PROGRESS,
        "have a shower": STATUS.DONE,
        "have a breakfast": STATUS.TO_DO
    },
    showlist() {
        console.log(this.list)
    },
    addTask(task, status) {
        if (typeof (task) === 'string' && Object.values(STATUS).includes(status)) {
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

toDoList.addTask(`111`, STATUS.TO_DO);
toDoList.showlist()
