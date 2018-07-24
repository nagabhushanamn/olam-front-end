
//-----------------------------------------------------
/* 
var obj = {
    doWork: function () {
        console.log('im tanmay, working here');
    }
}; */

//-----------------------------------------------------

// soln-1:
var olam = olam || {};
(function init() {
    var internal = 100; // private
    olam.mod2.doWork();
    var obj = {
        doWork: function () {
            console.log('im tanmay, working here');
        }
    };

    olam.mod1 = obj; // public

})();