function ejer1(){
    z=parseInt(document.getElementById("z").value);
    a1=(0.4*(z**(4)))+(3.1*(z**(2)))-(162.3*(z**(1)))-(80.7)
    b1=((z**3)-23)/(((z**2)+17.5)**(1/3))
    document.getElementById("rs-a1").textContent=`Respuesta: ${a1}`;
    document.getElementById("rs-b1").textContent=`Respuesta: ${b1}`;
}
function ejer2(){
    t=parseInt(document.getElementById("t").value);
    a2=((1/2)*((Math.E)**(2*t)))-((3.81)*(t**3))
    b2=((6*(t**2))+(6*t)-(2))/((t**2)-(1))
    document.getElementById("rs-a2").textContent=`Respuesta: ${a2}`;
    document.getElementById("rs-b2").textContent=`Respuesta: ${b2}`;
}
function ejer3(){
    x=parseInt(document.getElementById("x").value);
    y=parseInt(document.getElementById("y").value);
    a3=(((x**2)+(y**2))**(2/3))+((x*y)/(y-x))
    b3=(((x+y)**(1/2))/((x-y)**2))+((2)*(x**2))-((x)*(y**2))
    document.getElementById("rs-a3").textContent=`Respuesta: ${a3}`;
    document.getElementById("rs-b3").textContent=`Respuesta: ${b3}`;
}
function ejer4(){
    c=parseInt(document.getElementById("c").value);
    d=parseInt(document.getElementById("d").value);
    a=(c)*(d**2)
    b=(c+a)/(c-d)
    a4=((Math.E)**(d-b))+((c+a)**(1/3))-((c*a)**(d))
    b4=(d/c)+((c/b)**(2))-((c)**(d))-(a/b)
    document.getElementById("rs-a4").textContent=`Respuesta: ${a4}`;
    document.getElementById("rs-b4").textContent=`Respuesta: ${b4}`;
}
function ejer5(){
    w=parseInt(document.getElementById("w").value);
    r=(w*(Math.PI))/(180)
    a5l=((Math.cos(r))**(2))-((Math.sin(r))**(2))
    a5r=1-((2)*((Math.sin(r))**(2)))
    b5l=(Math.tan(r))/((Math.sin(r))-((2)*(Math.tan(r))))
    b5r=1/((Math.cos(r))-(2))
    document.getElementById("rs-a5l").textContent=`cos(x)^2-sen(x)^2 = ${a5l}`;
    document.getElementById("rs-a5r").textContent=`1-2sen(x)^2 = ${a5r}`;
    document.getElementById("rs-b5l").textContent=`tan(x)/sen(x)-2tan(x) = ${b5l}`;
    document.getElementById("rs-b5r").textContent=`1/cos(x)-2 = ${b5r}`;
}

function lmp1(){
    document.getElementById("z").value="";
    document.getElementById("rs-a1").textContent="Respuesta:";
    document.getElementById("rs-b1").textContent="Respuesta:";
}
function lmp2(){
    document.getElementById("t").value="";
    document.getElementById("rs-a2").textContent="Respuesta:";
    document.getElementById("rs-b2").textContent="Respuesta:";
}
function lmp3(){
    document.getElementById("x").value="";
    document.getElementById("y").value="";
    document.getElementById("rs-a3").textContent="Respuesta:";
    document.getElementById("rs-b3").textContent="Respuesta:";
}
function lmp4(){
    document.getElementById("c").value="";
    document.getElementById("d").value="";
    document.getElementById("rs-a4").textContent="Respuesta:";
    document.getElementById("rs-b4").textContent="Respuesta:";
}
function lmp5(){
    document.getElementById("w").value="";
    document.getElementById("rs-a5l").textContent="cos(x)^2-sen(x)^2 =";
    document.getElementById("rs-a5r").textContent="1-2sen(x)^2 =";
    document.getElementById("rs-b5l").textContent="tan(x)/sen(x)-2tan(x) =";
    document.getElementById("rs-b5r").textContent="1/cos(x)-2 =";
}