/*

Officer: 8243477
CaseNum: 502-2-93016302-8243477

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var ACensored = {
	Word0: [ "fence", "sail", "ALGOL"], 
	Word1: [ "meddle", "fence", "succeed"], 
	Word2: [ "clip", "stuff", "consider"], 
	Word3: [ "mend", "mend", "smile"], 
	Word4: [ "play", "play", "plug"], 
	Word5: [ "bake", "mend", "stuff"], 
	Word6: [ "a donation", "sail", "succeed"], 
	Word7: [ "smile", "hurry", "charge"], 
	Word8: [ "meddle", "sail", "Edsger"], 
	Word9: [ "smile", "consider", "bake"]
};

var BCensored = {
	Word0: [ "play", "sail", "protect"], 
	Word1: [ "Governor Zuckerberg", "hurry", "rejoice"], 
	Word2: [ "consider", "tug", "succeed"], 
	Word3: [ "smile", "bake", "consider"], 
	Word4: [ "rejoice", "meddle", "rejoice"], 
	Word5: [ "sail", "charge", "hurry"], 
	Word6: [ "syndicate", "$200,000", "smile"], 
	Word7: [ "campaign", "radiate", "smile"], 
	Word8: [ "Hopper", "hit", "tug"], 
	Word9: [ "clip", "mend", "meddle"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = `Dear ${BCensored.Word1[0]}, I am sure that something could be worked out in terms of ${ACensored.Word6[0]} for your ${BCensored.Word7[0]}. How does ${BCensored.Word6[1]} sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. ${BCensored.Word8[0]} needs to be out of the picture. She’s caused enough trouble. Get the ${BCensored.Word6[0]} to organise the ${BCensored.Word8[1]} but I’d prefer it you don’t mention me or ${ACensored.Word0[2]}. I owe them enough favours already. Your old friend, ${ACensored.Word8[2]}`;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
