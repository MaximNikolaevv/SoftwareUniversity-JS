function walking(input) {
    let index = 0;
    let walkingGoal = 10000;
    let command = input[index];
    index++;
    let stepsCount = 0;

    while (command !== 'Going home') {
        stepsCount += Number(command);

        if (stepsCount >= walkingGoal) {
            let overTheGoal = stepsCount - walkingGoal;
            console.log("Goal reached! Good job!");
            console.log(`${overTheGoal} steps over the goal!`);
            return;
        }
        command = input[index];
        index++;
    }
    while (command === 'Going home') {
        command = input[index];
        index++;
        stepsCount += Number(command);
        if (stepsCount >= walkingGoal) {
            let overTheGoal = stepsCount - walkingGoal;
            console.log("Goal reached! Good job!");
            console.log(`${overTheGoal} steps over the goal!`);
        } else if (stepsCount < walkingGoal) {
            let stepsLeft = walkingGoal - stepsCount;
            console.log(`${stepsLeft} more steps to reach goal.`);
            return;
        }
    }
}