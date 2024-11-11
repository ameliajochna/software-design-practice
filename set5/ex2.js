process.stdout.write("Podaj swoje imię: ");
process.stdin.on("data", (name) => {
    console.log(`Witaj, ${name}`);
    process.stdin.end();
});