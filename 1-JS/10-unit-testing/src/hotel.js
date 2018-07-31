


let hotel = {
    getFood: function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('biryani');
                reject('sorry')
            }, 0);
        });
    }
};