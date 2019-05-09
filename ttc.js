function getColor(text) {
n = text.charCodeAt(0)+text.charCodeAt(text.length - 1);
n = n * (360/172)
a = n.toString()[0];
b = n.toString()[1];
c = n.toString()[2];
return "hsl(" + n + ", 100%, 50%)";
}
