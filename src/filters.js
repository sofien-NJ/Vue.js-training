import Vue from "vue";

//Make UpperCase


//Vue.filter("uppercase", function (v) {
//return v.toUpperCase();
//});

//Make reverse
Vue.filter("reversing", function (v) {
    return v.splite("").reverse().join("");
});

// Shorten Text
Vue.filter("Shorten", function (value) {
    return value.substring(0 , 70) + "...";
})
