// Function to get the principal amount
function get_principle(cb) {   //3
    const principle = 440;
    console.log("get_principle called");
    cb(null, principle);
}

// Function to get the rate
function get_rate(cb) {  //4
    const rate = 9;
    console.log("get_rate called");
    cb(null, rate);
}

// Function to get the time
function get_time(cb) {    //5
    const time = 1;
    console.log("get_time called");
    cb(null, time);
}

// Function to compute the interest
function compute_interest(principle, rate, time, cb) {   //6
    const interest = (principle * rate * time) / 100;
    console.log("compute_interest called with principle:", principle, "rate:", rate, "time:", time);
    cb(null, interest);
}

// Function to orchestrate the callbacks, demonstrating callback hell
function compute_a_result() {  //2
    console.log("compute_a_result called");
    get_principle(function(err, principle) {
        console.log("Inside get_principle callback");
        if (err) {
            console.error("Error in get_principle:", err);
            return;
        }
        console.log("Principle:", principle);
        get_rate(function(err, rate) {
            console.log("Inside get_rate callback");
            if (err) {
                console.error("Error in get_rate:", err);
                return;
            }
            console.log("Rate:", rate);
            get_time(function(err, time) {
                console.log("Inside get_time callback");
                if (err) {
                    console.error("Error in get_time:", err);
                    return;
                }
                console.log("Time:", time);
                compute_interest(principle, rate, time, function(err, interest) {
                    console.log("Inside compute_interest callback");
                    if (err) {
                        console.error("Error in compute_interest:", err);
                        return;
                    }
                    console.log("The computed interest is: " + interest);
                });
            });
        });
    });
}

// Call the function to start the callback chain
compute_a_result(); //1
