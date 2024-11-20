let data;
let data2;
let title;
let txt;
let flav;
let flvtxtCSV = 'assets/proj2_hair.csv';
let btlArray=[];
let btlIndex = 0;
let hairArray22= [];
let hairIndex22 = 0;
let hairArray23 = []
let hairIndex23 = 0;
let hairArray24 = [];
let hairIndex24 = 0;
let monthIndex = 0;
let monthArray = [
  "Aug 2022",
  "Oct 2022",
  "Nov 2022",
  "Dec 2022",
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "Jun 2023",
  "Jul 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
  "Apr 2024",
  "May 2024",
  "Jun 2024",
  "Jul 2024",
  "Aug 2024",
  "Sep 2024",
  "Oct 2024",
];

function preload() {
corkboard = loadImage('assets/cork.jpg');
  data2 = loadTable(flvtxtCSV, 'csv', 'header');

hairArray22[0] = loadImage('assets/hair/1.jpg');
hairArray22[1] = loadImage('assets/hair/2.jpg');
hairArray22[2] = loadImage('assets/hair/3.jpg');
  
hairArray23[0] = loadImage('assets/hair/4.jpg');
hairArray23[1] = loadImage('assets/hair/5.jpg');
hairArray23[2] = loadImage('assets/hair/6.jpg');
hairArray23[3] = loadImage('assets/hair/7.jpg');
hairArray23[4] = loadImage('assets/hair/8.jpg');
hairArray23[5] = loadImage('assets/hair/9.jpg');
hairArray23[6] = loadImage('assets/hair/10.jpg');
hairArray23[7] = loadImage('assets/hair/12.jpg');
hairArray23[8] = loadImage('assets/hair/13.jpg');
hairArray23[9] = loadImage('assets/hair/14.jpg');
hairArray23[10] = loadImage('assets/hair/15.jpg');
hairArray23[11] = loadImage('assets/hair/16.jpg');
hairArray23[12] = loadImage('assets/hair/17.jpg');
  
hairArray24[0] = loadImage('assets/hair/18.jpg');
hairArray24[1] = loadImage('assets/hair/19.jpg');
hairArray24[2] = loadImage('assets/hair/20.jpg');
hairArray24[3] = loadImage('assets/hair/21.jpg');
hairArray24[4] = loadImage('assets/hair/22.jpg');
hairArray24[5] = loadImage('assets/hair/23.jpg');
hairArray24[6] = loadImage('assets/hair/24.jpg');
hairArray24[7] = loadImage('assets/hair/25.jpg');
hairArray24[8] = loadImage('assets/hair/26.jpg');
hairArray24[9] = loadImage('assets/hair/27.jpg');
hairArray24[10] = loadImage('assets/hair/28.jpg');
  
btlArray[0] = loadImage('assets/btl/1.png');
btlArray[1] = loadImage('assets/btl/2.png');
btlArray[2] = loadImage('assets/btl/3.png');
btlArray[3] = loadImage('assets/btl/4.png');
btlArray[4] = loadImage('assets/btl/5.png');
btlArray[5] = loadImage('assets/btl/6.png');
btlArray[6] = loadImage('assets/btl/7.png');
btlArray[7] = loadImage('assets/btl/8.png');
btlArray[8] = loadImage('assets/btl/9.png');
btlArray[9] = loadImage('assets/btl/10.png');
btlArray[10] = loadImage('assets/btl/11.png');
btlArray[11] = loadImage('assets/btl/12.png');
btlArray[12] = loadImage('assets/btl/13.png');
btlArray[13] = loadImage('assets/btl/14.png');
btlArray[14] = loadImage('assets/btl/15.png');
btlArray[15] = loadImage('assets/btl/16.png');
btlArray[16] = loadImage('assets/btl/17.png');
btlArray[17] = loadImage('assets/btl/18.png');
btlArray[18] = loadImage('assets/btl/19.png');
btlArray[19] = loadImage('assets/btl/20.png');
btlArray[20] = loadImage('assets/btl/21.png');
btlArray[21] = loadImage('assets/btl/22.png');
btlArray[22] = loadImage('assets/btl/23.png');
btlArray[23] = loadImage('assets/btl/24.png');
btlArray[24] = loadImage('assets/btl/25.png');
btlArray[25] = loadImage('assets/btl/26.png');
btlArray[26] = loadImage('assets/btl/27.png');
}

function setup() {
  let canvas =createCanvas(850,600);
  background(255)
  canvas.parent("canvoid");
  ellipseMode(CENTER);
  rectMode(CENTER);
  stroke(0);
  textAlign(CENTER);

  let button22 = createButton("Aug-Dec 2022");
  button22.parent("buttoid");
  button22.mousePressed(hair22);

  let button23 = createButton("Jan-Dec 2023");
  button23.parent("buttoid");
  button23.mousePressed(hair23);

  let button24 = createButton("Jan-Oct 2024");
  button24.parent("buttoid");
  button24.mousePressed(hair24);
  
  let btlbutton = createButton("Roll for some beetles?");
  btlbutton.parent("buttoid");
  btlbutton.mousePressed(beetle);
  
  let txtbutton = createButton("Those anecdotes you ordered");
  txtbutton.parent("buttoid");
  txtbutton.mousePressed(anecdote);
  }

function draw() {
  noStroke();
  image(corkboard,0,0,850,600);
  rect(150,145,250,300)
  rect(700,145,250,300)
  rect(425,450,250,300)
  
  fill(255);
image(hairArray22[hairIndex22],37,15,225,225);  
image(hairArray23[hairIndex23],312,315,225,225); image(hairArray24[hairIndex24],587,15,225,225);
image(btlArray[btlIndex],285,160,300,300)
image(btlArray[btlIndex],145,75,300,300)
image(btlArray[btlIndex],430,75,300,300)
}

function hair22(){
     hairIndex22++;
  if (hairIndex2 > hairArray2.length-1){
    hairIndex22= 0;
  }
}


function hair23(){
     hairIndex23++;
  if (hairIndex23 > hairArray23.length-1){
    hairIndex23 = 0;
  }
}
function hair24(){
 hairIndex24++;
  if (hairIndex24 > hairArray24.length-1){
    hairIndex24 = 0;
  }}

function beetle(){
 btlIndex = int(random(btlArray.length))
}

function anecdote(){
  window.open('https://docs.google.com/spreadsheets/d/16Nd9rQ_LxNIICAClSrVQm2_YPmG7liqdsE0Uk2GojhE/edit?usp=sharing');
}


