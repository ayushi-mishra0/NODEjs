// Function to get the principal amount
function get_principle() {
    return new Promise((resolve, reject) => {
        const principle = 440;
        console.log("get_principle called");
        resolve(principle);
    });
}

// Function to get the rate
function get_rate() {
    return new Promise((resolve, reject) => {
        const rate = 9;
        console.log("get_rate called");
        resolve(rate);
    });
}

// Function to get the time
function get_time() {
    return new Promise((resolve, reject) => {
        const time = 1;
        console.log("get_time called");
        resolve(time);
    });
}

// Function to compute the interest
function compute_interest(principle, rate, time) {
    return new Promise((resolve, reject) => {
        const interest = (principle * rate * time) / 100;
        console.log("compute_interest called with principle:", principle, "rate:", rate, "time:", time);
        resolve(interest);
    });
}

// Function to orchestrate the process
async function compute_a_result() {
    try {
        console.log("compute_a_result called");

        // Get values in sequence
        const principle = await get_principle();
        console.log("Principle:", principle);

        const rate = await get_rate();
        console.log("Rate:", rate);

        const time = await get_time();
        console.log("Time:", time);

        // Compute interest
        const interest = await compute_interest(principle, rate, time);
        console.log("The computed interest is: " + interest);
    } catch (err) {
        console.error("An error occurred:", err);
    }
}

// Call the function to start the process
compute_a_result();
