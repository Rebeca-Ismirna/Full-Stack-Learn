function recursiva(max) {
    console.log(max)
    if(max >= 10) return
    max++
    recursiva(max)
} //11289 -> maximum call stack size

recursiva(0)