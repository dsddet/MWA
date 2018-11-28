import Rx from 'rxjs/RX'

Observable.of(1, 2, 3)
    .map(v => v * v)
    .filter(v => true)
    .subscribe(
        v => {
            console.log(v)
        },
        e => {
            console.log(e)
        },
        () => {
            console.log('complete')
        }
    );