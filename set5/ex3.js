const number = Math.floor(Math.random() * 100);
process.stdout.write("Sprobuj zgadnac liczbę: ");
process.stdin.on("data", (input) => {
    const value = parseInt(input);
    if(value>number){
        process.stdout.write("moja liczba jest mniejsza");
    }
    else if(value<number){
        process.stdout.write("moja liczba jest większa");
    }
    else{
        process.stdout.write("to właśnie ta liczba!");
        process.stdin.end();
        process.exit(0);
    }
});

