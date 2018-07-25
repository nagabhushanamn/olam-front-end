

// Named function
function add(x: number, y: number): number {
    return x + y;
}

let result: number = add(1, 2);



// optional params
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

buildName("Nag");