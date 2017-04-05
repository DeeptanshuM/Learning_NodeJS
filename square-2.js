/**
 * Created by deetpanshumalik on 4/4/17.
 */

module.exports = function(s, callback) {
    try {
        if (s < 0){
            throw new Error("Square side should be postive: s = " + s);
        }
        else{
            callback(null, {
                perimeter: function() {
                    return 4*s;
                },
                area: function() {
                    return s*s;
                }
            });
        }
    }
    catch (error) {
        callback(error, null);
    }
}
