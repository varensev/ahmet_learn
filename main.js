const phoneBook = {
    list: {
        'John': 12345,
        'Oleg': 54321,
        'Ann': 12333,
    },
    add(name, number) {
        this.list[name] = number;
    },
    remove(name) {
        delete this.list[name]
    }
};
phoneBook.add('AA', 123)
phoneBook.remove('Oleg')
for (const name in phoneBook.list) {
    console.log(`${name} - ${phoneBook.list[name]}`)
}


