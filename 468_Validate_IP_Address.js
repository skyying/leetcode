/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    
};

//
//decide if ipv6 or ipv6 or neither
//if has ., check for ipv4, if not match , return niether
//if has :, check for ipv6, if not match return neither
//
// ipv4, allow prefix zero, every number should betwen 0 to 255
// ipv6, leading zero can be ommit
// consecutive zeroes can be ommit, they can be 
// 63:0000:0000 => 63::
// caonsecutive zero can be shirking to zero
