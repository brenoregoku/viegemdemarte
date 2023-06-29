canvas= document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
imagensArray=["img0.jpg","img1.jpg","img2_.jpg","img3.jpg"];
randomnumber = Math.floor(Math.random() * 4);
console.log(randomnumber);
rowerHeight=90;
rowerWidth=100;
backgroundImage=imagensArray[randomnumber];
console.log("backgroundImage = " + backgroundImage);
rowerImage="rover.png"
rowerx=10;
rowery=10;

function add(){
    backgroundImgTag = new Image(); // carregar a imagem
//definindo uma variável com uma nova imagem 
    backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável 
    backgroundImgTag.src = backgroundImage; //
    rowerImgTag = new Image(); //definindo uma variável com uma nova imagem 
    rowerImgTag.onload = uploadrower; // ajustando uma função, ao carregar essa variável 
    rowerImgTag.src = rowerImage; // carregar a imagem 
}
function uploadBackground() {
ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height); }
function uploadrower() {
ctx.drawImage(rowerImgTag, rowerx, rowery, rowerWidth, rowerHeight); }


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
     console.log(keyPressed);

     if(keyPressed=='38'){
        up();
        console.log("cima");
     }
     if(keyPressed=='40'){
        down();
        console.log("baixo");
     }
     if(keyPressed=='37'){
        left();
        console.log("esquerda");
     }if(keyPressed=='39'){
        right();
        console.log("direita");
     }

}
function up()
{
   if(rowery >=10)
   {
      rowery = rowery-10;
      console.log("Quando a seta para cima é pressionada, x = " + rowerx + " | y = " +rowery);
      uploadBackground();
      uploadrower();
   }
}
function down()
{
   if(rowery <=500)
   {
      rowery = rowery+10;
      console.log("Quando a seta para baixo é pressionada, x = " + rowerx + " | y = " +rowery);
      uploadBackground();
      uploadrower();
   }
}
function left()
{
   if(rowerx >=10)
   {
      rowerx = rowerx-10;
      console.log("Quando a seta para esquerda é pressionada, x = " + rowerx + " | y = " +rowery);
      uploadBackground();
      uploadrower();
   }
}
function right()
{
   if(rowerx<=690)
   {
      rowerx = rowerx +10;
      console.log("Quando a seta para direita é pressionada, x = " + rowerx + " | y = " +rowery);
      uploadBackground();
      uploadrower();
   }
}