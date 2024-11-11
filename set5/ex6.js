const fs = require('fs');

function generateLogs(numberOfLines) {
    const stream = fs.createWriteStream('server.log');
    
    const times = ['08:55:36', '09:12:45', '10:23:15'];
    const ips = [
        '192.168.0.1', '192.168.0.2'
    ];
    const methods = ['GET', 'POST', 'PUT', 'DELETE'];
    const resources = [
        '/TheApplication/WebResource.axd',
        '/TheApplication/api/users',
        '/TheApplication/static/css/main.css',
    ];
    const statuses = ['200', '201', '204', '500'];

    const weightedIps = [
        ...Array(50).fill('192.168.0.1'),
        ...Array(30).fill('10.0.0.1'),
        ...Array(20).fill('172.16.0.1'),
        ...ips
    ];

    for (let i = 0; i < numberOfLines; i++) {
        const time = times[Math.floor(Math.random() * times.length)];
        const ip = weightedIps[Math.floor(Math.random() * weightedIps.length)];
        const method = methods[Math.floor(Math.random() * methods.length)];
        const resource = resources[Math.floor(Math.random() * resources.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        const logLine = `${time} ${ip} ${method} ${resource} ${status}\n`;
        stream.write(logLine);
    }

    stream.end();
    console.log(`Wygenerowano ${numberOfLines} linii logów do pliku server.log`);
}

generateLogs(1000);

const readline = require('readline');

async function analyzeLogFile(filename) {
    const fileStream = fs.createReadStream(filename);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const ipRequests = new Map();

    for await (const line of rl) {
        const [time, ip, method, resource, status] = line.split(' ');
        ipRequests.set(ip, (ipRequests.get(ip) || 0) + 1);
    }

    const sortedIps = Array.from(ipRequests.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    console.log('\nTop 3 klienci z największą liczbą żądań:');
    sortedIps.forEach(([ip, count]) => {
        console.log(`${ip} ${count}`);
    });
}

analyzeLogFile('server.log');