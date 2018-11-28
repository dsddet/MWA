function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();

    const days = ["weekend", "weekday", "weekday", "weekday", "weekday", "weekday"]

    console.log(days[day])

}


isWeekend();