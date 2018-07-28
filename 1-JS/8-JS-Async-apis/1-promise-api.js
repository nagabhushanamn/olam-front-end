





//----------------------------------------------------------------------
// food-service-js-module   ( e.g service module )
//----------------------------------------------------------------------

let foodService = {
    getFood() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('contacting all hotels for food order');
                setTimeout(() => {
                    console.log('going to hotel to get food');
                    let food = "BRYANI";
                    console.log('foodService resolve/reject promise...');
                    resolve(food);
                    // reject('Your items not available');
                }, 3000)
            }, 3000);
        });
        return promise;
    }
};


//----------------------------------------------------------------------
// fbar-service-js-module   ( e.g service module )
//----------------------------------------------------------------------

let barService = {
    getDrink() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('barService resolve/reject promise...');
                resolve('BEER');
                //reject('NO BEER in chennai');
            }, 3000);
        });
        return promise;
    }
};

//----------------------------------------------------------------------

// teach-team-js-module  ( e.g UI module )
//----------------------------------------------------------------------

let team = {
    doTraining() {
        console.log('olam doing training...');
        console.log('planned to order food');
        let promise1 = foodService.getFood();
        let promise2 = barService.getDrink();
        console.log('got promise from food-service, defer actions to futures with callbacks');
        Promise.race([promise1, promise2]).then(
            (response) => {
                console.log('yummy - ' + response);
            },
            (error) => {
                console.log('oops - ' + error);
            }
        );
        console.log('team proceeding on further training......ends..');
    }
};

team.doTraining();

//----------------------------------------------------------------------