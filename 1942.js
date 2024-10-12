var smallestChair = function(times, targetFriend) {
    // Add an index to each friend
    for (let i=0; i<times.length; i++) {
        times[i].push(i);
    }
    console.log(times)

    // Sort by arrival time
    times.sort((a, b) => a[0] - b[0]);
    let seats = [];
    console.log(times)


    // Assign the arriving friend the smallest available chair
    for (let friend of times) {
        let i = 0;
        if (seats.length == 0) seats.push(friend[1]);
        else {
            while (seats[i] > friend[0]) {
                i++;
            }
            if (i < seats.length) {
                seats[i] = friend[1];
            } else {
                seats.push(friend[1]);
            }
        }

        // Check if the current friend is target friend
        if (friend[2] == targetFriend) {
            return i;
        }
    }
    return 0;
};

const times=[[1,4],[2,3],[4,6]]
const targetFriend=1;

console.log(smallestChair(times,targetFriend)) 