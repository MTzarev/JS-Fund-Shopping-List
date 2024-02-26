function shoppingList(input) {
    let groceries = input.shift().split(`!`);

    let list = input.shift();

    while (list !== "Go Shopping!") {
        let [command, oldItem, newItem] = list.split(` `);

        if (command === "Urgent") {
            if (!groceries.includes(oldItem)) {
                groceries.unshift(oldItem);
            }
        } else if (command === "Unnecessary") {
            if (groceries.includes(oldItem)) {
                let index = groceries.indexOf(oldItem);
                groceries.splice(index, 1);
            }
        } else if (command === "Correct") {
            if (groceries.includes(oldItem)) {
                let index = groceries.indexOf(oldItem);
                groceries[index] = newItem;
            }
        } else if (command === "Rearrange") {
            if (groceries.includes(oldItem)) {
                let index = groceries.indexOf(oldItem);
                groceries.splice(index, 1);
                groceries.push(oldItem);
            }
        }

        list = input.shift();
    }

    console.log(groceries.join(`, `));
}
//shoppingList((["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"]));
shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]));