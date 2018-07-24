
//-----------------------------------------------------
/* 
var obj = {
    doWork: function () {
        console.log('im dev, working here');
    }
}; */

//-----------------------------------------------------

// soln:
var olam = olam || {};
(function init() {
    olam.mod3.doWork();
    var obj = {
        doWork: function () {
            console.log('im dev, working here');
        }
    };
    olam.mod2 = obj;
})();