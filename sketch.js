var num1,num2;
var n1,n2;
var b1,b2,b3,b4;

function setup() {
  createCanvas(400,400);
  num1 = createInput ();
  num1.position(5,60);
  num2 = createInput ();
  num2.position(200, 60);

  b1 = createButton ("ADD");
  b1.position (10,100);
  b1.mousePressed (add);


}

function draw() 
{
  background(30);
n1 = parseInt (num1.value());
n2 = parseInt (num2.value());
}


function add () {

  console.log (n1+n2);
}

