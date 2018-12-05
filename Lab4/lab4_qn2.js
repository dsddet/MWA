const os = require('os');
const { BehaviorSubject } = require('rxjs');

// console.log(os.cpus().length);
// console.log(Math.round(os.totalmem() / 1024000000));

function checkSystem() {
    const bSubject$ = new BehaviorSubject("Checking your system");
    bSubject$.subscribe((x) => { console.log(x) });
    let pass = true;
    if (!(os.cpus().length >= 2)) {
        bSubject$.next("Processor not supported");
        pass = false;
    }

    if (!(Math.round(os.totalmem() / 1024000000) >= 4)) {
        bSubject$.next("This app needs at least 4 GB of RAM");
        pass = false;
    }

    if (pass) {
        bSubject$.next("System is checked successfully")
    }
}

checkSystem();