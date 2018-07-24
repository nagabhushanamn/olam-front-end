
//-----------------------------------------------------
/* 
var obj = {
    doWork: function () {
        console.log('im lakshmi, working here');
    }
}; */

//-----------------------------------------------------

// soln:
var olam = olam || {};
(function init() {
    var obj = {
        doWork: function () {
            console.log('im lakshmi, working here');
        }
    };
    olam.mod3 = obj;
})();