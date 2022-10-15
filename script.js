//Using the random anime quote API https://animechan.vercel.app/ to create a sketch where the character(me) speak a random//
//anime quote on mouse click!//

let randquote = "Hey I'm Phoebe! Welcome~ owo/ Click anywhere to make me say a random quote from a random anime. Have fun~";
let mefull;
let close1;
let close2;
let close3;
let close4;
let meimgs = [];
let index = 0;
let bubble;
let fnt;

function preload(){
	close4 = loadImage('images/imgs/close4.png');
	close1 = loadImage('images/imgs/close1.png');
	close2 = loadImage('images/imgs/close2.png');
	close3 = loadImage('images/imgs/close3.png');
	bubble = loadImage('images/imgs/bubble.png');
	mefull = loadImage('images/imgs/mefull.png');
	fnt = loadFont('font/SF_Arch_Rival.ttf');
	meimgs = [close1,close2,close3,close4];//create array for imgs of me
	
}

function setup() {
	imageMode(CENTER);
	createCanvas(1200,700);
}

function draw() {
	background(255);
	image(meimgs[index],320,350,800,800);//draw wichever index it's currently at
	textWrap(WORD);
	image(mefull,1000,350,800,800);
	image(bubble, 800, 350, 800,600);
	textSize(20);
	textFont(fnt);
	text(randquote,660,250,280);//draw the quote from API
}

function mousePressed(){
	getQuote('https://animechan.vercel.app/api/random'); //on mouse click, run the async function, gets random quote each time
	index += 1; // iterating through image array to go through the different faces
	if(index == meimgs.length){
   	index = 0; // if index exceeds length of array, goes back to index 0
  }
}
//async function to pull & parse json file
async function getQuote(url){
  const response = await fetch(url)
  const data = await response.json()
  randquote = data.quote // randquote is a variable that stores the "quote" info
}