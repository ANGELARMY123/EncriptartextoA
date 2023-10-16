// script.js

var vowelsReplacement = {
    'a': 'army',
    'e': 'euphoria',
    'i': 'ice',
    'o': 'outro',
    'u': 'singer',
};

function encrypt() {
    var message = document.getElementById("message").value;
    if (message) {
        var result = message.replace(/[aeiou]/g, function(match) {
            return vowelsReplacement[match] || match;
        });
        document.getElementById("result").innerText = result;
    }
}

function decrypt() {
    var message = document.getElementById("message").value;
    if (message) {
        // Invierte el proceso de encriptación
        var result = message;
        for (var vowel in vowelsReplacement) {
            if (vowelsReplacement.hasOwnProperty(vowel)) {
                var regex = new RegExp(vowelsReplacement[vowel], "g");
                result = result.replace(regex, vowel);
            }
        }
        document.getElementById("result").innerText = result;
    }
}



