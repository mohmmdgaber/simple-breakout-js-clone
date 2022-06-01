class particle {
    constructor(x,y) {
      this.visible=true;
      this.data={};
      this.x=x;
      this.y=y;
    }
    getdata() {
        return this.data
     }
     setdata(data)
     {
         this.data=data;
     }
     getvisible() {
         return this.visible
     }
     setvisible(bool){
         this.visible=bool
     }
     getx() {
        return this.x
     }
     gety() {
        return this.y
     }
     setx(num){
        this.vecx=num
    }
    sety(num){
        this.y=num
    }


  }
class bigball{
    constructor() {
        this.vecx=3;
        this.vecy=-3;
        putredball();
        var cors=document.getElementById('redball').getBoundingClientRect();

        this.x=cors['x'];
        this.y=cors['y'];

      }
      getvecx() {
        return this.vecx
     }
     getvecy() {
        return this.vecy
     }
     setvecx(num){
         this.vecx=num
     }
     setvecy(num){
         this.vecy=num
     }

     getx() {
        return this.x
     }
     gety() {
        return this.y
     }
     incx(num){
         this.x=this.x+num;
         return this.x;

     }
     incy(num){
        this.y=this.y-num;
        return this.y;
     }
    
}
class bluebar{
    constructor() {
        putbluebar()
        var cors=document.getElementById('bluebar').getBoundingClientRect();
        this.x=cors['x'];
        this.y=cors['y'];

      }
      getx() {
        return this.x
     }
     gety() {
        return this.y
     }
     sety(num){
         this.y=num;
     }
     inc(num){
        if (this.x+num+140>=(mainpagebox.x+mainpagebox.width)){
        this.x=mainpagebox.x+mainpagebox.width-2-140;
        return this.x;
        }
        
        if(this.x+num<=mainpagebox.x)
        {
        this.x=mainpagebox.x+2;
        return this.x;
        }
        this.x=this.x+num;
        return this.x;

    }


}
function constructballs(row){
    width=getcolumn();
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < width; j++)
        {
            balls.push(new particle(i, j))
        }
    }

}
function putredball()
{
    id='redball';
    cls='bigball';
    con="<div id=\""+id+ "\"class=\""+cls+"\"></div>";
    document.getElementById('mainpage').innerHTML+=con;
    c=document.getElementById('mainpage').getBoundingClientRect();
    console.log(c);
    xcor=c['left']+(c['width']/2);
    ycor=c['bottom']-(c['height']/10);
    console.log(xcor)
    dott=document.getElementById('redball');
    dott.style.position = "absolute";
    dott.style.left=String(xcor)+'px';
    dott.style.top=String(ycor)+'px';
}
function putbluebar()
{
    id='bluebar';
    cls='bluebar';
    con="<div id=\""+id+ "\"class=\""+cls+"\"></div>";
    document.getElementById('mainpage').innerHTML+=con;
    c=document.getElementById('mainpage').getBoundingClientRect();
    console.log(c);
    xcor=c['left']+(c['width']/4);
    ycor=c['bottom']-(c['height']/12);
    console.log(xcor)
    dott=document.getElementById('bluebar');
    dott.style.position = "absolute";
    dott.style.left=String(xcor)+'px';
    dott.style.top=String(ycor)+'px';
}
function getcolumn(){
    var bigbox=document.getElementById("mainpage")
    boxwid=bigbox.clientWidth;
    ballinrow=parseInt(boxwid/70);
    return ballinrow
}
function showballs(){
    document.getElementById('mainpage').innerHTML=''
    var bigbox=document.getElementById("mainpage")
    var ball="<div class=\"dot\"></div>";
    ballinrow=getcolumn()
    console.log(ballinrow);
    bigbox.style['grid-template-columns']='auto '.repeat(ballinrow);
    bigbox.style['padding']='2%';
    bigbox.style['padding-bottom']='20%';

    for (var i in balls) {
        id=String(balls[i].gety())+','+String(balls[i].getx());
        sts=balls[i].getvisible()
        if (sts==true){
            cls="dot";
        }
        else{
            cls="empdot";
        }
        con="<div id=\""+id+ "\"class=\""+cls+"\"></div>";
        document.getElementById('mainpage').innerHTML+=con;
      }



}

function updateids(){
    l=new Array()
    for (var i in balls){
        id=String(balls[i].gety())+','+String(balls[i].getx());
        bindingbox=document.getElementById(id).getBoundingClientRect()
        id=String(bindingbox.y)+','+String(bindingbox.x);
        l.push(id);
        balls[i].setdata(bindingbox);
    }
    document.getElementById('mainpage').innerHTML=''
    for (var i in balls) {
        id=l[i]
        sts=balls[i].getvisible()
        if (sts==true){
            cls="dot";
        }
        else{
            cls="empdot";
        }
        con="<div id=\""+id+ "\"class=\""+cls+"\"></div>";
        document.getElementById('mainpage').innerHTML+=con;
      }


}
function updatedots(){
    for (var i in balls) {
        if (balls[i].getvisible()==false)
        {
            id=String(balls[i].gety())+','+String(balls[i].getx());
            document.getElementById(id).className ="empdot";
        }

    }
}
function updaterandomdots(num){
    for (var i in balls) {
        k=Math.floor(Math.random() * 10);
        if (k==num){
            id=String(balls[i].gety())+','+String(balls[i].getx());
            balls[i].setvisible(false);
        }
    }
    


}

function bigballphysics()
{
    while(true){


    }

}
function getmov(big){
    veccx=big.getvecx();
    veccx=big.getvecy();
    return (Math.sqrt((veccx * veccx) + (veccx * veccy)));



}
function incmov(big){
    
    dott=document.getElementById('redball');
    dott.style.position = "absolute";
    dott.style.left=String(big.incx(big.getvecx()))+'px';
    dott.style.top=String(big.incy(big.getvecy()))+'px';



}
function incmovbar(bar,mov){
    
    dott=document.getElementById('bluebar');
    dott.style.position = "absolute";
    dott.style.left=String(bar.inc(mov))+'px';
    dott.style.top=String(bar.gety())+'px';





}
function isCollide(ball,box) {
      

    return (
        ((ball.gety() ) < (box.y)) ||
        (ball.gety() +20> (box.y + box.height)) ||
        ((ball.getx() ) < box.x) ||
        (ball.getx()+20 > (box.x + box.width))
    );
}
function isCollideballs(ball,box) {
    midpoix=box.x+25;
    midpoiy=box.y+25;
    midpoiredx=ball.getx()+10;
    midpoiredy=ball.gety()+10;
    x=midpoix-midpoiredx;
    y=midpoiy-midpoiredy;
    
    if(10+25>=Math.sqrt(x*x + y*y))
    {

        return true;
    }
    return false;


}
function collideswithballs(ball){
    for (var i in balls) {

        if (isCollideballs(ball,balls[i].getdata()) && balls[i].getvisible()==true){
            balls[i].setvisible(false);
            flipnormalballs(ball,balls[i].getdata());
           
        }
    }


    

}
function flipnormal(ball,box){
    if ((ball.gety()+20>=(box.y + box.height))|| ((ball.gety() ) <= (box.y)))
    {
        ball.setvecy(ball.getvecy()*-1)


    }
    if(((ball.getx() ) <= box.x) || (ball.getx()+20 >= (box.x + box.width)))
    {
        ball.setvecx(ball.getvecx()*-1)

    }

}
function flipnormalballs(ball,box){
    midpoix=box.x+25;
    midpoiy=box.y+25;
    midpoiredx=ball.getx()+10;
    midpoiredy=ball.gety()+10;
    x=midpoix-midpoiredx;
    y=midpoiy-midpoiredy;
    kk=Math.sin(y/x);
    kky=Math.PI-kk;
    ball.setvecy(-kky*1);
    ball.setvecx(kk*1);
    removewhiteball(box.x,box.y);


}
function removewhiteball(x,y){
    id=String(y)+','+String(x);
    document.getElementById(id).className ="empdot";

}
function collideswithbar(ball,box){

    return (
         ((ball.gety()+20 ) > (box.gety())) &&
        ((ball.getx() ) < box.getx()+140) &&
        ((ball.getx() ) > box.getx())

    );
}
function flipballbar(ball,box){
    boxmiddle=box.getx()+70;
    x=boxmiddle-ball.getx();
    console.log(x);
    y=70;
    kk=Math.sin(y/x);
    kky=Math.PI-kk;
    ball.setvecy(kky*1);
    if(x>0)
    {
        ball.setvecx(kky*-1);
    }
    else{
        ball.setvecx(kky*1);
    }


}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function test() {
    console.log('start timer');
    while(true){

        await delay(10);
        if (isCollide(bigball,mainpagebox)){
            flipnormal(bigball,mainpagebox)

        }
        if(collideswithballs(bigball))
        {
            break;

        }
        if (collideswithbar(bigball,bluebar)){
            console.log('barcollide');
            flipballbar(bigball,bluebar)


        }
        if(document.getElementById('fs').checked == true){
            incmovbar(bluebar,-5);

        }
        else{
            incmovbar(bluebar,5);


        }
  
 

        incmov(bigball)





    }

  }

function buildgame(num)
{
    balls=new Array()
    constructballs(num);
    showballs();
    updateids();
    bigball= new bigball();
    bluebar= new bluebar();
    mainpagebox=document.getElementById('mainpage').getBoundingClientRect();
    
    
    
    
    test();


}

function layout(){
    rownum=Number(document.getElementById("rownum").value);
    buildgame(rownum)

}

