var adjectivefirst = prompt('Please type an adjective'); 
var verbingfirst = prompt('Please type a verb ending in "ing"');
var bodypart = prompt('Please type a body part');
var adjectivesecond= prompt('Please type an adjective');
var name = prompt('Please type a name');
var numero = prompt('Please type a number');
var adverb = prompt('Please type an adverb');
var verbingsecond = prompt('Please type a verb ending in "ing"');
var exclamation = prompt('Please type an exclamation');
var adjectivethird = prompt('Please type an adjective');
var verbthird = prompt('Please type a verb');
var pluralnoun = prompt('Please type a plural noun');
var adjectivefourth = prompt('Please type an adjective');
var nountwo = prompt('Last but not least, please type one more noun');
alert('Are you ready for your madlib?')

if (bodypart.substr(-1) === "s") {
 var option= "are";
}
else {
 var option= "is";
}

if (name.substr(-1) === "a") {
 var gender= "she";
}
else {
 var gender= "he";
}

if ((adjectivefirst.charAt(0) === "a") || (adjectivefirst.charAt(0) === "e") || (adjectivefirst.charAt(0) === "i") || (adjectivefirst.charAt(0) === "o") || (adjectivefirst.charAt(0) === "u")) {
 var vowel= "an";
}
else {
 var vowel= "a";
}

var madlib = "<p>Do you think you're " + vowel;
madlib += " " + adjectivefirst;
madlib += " person? I think I'm " + vowel;
madlib += " " + adjectivefirst;
madlib += " person, or at least I try to be. It's hard, though, with all these people telling you that you aren't " + verbingfirst;
madlib += " enough, or that your " + bodypart;
madlib+= " " + option;
madlib += " too " + adjectivesecond;
madlib += ". </p>"
madlib += "<p>Reminds me of my old neighbor, " + name;
madlib += ", " + gender;
madlib += " got " + numero;
madlib += " years in prison, all for " + adverb;
madlib += " " + verbingsecond;
madlib += "? And just the once? I mean, " + exclamation;
madlib += "! Life's a strange ride. I never gave my " + adjectivethird;
madlib += " mother the time of day when I was younger, but now her advice haunts me. She'd say: 'Never " + verbthird;
madlib += " the " + pluralnoun;
madlib += " before the " + adjectivefourth + " " + nountwo;
madlib += " comes knocking.' Maybe " + name;
madlib += " could have used some of that wisdom.</p>";
document.write(madlib);
