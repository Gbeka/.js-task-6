const body=document.body;
body.style.backgroundColor="hsl(217, 54%, 11%)";

const wrapper=document.getElementById("wrapper");

const div=document.createElement("div");
wrapper.appendChild(div);
div.style.backgroundColor="hsl(216, 50%, 16%)";
div.style.margin="auto";
div.style.width="290px";
div.style.height="490px";
div.style.backgroundPosition="center";
div.style.marginTop="100px";
div.style.borderRadius="10px";
div.style.fontWeight="300 400 600";

const img=document.createElement("img");
img.setAttribute("src","./images/1.jpg");
div.appendChild(img);
img.style.width="247px";
img.style.margin="10px 10px 50px 20px";
img.style.height="240px";
img.style.borderRadius="10px";

const text1=document.createElement("h1");
div.appendChild(text1);

const textNode1 = document.createTextNode("Equilibrium #3429");
text1.appendChild(textNode1);
text1.style.color=" hsl(0, 0%, 100%)";
text1.style.fontSize="18px";
text1.style.margin="-30px 10px 10px 20px";

const text2=document.createElement("h2");
div.appendChild(text2);
const textNode2 = document.createTextNode("Our Equilibrium collection promotes balance and calm");
text2.appendChild(textNode2);
text2.style.color=" hsl(0, 0%, 100%)";
text2.style.fontSize="14px";
text2.style.color="hsl(215, 51%, 70%)";
text2.style.margin="20px 20px";

const text34=document.createElement("div");
div.appendChild(text34);
text34.style.display="flex";
text34.style.justifyContent="space-between";
text34.style.margin="20px 20px";
text34.style.borderBottom="1px solid hsl(215, 51%, 70%)";

const ikon1=document.createElement("img");
ikon1.setAttribute("src","./images/ikon1.svg");
text34.appendChild(ikon1);
ikon1.style.height="20px";
ikon1.style.margin="8px -80px 0px 0px";

const text3=document.createElement("h2");
text34.appendChild(text3);

const textNode3 = document.createTextNode("0.041ETH");
text3.appendChild(textNode3);
text3.style.color="hsl(178, 100%, 50%)";
text3.style.fontSize="14px";

const ikon2=document.createElement("img");
ikon2.setAttribute("src","./images/icon-clock.svg");
text34.appendChild(ikon2);
ikon2.style.height="20px";
ikon2.style.margin="12px -80px 0px 0px";

const text4=document.createElement("h3");
text34.appendChild(text4);
const textNode4 = document.createTextNode("3 days left");
text4.appendChild(textNode4);
text4.style.color="hsl(215, 51%, 70%)";
text4.style.fontSize="14px";

const text56=document.createElement("div");
div.appendChild(text56);
text56.style.display="flex";
text56.style.fontSize="10px";
text56.style.justifyContent="center";

const avatar=document.createElement("img");
avatar.setAttribute("src","./images/2.png");
text56.appendChild(avatar);
avatar.style.width="34px";
avatar.style.margin="-10px 10px 20px -50px";
avatar.style.border="1px solid white";
avatar.style.borderRadius="40px";

const text5=document.createElement("h3");
text56.appendChild(text5);
const textNode5 = document.createTextNode("Creation of");
text5.appendChild(textNode5);
text5.style.color="hsl(215, 51%, 70%)";
text5.style.margin="0px 5px";

const text6=document.createElement("h3");
text56.appendChild(text6);
const textNode6 = document.createTextNode("Jules Wyvern");
text6.appendChild(textNode6);
text6.style.color=" hsl(0, 0%, 100%)";
text6.style.margin="0px 5px";

alert("Я оцениваю свою работу на 100 баллов");