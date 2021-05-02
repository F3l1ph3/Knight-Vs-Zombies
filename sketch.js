///////////////////////////////////////////GLOBAL VARIABLES
 
var tela = 0;
var plataformaFloresta = [];
var plataformaDeserto = [];

////////TEXT FONTS

var textos = [];

/////////////////////////////////////////////CLOSE GLOBAL VARIABLES

////////////////////////////////////////////////////SETUP - DRAWN
function setup(){
  createCanvas(640, 420);
  playSound();
}

function draw(){ 
  gravity();
//////////MENU - TELA 0
  if(tela == 0){
    menu();
    playSound();
  }
//////////TELA 0.1
  if(vOpcoes == true){
    opcoes();
  }
//////////TELA 0.2 - AJUDA
  if(tela == 0.2){
    ajuda();
    playSound();
  }

//////////TELA 0.3 - CRÉDITOS
  if(tela == 0.3){
    creditos();
    playSound();
  }
  
//////////FASE 1 - TELA 1
  if(tela === 1){
    fase1();
    playSound();
  }
  
/////////GAME OVER
  if(tela === 2){
    gameOver();
  }
/////////WIN
  if(tela ===3){
    win();
  }
}
//////////////////////////////////////////////CLOSE SETUP - DRAW

//////////////////////////////////////////////TELA 0 - MENU

var fundoMenu;

var speedBGmenu = 0;
var speedPLmenu = 0;
var speedSCmenu = 0;

var scenaryForestElements = [];
var t = true;
var rTx;
var rT1x;
var rFx;
var rF1x;
var rF = 1;
var rF1 = 2;

var menuSoundSelect;
var menuBGSound;
var menuSSound;
var menuEfect = true
var menuEfect1 = true

////////////////////////////////////////

function menu(){
//////////////////////BACKGROUND FLORESTA - MENU
/////////VELOCIDADE - FUNDO DO MENU
  speedBGmenu += width/640;
////////////////////////////////////////////////
  
  imageMode(CENTER);
  for( i = 0; i < 2; i++){
    image(fundoMenu,  ((width/2)-i*width)+speedBGmenu, height/2, width, height);
  }
  if(speedBGmenu >= width){
    speedBGmenu = 0;
  }
  
///////////////////PLATAFORMAS - MENU 
////////VELOCIDADE PLATAFORMAS  
  speedPLmenu += width/160;
//////////////////////////////////////////////// 
  
  for(c = 0; c < 7; c++){
    image(plataformaFloresta[1], (width-c*(width/5))+speedPLmenu, height, width/5, height/2.6);
  }
  if(speedPLmenu >= width/5){
    speedPLmenu = 0;
  }
  
////////////////////OBSTACULOS DO CENÁRIO - MENU
/////////////VELOCIDADE OBSTÁCULOS
  speedSCmenu += width/160;
//////////////////////////////////////////////////
  
  imageMode(CENTER);
  if(t === true){
    rTx = random(-width,-width/2);
    rT1x = random(-width/2,-width/9);
    rFx = random(-width/2,-width/9);
    rF1x = random(-width,-width/2);
    t = false;
  }
  if(speedSCmenu >= 2.2*width){
    speedSCmenu = 0;
    rF = parseInt(random(4));
    rF1 = parseInt(random(4));
    t = true;
  }
  
////////////////////////////////////LAYERS - CENÁRIO
//////////ÁRVORE
  image(scenaryForestElements[4] , rTx+speedSCmenu, height/1.795, width/5, height/2);
  
/////////FLORES
  image(scenaryForestElements[rF], rFx+speedSCmenu, height/1.49, width/4.5, height/3.64);
  
////////////////////KNIGHT ANIMATION - MENU
//////////    x           y          w       h     speed
  runLeft(width/1.2, height/1.4, width/6, height/3, 0.25);

/////////FLORES - 1
  image(scenaryForestElements[rF1], rF1x+speedSCmenu, height/1.47, width/4.5, height/3.5);
  
/////////ÁRVORE - 1 
  image(scenaryForestElements[5] , rT1x+speedSCmenu, height/2.045, width/5, height/1.5);

/////////////////////////////////CLOSE LAYERS  
  
/////////////////////////////////BOTÕES DO MENU
/////////////PREDEFINIÇÕES
  if( vOpcoes === false){ 
    noStroke();
    if(mouseX < width/3 || mouseX > width/3 + width/3 || mouseY < height/5 || mouseY > height/5 + height/9){
     menuEfect = true
    }
    if(mouseX < width/2.8 || mouseX > width/2.8 + width/3.5 || mouseY < height/3 || mouseY > height/3 + height/10){
     menuEfect1 = true
    }
////////////////////BOTÃO INICIAR
///////MOUSE DETECTION
    if(mouseDcontrol == true){
      if( mouseX > width/3 && mouseX < width/3 + width/3 && mouseY > height/5 && mouseY < height/5 + height/9){
        strokeWeight(10);
        stroke(200, 255, 0);
        if(menuEfect == true){
          menuSSound.play()
          menuEfect = false
        }
        if(mouseIsPressed){
          if(mouseButton == LEFT){
            tecladoMenu = false;
            menuSoundSelect.play()
            lifeCounter = 3 //vida
            correctQuestion1 = false //zombie 1
            correctQuestion2 = false //zombie2
            whicFrameDieK = 0 //animação de morte
            points = 0 // pontos
            movimentoXfase1 = 0 // posição inicial
            gravityY = 0 // posição inicial
            whicFrameDieLZ = 0 //Zombie die reset
            whicFrameDieLZ2 = 0 //Zombie die reset
            //ajustes de gravidade
            jumpCounter = 0
            jump = false;
            direction = 1
            velocity = 2
            jumpPower = 12
            fallingSpeed = 5
            minHeight = 0
            maxHeight = -800
            counterSoundZombie = 120
            counterSoundZombie2 = 1800
            tela = 1 // fase 1
          }
        }
      } 
    }
    fill(200, 255, 0);
    rect(width/3, height/5, width/3, height/9, 20);
    fill(255); 
    noStroke();
///////////////////////BOTÃO OPÇÕES
///////MOUSE DETECTION
    if(mouseDcontrol == true){
      if( mouseX > width/2.8 && mouseX < width/2.8 + width/3.5 && mouseY > height/3 && mouseY < height/3 + height/10){
        strokeWeight(10);
        stroke(50, 150, 50);
        if(menuEfect1 == true){
          menuSSound.play()
          menuEfect1 = false
        }
        if(mouseIsPressed){
          if(mouseButton === LEFT){
            vOpcoes = true;
            tecladoMenu = false;
            menuSoundSelect.play()
          }
        }
      }
    }
    fill(50, 150, 50);
    rect(width/2.8, height/3, width/3.5, height/10, 20);
    textSize(width/20);
    fill(255);
    noStroke();
    image(textos[3],width/2, height/4, width/5, height/12)
    image(textos[7],width/2, height/2.6, width/5, height/12)
  }  
/////////////////BOTÔES TECLADO
///////INICIAR
  if(tecladoMenu == true){
    if(tecladoC == 1){
      strokeWeight(10);
      stroke(200, 255, 0);
      noFill();
      rect(width/3, height/5, width/3, height/9, 20);
    }
////////OPÇÕES
    if(tecladoC == 2){
      strokeWeight(10);
      stroke(50, 150, 50);
      noFill();
      rect(width/2.8, height/3, width/3.5, height/10, 20);
    }
  }

  
/////////////////VOLTAR MOUSE DETECTION
  if( (mouseX > width/2.8 && mouseX < width/2.8 + width/3.5 && mouseY > height/3 && mouseY < height/3 + height/11) || ( mouseX > width/3 && mouseX < width/3 + width/3 && mouseY > height/5 && mouseY < height/5 + height/9) ){
    mouseDcontrol = true;
    tecladoMenu = false;
    tecladoC = 0;
  }else{
    mouseDcontrol = false;
  }
}

////////////////////////////////////////CLOSE TELA 0 - MENU

///////////////////////////////////////PLAY SOUND

var counterSoundZombie = 120
var counterSoundZombie2 = 1800
var victoryS = true
var failS = true
function playSound(){
  
  if(tela === 0 && menuBGSound.isPlaying() || tela === 0.2 && menuBGSound.isPlaying() || tela === 0.3 && menuBGSound.isPlaying()){
  
  }else{
    if(tela === 0 || tela === 0.2 || tela === 0.3){
      menuBGSound.play(0.2);
    }
  }
  if(tela != 0 && tela != 0.2 && tela != 0.3){
    menuBGSound.stop();
  }
////////////////////LEVEL 1
  if(tela === 1 && soundLevel1.isPlaying() || tela === 3 && soundLevel1.isPlaying() ){
    
  }else{
    if(tela === 1 || tela === 3){
      soundLevel1.play()
    }
  }
  if(tela != 1 && tela != 3){
    soundLevel1.stop()
  }
////////////ZOMBIES
  if(correctQuestion1 === true){
    soundZombie.stop();
  }else{
    if(tela === 1 && soundZombie.isPlaying()){
      
    }else{
      if(tela ===1 && counterSoundZombie === 0){
        soundZombie.play()
      }else{
        soundZombie.stop();
      }
    }
  }
  if(counterSoundZombie > 0){
    counterSoundZombie--
  }else{
    counterSoundZombie = 3600
  }
////////
  if(correctQuestion2 === true){
    soundZombie2.stop();
  }else{
    if(tela === 1 && soundZombie2.isPlaying()){
      
    }else{
      if(tela ===1 && counterSoundZombie2 === 0){
        soundZombie2.play()
      }else{
        soundZombie2.stop();
      }
    }
  }
  if(counterSoundZombie2 > 0){
    counterSoundZombie2--
  }else{
    counterSoundZombie2 = 3600
  }
/////////////VICTORY SOUND
  if(tela === 3 && victoryS === true){
    victorySound.play()
    victoryS = false
  }else{
    if(tela != 3){
      victorySound.stop()
    }
  }
/////////////FAIL SOUND
  if(tela === 2 && failS === true){
    failSound.play()
    failS = false
  }else{
    if(tela != 2){
      failSound.stop()
    }
  }

///////////////////////VOLUME INICIAL - MUSICA
  if( volumeX === 0){
    volumeX = width/1.54;
    volumeConvert = map(volumeX, width/2, width/1.25, 0, 1);
  }
/////////////////MUSICAS
  menuBGSound.setVolume(volumeConvert);
  soundLevel1.setVolume(volumeConvert);
//////////////////////VOLUME INICIAL - SFX
  if(sfxX === 0){
    sfxX = width/1.25;
    sfxConvert = map(sfxX, width/2, width/1.25, 0, 1);
  }
////////////////SFX
  menuSSound.setVolume(sfxConvert)
  menuSoundSelect.setVolume(sfxConvert)
  soundZombie.setVolume(sfxConvert)
  soundZombie2.setVolume(sfxConvert)
  failSound.setVolume(sfxConvert)
  victorySound.setVolume(sfxConvert)
}

//////////////////////////////////////CLOSE PLAYSOUND

////////////////////////////////////////KEY PRESSED

/////////////////////////////////VARIÁVEIS DO KEYPRESSED - MENU

var tecladoC = 0;
var tecladoMenu = true;
var mouseDcontrol = true;

var tecladoC1 = 0
var tecladoOp = false;
var mouseDcontrol1 = false;

////////////////////////////////

function keyPressed(){

/////////////////////////////////////////KEYPRESSED - MENU
//////////////OPÇÕES - ON/ MENU CONTROL - OFF
  if(vOpcoes === false && mouseDcontrol === false && tela === 0){
    tecladoMenu = true;
  }else{
    tecladoMenu = false
  }
///////////////////TECLADO DETECTION - UP/DOWN
  if(tecladoMenu == true){
    if(keyIsPressed){
      mouseDcontrol = false;
      if(keyCode == DOWN_ARROW && tecladoC < 2){
        tecladoC++;
        menuSSound.play()
      } 
      if(keyCode == UP_ARROW && tecladoC > 1){
        tecladoC--;
        menuSSound.play()
      }
    }
//////////////////TECLADO DETECTION - ENTER
    if(tecladoC == 1){
      if(keyIsPressed){
        if(keyCode == ENTER){
          tecladoMenu = false;
          menuSoundSelect.play()
          tecladoMenu = false;
          menuSoundSelect.play()
          lifeCounter = 3 //vida
          correctQuestion1 = false //zombie 1
          correctQuestion2 = false //zombie2
          whicFrameDieK = 0 //animação de morte
          points = 0 // pontos
          movimentoXfase1 = 0 // posição inicial
          gravityY = 0 // posição inicial
          whicFrameDieLZ = 0 //Zombie die reset
          whicFrameDieLZ2 = 0 //Zombie die reset
          //ajustes de gravidade
          jumpCounter = 0
          jump = false;
          direction = 1
          velocity = 2
          jumpPower = 12
          fallingSpeed = 5
          minHeight = 0
          maxHeight = -800
          victoryS = true
          failS = true
          tela = 1 // fase 1
        }
      }
    }
    if(tecladoC == 2){
      if(keyIsPressed){
        if(keyCode == ENTER){
          vOpcoes = true;
          tecladoMenu = false;
          menuSoundSelect.play()
        }
      }
    }
  }
///////////////////////////////////CLOSE KEY PRESSED - MENU
  
/////////////////////////////////// KEY PRESSED - OPÇÕES
  if( vOpcoes == true && mouseDcontrol1 == false){
    if(keyIsPressed){
      if(keyCode == DOWN_ARROW && tecladoC1 < 3){
        tecladoC1++
        menuSSound.play()
      }
      if(keyCode == UP_ARROW && tecladoC1 > 1 && tecladoC1 < 4){
        tecladoC1--
        menuSSound.play()
      }
      if(keyCode == LEFT_ARROW && tecladoC1 == 4){
        tecladoC1--
        menuSSound.play()
      }
      if(keyCode == RIGHT_ARROW && tecladoC1 == 3){
        tecladoC1++
        menuSSound.play()
      }
      if(tecladoC1 == 1){
        if(keyIsPressed){
          if(sfxX <= width/1.25 && sfxX > width/2){
            if(keyCode == LEFT_ARROW){
              sfxX -= width/20
              if(sfxX < width/2){
                sfxX = width/2
              }
            }
          }
          if(sfxX < width/1.25 && sfxX >= width/2){
            if(keyCode == RIGHT_ARROW){
              sfxX += width/20
              if(sfxX > width/1.25){
                sfxX = width/1.25
              }
            }
          }
        }
      }
      if(tecladoC1 == 2){
        if(keyIsPressed){
          if(volumeX <= width/1.25 && volumeX > width/2){
            if(keyCode == LEFT_ARROW){
              volumeX -= width/20
              if(volumeX < width/2){
                volumeX = width/2
              }
            }
          }
          if(volumeX < width/1.25 && volumeX >= width/2){
            if(keyCode == RIGHT_ARROW){
              volumeX += width/20  
              if(volumeX > width/1.25){
                volumeX = width/1.25
              }
            }
          }
        } 
      }
      if(tecladoC1 == 3){
        if(keyIsPressed){
          if(keyCode == ENTER){
            tela = 0.2
            menuSoundSelect.play()
          }
        }
      }
      if(tecladoC1 == 4){
        if(keyIsPressed){
          if(keyCode == ENTER){
            tela = 0.3
            menuSoundSelect.play()
          }
        }
      }
/////////////////////////////////////ESC TELA - 0.1
      if(keyCode === ESCAPE && vOpcoes === true){
        tecladoC1 = 0;
        tecladoC = 0;
        tecladoMenu = true;
        vOpcoes = false;
        menuSoundSelect.play()
      }
    }
  }
///////////////////////////////////////CLOSE KEYPRESSED - OPÇÕES
  
//////////////////////////////////////KEY PRESSED - CRÉDITOS
//////////////////////////////////////ESC TELA - 0.2
  if(tela === 0.2){
    if(keyCode == ESCAPE){
      tela = 0
      vOpcoes = true
      tecladoC1 = 0
      menuSoundSelect.play()
      subirCreditos = 0
    }
  }
/////////////////////////////////////KEY PRESSED - AJUDA
/////////////////////////////////////ESC TELA - 0.3
  if(tela == 0.3){
    if(keyCode == ESCAPE){
      tela = 0
      vOpcoes = true
      tecladoC1 = 0
      menuSoundSelect.play()
      subirCreditos = 0
    }
  }
  
/////////////////////////////////////KEY PRESSED - FASE 1
  if(tela === 1 && keyIsPressed){
    
/////////////////DESATIVAR POSIÇÃO INICAL

    if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
      posInicial = false
////////////////////LEFT
      if(keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW) == false){
        runLeft(width/6+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
/////////////////VELOCIDADE DO MOVIMENTO
        if(colisionL === false && movimentoXfase1 > -width/6){
          movimentoXfase1 -= width/213.3
        }
/////////////////////
        contadorIdle = 1
        whicFrameIdleL = 0
      }else{
          right1Control = true
          whicFrameRL = 0
        if(keyIsDown(LEFT_ARROW) == true && keyIsDown(RIGHT_ARROW) == true){
////////////RIGHT IDLE
          if(contadorIdle == 0){
            IdleRight(width/5+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
          } 
        }
      } 
///////////////////RIGHT
      if(keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW) == false ){
        runRight(width/5+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
/////////////VELOCIDADE DO MOVIMENTO
        if(colisionR === false && colisionR2 === false &&  movimentoXfase1 < width*2-width/5){
          movimentoXfase1 += width/213.3
        }
/////////////////////
        contadorIdle = 0
        whicFrameIdleR = 0
      }else{ 
          left1Control = true
          whicFrameRR = 0
        if(keyIsDown(LEFT_ARROW) == true && keyIsDown(RIGHT_ARROW) == true){
////////////LEFT IDLE
          if(contadorIdle == 1){
            IdleLeft(width/6+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
          }
        }
      }
    }else{
////////////RIGHT IDLE
      if(contadorIdle == 0){
      IdleRight(width/5+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
      }
////////////LEFT IDLE
      if(contadorIdle == 1){
        IdleLeft(width/6+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
      }
    }
////////////JUMP
    if(tela === 1 && keyIsDown(32) ){
      jump = true
    }else{

    }
  }else{
////////////////////FRAMES RESET - RIGHT/LEFT
    whicFrameRL = 0
    whicFrameRR = 0
/////////////////////////IDLE POSITION
/////////////RIGHT
    if(contadorIdle == 0){
      IdleRight(width/5+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
    }
////////////LEFT
    if(contadorIdle == 1){
      IdleLeft(width/6+movimentoXfase1, height-height/3.5+gravityY, width/6, height/3, 0.25)
    }
  }
}

///////////////////////////////////////CLOSE KEYPRESSED

///////////////////////////////////////GRAVIDADE

///////////////////
var jump = false;
var direction = 1
var velocity = 2
var jumpPower = 12
var fallingSpeed = 5
var minHeight = 0
var maxHeight = -800
var gravityY = 0;
var jumpCounter = 0
///////////////////

function gravity(){
  if(gravityY >= 0 && jump === false && abism === false){
    gravityY = gravityY
    jumpCounter = 0
  }else{
    gravityY = gravityY + direction*velocity
  }
  
  if(jump === true){
    if(gravityY <= maxHeight || jumpCounter >= jumpPower){
      if(gravityY >= minHeight){
        gravityY = minHeight
        jump = false
      }else{
        velocity = fallingSpeed
        jump = false
      }
    }else{
      velocity = -jumpPower
      jumpCounter += 0.7
    }
  }else{
    velocity = fallingSpeed
  }
}

///////////////////////////////////////CLOSE GRAVITY

///////////////////////////////////////TELA 0.1 - OPÇÕES

var vOpcoes = false;
var buttonX;

var volumeX = 0;
var volumeConvert;
var sfxX = 0;
var sfxConvert;

var soundButtonAjuda = true
var soundButtonCreditos = true
var soundButtonX = true

///////////////////////////////////////

function opcoes(){
  
  tecladoMenu = false;
////////////////////////FUNDO OPÇÕES
  fill(20, 100);
  stroke(50, 150, 50);
  strokeWeight(6);
  rect(width/8, height/8, width/(8/6), height/(8/6), 10);
  
/////////////////////////BOTÃO FECHAR OPÇÕES
  if(dist(width/(8/7), height/8, mouseX, mouseY) > (width/30)/2){
     soundButtonX = true
  }
  noStroke();
  fill(255, 0, 0, 250, 190);
  ellipse(width/(8/7), height/8, width/30, width/30);
  imageMode(CENTER);
  image(buttonX, width/(8/7), height/8, width/50, width/50);
  
  if(dist(width/(8/7), height/8, mouseX, mouseY) < (width/30)/2){
    noStroke();
    fill(255, 0, 0);
    ellipse(width/(8/7), height/8, width/25, width/25);
    image(buttonX, width/(8/7), height/8, width/40, width/40);
    if(soundButtonX == true){
      menuSSound.play()
      soundButtonX = false
    }
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        vOpcoes = false;
        tecladoMenu = true;
        menuSoundSelect.play()
        tecladoC = 0
      }
    }
  }
/////////////////////////BOTÃO MUSICA
  
  image(textos[6], width/3.53, height/2.01, width/6, height/14)

///////////////////////BOTÃO SFX
  
  image(textos[8], width/3.53, height/3.13, width/12, height/16)
  
///////////////////////BOTÃO AJUDA
  
  image(textos[0],width/3.1, height/1.41, width/7, height/12)

///////////////////////BOTÃO CRÈDITOS
 
  image(textos[2],width/1.51, height/1.43, width/5, height/14)
  
////////////////////////////SLIDER MUSICA - MOUSE
  if(dist(volumeX, height/2, mouseX, mouseY) < (width/40) && mouseIsPressed && mouseButton == LEFT){
    if(mouseX <= width/1.25 && mouseX >= width/2){ 
      volumeX = mouseX;
    }else{
      if(mouseX <= width/2){
       volumeX = width/2
      }
      if(mouseX >= width/1.25){
      volumeX = width/1.25
      }
    }
    fill(255);
    ellipse(volumeX, height/2, width/35, width/35);
  } 
  
////////////SLIDER BUTTON - MUSICA
  fill(255);
  ellipse(volumeX, height/2, width/40, width/40);
  stroke(255);
  line(width/2, height/2, width/1.25, height/2);
  volumeConvert = map(volumeX, width/2, width/1.25, 0, 1);
  
//////////////////////////////SFX SLIDER - MOUSE
  
  
  noStroke();
  
  if(dist(sfxX, height/3.1, mouseX, mouseY) < (width/40) && mouseIsPressed && mouseButton == LEFT){
    if(mouseX <= width/1.25 && mouseX >= width/2){ 
      sfxX = mouseX;
    }else{
      if(mouseX <= width/2){
        sfxX = width/2
      }
      if(mouseX >= width/1.25){
        sfxX = width/1.25
      }
    }
    fill(255);
    ellipse(sfxX, height/3.1, width/35, width/35);          
  }
////////////////SLIDER BUTTON - SFX
  fill(255);
  ellipse(sfxX, height/3.1, width/40, width/40);
  stroke(255);
  line(width/2, height/3.1, width/1.25, height/3.1);
  sfxConvert = map(sfxX, width/2, width/1.25, 0, 1);

  
  if(vOpcoes == true){
    if(mouseX < width/1.858 || mouseX > width/1.858 + width/4 || mouseY < height/1.52 || mouseY > height/1.52 + height/12){
       soundButtonCreditos = true
    }
    if(mouseX < width/4.49 || mouseX > width/4.49 + width/5 || mouseY < height/1.52 || mouseY > height/1.52 + height/12){
       soundButtonAjuda = true
    }
//////////////////////BOTÃO CRÉDITOS - MOUSE
    if(mouseX > width/1.858 && mouseX < width/1.858 + width/4 && mouseY > height/1.52 && mouseY < height/1.52 + height/12){
      noFill();
      stroke(255)
      strokeWeight(2)
      rect(width/1.858, height/1.52, width/4, height/12, 20)
      if(soundButtonCreditos == true){
        menuSSound.play()
        soundButtonCreditos = false
      }
      if(mouseIsPressed){
        if(mouseButton == LEFT){
          tela = 0.3
          menuSoundSelect.play()
        }
      }
    }

/////////////////////BOTÂO AJUDA - MOUSE
  if(mouseX > width/4.49 && mouseX < width/4.49 + width/5 && mouseY > height/1.52 && mouseY < height/1.52 + height/12){
    noFill();
    stroke(255)
    strokeWeight(2)
    rect(width/4.49, height/1.52, width/5, height/12, 20)
    if(soundButtonAjuda == true){
      menuSSound.play()
      soundButtonAjuda = false
    }
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        tela = 0.2
        menuSoundSelect.play()
      }
    }
  }
    
//////////////////////////MOUSE DETECTION
  if(mouseX > width/4.49 && mouseX < width/4.49 + width/5 && mouseY > height/1.52 && mouseY < height/1.52 + height/12 || mouseX > width/1.858 && mouseX < width/1.858 + width/4 && mouseY > height/1.52 && mouseY < height/1.52 + height/12 || dist(volumeX, height/2, mouseX, mouseY) < (width/40) && (mouseIsPressed) && (mouseButton == LEFT) || dist(sfxX, height/3.1, mouseX, mouseY) < (width/40) && (mouseIsPressed) && (mouseButton == LEFT) || dist(width/(8/7), height/8, mouseX, mouseY) < (width/30)/2){
     mouseDcontrol1 = true
     tecladoC1 = 0
    }else{
     mouseDcontrol1 = false
    }
  }

//////////////////////////BOTÃO SFX - TECLADO
  
  if(tecladoC1 == 1){
    noFill();
    stroke(255)
    strokeWeight(2)
    rect(width/4.4, height/3.6, width/9, height/12, 20)
  }
  
/////////////////////////BOTÃO MUSICA - TECLADO
  if(tecladoC1 == 2){
    noFill();
    stroke(255)
    strokeWeight(2)
    rect(width/5.41, height/2.18, width/5, height/12, 20)
  }
  
////////////////////////BOTÃO AJUDA - TECLADO
  if(tecladoC1 == 3){
    noFill();
    stroke(255)
    strokeWeight(2)
    rect(width/4.49, height/1.52, width/5, height/12, 20)
  }
  
///////////////////////BOTÃO CRÉDITOS - TECLADO
  if(tecladoC1 == 4){
    noFill();
    stroke(255)
    strokeWeight(2)
    rect(width/1.858, height/1.52, width/4, height/12, 20)
  }
}

///////////////////////////////////////CLOSE OPÇÕES

//////////////////////////////////////TELA 0.2 - AJUDA

var textAjuda;
var xFundoAjuda = 0
///////////////////
function ajuda(){
  mouseDcontrol1 = false
  vOpcoes = false
//////////////////////////BACKGROUND - AJUDA
  
  imageMode(CORNER)
  for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
      image(plataformaFloresta[12], (-width/4) + i*(width/5) + xFundoAjuda, j*(height/2.6) ,width/5, height/2.6)
    }
  }
  for(p = 0; p < 8; p++){
    image(plataformaFloresta[5], (-width/4) + p*(width/5) + xFundoAjuda, 0, width/5, height/2.6 )
  }
  xFundoAjuda -= width/640
  if(xFundoAjuda <= -width/5){
    xFundoAjuda = 0
  }
  imageMode(CENTER)
  image(textAjuda, width/2, height/1.8, width/1.2, height/1.3 )
  
}

//////////////////////////////////////CLOSE TELA 0.2

/////////////////////////////////////TELA 0.3 - CRÉDITOS

var fundoDeserto = [];
var plataformaOp;
var speedPlataformas = 0
var speedBG1 = 0
var speedBG2 = 0
var speedBG3 = 0
var speedBG4 = 0
var subirCreditos = 0
var wanted;
/////////////////////////////////////

function creditos(){
  playSound()
  mouseDcontrol1 = false
  vOpcoes = false
/////////////////BACKGROUND DESERTO - CRÉDITOS
////////////VELOCIDADE LAYER - BACKGROUND
  speedBG1 += width/640
  speedBG2 += width/320
  speedBG3 += width/160
  speedBG4 += width/320
/////////////////////////////////////////////
  imageMode(CENTER)
  image(fundoDeserto[0], width/2, height/2, width, height);
  for(i = 0; i < 2; i++){
    image(fundoDeserto[1], ((width/2)-i*width)+speedBG1, height/2, width, height/2);
  }
  for(i = 0; i < 2; i++){
    image(fundoFloresta[3], ((width/2)-i*width)+speedBG2, height/1.5, width*1.01, height/2);
  }
  for(i = 0; i < 2; i++){
    image(fundoFloresta[2], ((width/2)-i*width)+speedBG3, height/1.3, width*1.01, height/2);
  }
  for(i = 0; i < 2; i++){
    image(fundoFloresta[5], ((width/2)-i*width)+speedBG4, height/7, width*1.01, height/6);
  }
  if(speedBG1 >= width){
    speedBG1 = 0
  }
  if(speedBG2 >= width){
    speedBG2 = 0
  }
  if(speedBG3 >= width){
    speedBG3 = 0
  }
  if(speedBG4 >= width){
    speedBG4 = 0
  }

/////////////////PLATAFORMAS DESERTO - CRÉDITOS
///////////SPEED
  speedPlataformas += width/160
/////////////////////////////////////////////
  for(c = 0; c < 7; c++){
    image(plataformaFloresta[1], (width-c*(width/5))+speedPlataformas, height, width/5, height/2.6);
  }
  if(speedPlataformas >= width/5){
    speedPlataformas = 0
  }
  
  image(textos[9], width/2, height*2 + subirCreditos, width/1.5, height*2)
   if(subirCreditos > -height*3.5 && tela === 0.3){
     subirCreditos--
   }else{
     subirCreditos = 0
   }
}
//////////////////////////////////////CLOSE TELA 0.3

////////////////////////////////////////TELA 1 - FASE 1

/////////////////////////

var fundoFloresta = [];
var posInicial = true;
var movimentoXfase1 = 0;
var soundLevel1;
var soundZombie;
var soundZombie2;

var left1Control = true;
var right1Control = true;

var contadorIdle;
var speedNuvem;

var colisionL = false;
var colisionR = false;
var colisionT = false;

var colisionR2 = false;
var colisionT2 = false;

var elevator1 = 0;
var elevator1Up = true;
var elevator1Down = false;

var elevator2 = 0;
var elevator2Up = true;
var elevator2Down = false;

var abism = false;

var life;
var lifeCounter = 3
var questoes = [];
var acompanhaX = 0
var acompanhaY = 0

var lifeControl1A = true
var lifeControl1B = true
var lifeControl1C = true
var lifeControl2A = true
var lifeControl2B = true
var lifeControl2C = true

var correctQuestion1 = false
var correctQuestion2 = false

var points = 0
////////////////////////
function fase1(){
/////////////////CAMERA X               
  if(movimentoXfase1 > (width/2)-(width/5) && movimentoXfase1 < (width*2)-(width/2)-(width/5)){
    translate(-(width/5+movimentoXfase1)+(width/2), 0)
  }else{
    if(movimentoXfase1 > (width/2)-(width/5)){
      translate(-width, 0)
    }else{
      translate(0, 0)
    }
  }
////////////////CAMERA Y
  if(gravityY < -(height/2) + (height/3.5)/2 && gravityY > -(height*2) + (height/2) + (height/3.5)/2 ){
    translate(0, -(height/2) + (height/3.5)/2  -gravityY)
  }else{
    if(gravityY < -(height/2) + (height/3.5)/2) {
      translate(0, height)
    }else{
      translate(0, 0)
    }
  }
///////////////////////BACKGROUND - FLORESTA
  imageMode(CENTER)
  image(fundoFloresta[6], width, 0, width*2, height*2)
  imageMode(CORNERS)
  image(fundoFloresta[4], 0, -height/2, width*2, height)
  image(fundoFloresta[3], 0, -height/8, width*2, height)
  image(fundoFloresta[2], 0, height/24, width*2, height)
  image(fundoFloresta[1], 0, height/8, width*2, height)
  image(fundoFloresta[0], 0, height/2, width*2, height)
  imageMode(CENTER)
  image(fundoFloresta[5], -width+speedNuvem, -height/2, width*2, height/4)
  image(fundoFloresta[5], width+speedNuvem, -height/2, width*2, height/4)
  if(speedNuvem < width*2){
    speedNuvem++
  }else{
    speedNuvem = 0
  }
//////////////////////PLATAFORMAS - GROUND
  imageMode(CENTER)
  for(i = 0; i <5; i++){
    image(plataformaFloresta[1], 0+i*(width/5), height, width/5, height/2.6)
  }
/////////////////////PLATAFORMA 1 - ELEVATOR
  image(plataformaFloresta[16], width/2, height/1.3+elevator1, width/5, height/4)
  if(elevator1 > -height/1.64 && elevator1Up === true){
    elevator1 -= 1.3
  }else{
    elevator1Up = false
    elevator1Down = true
  }
  if(elevator1 < 0 && elevator1Down === true){
    elevator1 += 1.3
  }else{
    elevator1Down = false
    elevator1Up = true
  }
/////////////////////COLISION PLATAFORMA 1
///////////////TOP COLISION
  if(width/5+movimentoXfase1 > width/2 - (width/5)/2 && width/5+movimentoXfase1 < width/2 + (width/5)/2 + (width/16)/2 && height-height/3.5 + gravityY <  height/1.3 - ((height/4)/2) - (height/5)/2 + elevator1 + width/50  && height-height/3.5 + gravityY >  height/1.3 - ((height/4)/2) - (height/5)/2 + elevator1 && jump === false){
    if(elevator1Down === true){
      velocity = 1.3
    }else{
      velocity = -1.3
    }
    jumpCounter = 0
  }
/////////////////////PLATAFORMA 2
  for(g = 0; g < 2; g++){
    for(j = 0; j < 2; j++){
      image(plataformaFloresta[12], width/1.39 + (j*width/6), height-(g*height/2.6), width/6, height/2.6 )
    }
  }
  for(i = 0; i < 2; i++){
    image(plataformaFloresta[i*2], width/1.39 + (i*width/6), height-(2*height/2.6), width/6, height/2.6 )
  }
/////////////////////COLISION - PLATAFORM 2
  
//////LEFT COLISION
  if(width/5+movimentoXfase1 > width/1.39 - (width/6)/2 + width/6 && width/5+movimentoXfase1 < width/1.39 + width/6 + (width/6)/2+ (((width/6)/2)/2)/1.5 && height-height/3.5 + gravityY >= height-(2*height/2.6) - (height/2.6)/2 - (height/5)/2){
    if(colisionT === false){
      colisionL = true
    }else{
      colisionL = false
    }
  }else{
     colisionL = false
  }
  
///////RIGHT COLISION
   if(width/5+movimentoXfase1 > width/1.39 - (width/6)/2 && width/5+movimentoXfase1 < width/1.39 + width/6 + (((width/6)/2)/2)/2 - width/6 && height-height/3.5 + gravityY >= height-(2*height/2.6) - (height/2.6)/2 - (height/5)/2){
    if(colisionT === false){
      colisionR = true
    }else{
      colisionR = false
    }
  }else{
     colisionR = false
  }
///////TOP COLISION
  if(height-height/3.5 + gravityY >= height-(2*height/2.6) - (height/2.6)/2 - (height/5)/2 && width/5+movimentoXfase1 > width/1.39 - (width/6)/2 + width/213.3 && width/5+movimentoXfase1 < width/1.39 + width/6 + (width/6)/2 + (((width/6)/2)/2)/1.5 - width/213.3 && jump === false){
    velocity = 0
    jumpCounter = 0
    colisionT = true
  }else{
    colisionT = false
  }
/////////////////////PLATAFORMA 3
  image(plataformaFloresta[6],width*1.35, height/1.6, width/5, height/4 )
  image(plataformaFloresta[15], width*1.35 - width/5, height/1.6, width/5, height/4)
////////////////////COLISION - PLATAFORMA 3 
  if( width/5+movimentoXfase1 > width*1.35 - width/5 - (width/5)/2 && width/5+movimentoXfase1 < width*1.35 + (width/3.8)/2 && height-height/3.5 + gravityY > height/1.6 - (height/4)/2 - height/10.3 && height-height/3.5 + gravityY < height/1.6-(height/4)/2 + width/50 - height/10.3 && jump === false){
    velocity = 0
    jumpCounter = 0
  }
/////////////////////PLATAFORMA 4
  image(plataformaFloresta[3],width*1.63, height/3, width/5, height/4 )
/////////////////////COLISION PLATAFORMA 4
  if( width/5+movimentoXfase1 > width*1.63 - (width/5)/2 && width/5+movimentoXfase1 <  width*1.63 + (width/5) && height-height/3.5 + gravityY > height/3 - height/4.4 && height-height/3.5 + gravityY < height/3 + width/50 - height/4.4 && jump === false){
    velocity = 0
    jumpCounter = 0
  }
/////////////////////PLATAFORMA 5 -ELEVATOR
  image(plataformaFloresta[16], width*1.45, height/-2 + elevator2, width/5, height/4)
   if(elevator2 < 250 && elevator2Down === true){
    elevator2 += 1.3
  }else{
    elevator2Up = true
    elevator2Down = false
  }
  if(elevator2 > 0 && elevator2Up === true){
    elevator2 -= 1.3
  }else{
    elevator2Down = true
    elevator2Up = false
  }
///////////////////COLISION PLATAFORMA 5
  if(width/5+movimentoXfase1 > width*1.45 - (width/5)/2 && width/5+movimentoXfase1 < width*1.49 + (width/5)/2 && height-height/3.5 + gravityY >  height/-1.38 + elevator2 && height-height/3.5 + gravityY <  height/-1.38 + elevator2 + width/50 && jump === false){
     if(elevator2Down === true){
      velocity = 1.3
    }else{
      velocity = -1.3
    }
    jumpCounter = 0
  }
/////////////////////PLATAFORMA 6
  for(g = 0; g < 3; g++){
    for(j = 0; j < 2; j++){
      image(plataformaFloresta[12], width*1.8 + (j*width/6), height-(g*height/2.6), width/6, height/2.6 )
    }
  }
  for(i = 0; i < 2; i++){
    image(plataformaFloresta[i*2], width*1.8 + (i*width/6), height-(3*height/2.6), width/6, height/2.6 )
  }
/////////////////////COLISION PLATAFORMA 6
///////RIGHT COLISION
   if(width/5+movimentoXfase1 > width*1.8 - (width/6)/2 && width/5+movimentoXfase1 < width*2.2 && height-height/3.5 + gravityY > height-(3*height/2.6) - (height/1.7)/2 ){
    if(colisionT2 === false){
      colisionR2 = true
    }else{
      colisionR2 = false
    }
  }else{
     colisionR2 = false
  }
///////TOP COLISION
  if(height-height/3.5 + gravityY > height-(3*height/2.6) - (height/1.7)/2 && width/5+movimentoXfase1 > width*1.8 - (width/6)/2 + width/213.3 && width/5+movimentoXfase1 < width* 2.2 && jump === false){
    velocity = 0
    jumpCounter = 0
    colisionT2 = true
    if(points === 2){
      tela = 3
    }
  }else{
    colisionT2 = false
  }
///////////ABISMO
  if(width/5+movimentoXfase1 > width/1.39 + width/6 + (width/6)/2+ (((width/6)/2)/2)/1.5 - width/213.3 && width/5+movimentoXfase1 < width*1.8 - (width/6)/2 + width/213.3 && colisionT === false && colisionT2 === false && velocity!=0 && velocity != -1.3 && velocity != 1.3 && jump === false){
    abism = true
    velocity = fallingSpeed
    minHeight = height*1.5
  }else{
    abism = false
  }
////////POSIÇAO INICIAL PERSONAGEM
  if(posInicial === true){
    IdleRight(width/5+movimentoXfase1, height-height/3.5 + gravityY, width/6, height/3, 0.25)
  }
/////////////////////INIMIGO 1
  if(correctQuestion1 === true){
///////////INIMIGO DERROTADO
    DieLeftZombie(width/1.4, -height/height*37, width/4, height/3, 0.20, 0)
  }else{
    IdleLeftZombie(width/1.3, -height/height*49, width/6, height/3, 0.25);
  }
/////////////////////INIMIGO 2
  if(correctQuestion2 === true){
///////////INIMIGO DERROTADO
    DieLeftZombie2(width*1.18, height/2.65, width/4, height/3, 0.20, 0)
  }else{
    IdleLeftZombie(width*1.23, height/2.9, width/6, height/3, 0.25);
  }
  
/////////////////////QUESTAO 1
  if(correctQuestion1 === false){
    if(width/5+movimentoXfase1 > width/1.3 - (width/6)/2 && width/5+movimentoXfase1 < width/1.3 + (width/4)/2 && height-height/3.5 + gravityY < -height/height*49 + (height/3)/2 && height-height/3.5 + gravityY > -height/height*49 - (height/3)/2 ){
      strokeWeight(2)
      stroke(20)
      fill(20, 150)
      rect(width/1.57, height/8, width/3, height/5)
      image(questoes[0], width/1.25, height/4.5, width/3.5, height/6)
//////////////////ATERNATIVA "A"
      if(mouseX > width/1.525 - movimentoXfase1 + width/5 + width/10 && mouseX < width/1.525 + width/10 - movimentoXfase1 + width/5 + width/12 && mouseY  <  height/4.32 - gravityY - height/3.5 && mouseY > height/4.32 - height/13 - gravityY - height/3.5 ){
        strokeWeight(1)
        stroke(255)
        noFill(255);
        rect(width/1.525, height/4.32, width/12, height/13, 10 )
        if(mouseIsPressed && mouseButton === LEFT && lifeControl1A === true){
          correctQuestion1 = true
          points += 1
        }  
      }
//////////////////ATERNATIVA "B"
      if(mouseX > width/1.305 - movimentoXfase1 + width/5 + width/10 && mouseX < width/1.305 + width/10 - movimentoXfase1 + width/5 + width/12 && mouseY  <  height/4.32 - gravityY - height/3.5 && mouseY > height/4.32 - height/13 - gravityY - height/3.5 ){
        strokeWeight(1)
        stroke(255)
        noFill(255);
        rect(width/1.305, height/4.32, width/12, height/13, 10 )
        if(mouseIsPressed && mouseButton === LEFT && lifeControl1B === true){
          lifeCounter--
          lifeControl1B = false
        }  
      }else{
        lifeControl1B = true
      }
//////////////////ATERNATIVA "C"
      if(mouseX > width/1.145 - movimentoXfase1 + width/5 + width/10 && mouseX < width/1.145 + width/10 - movimentoXfase1 + width/5 + width/12 && mouseY  <  height/4.32 - gravityY - height/3.5 && mouseY > height/4.32 - height/13 - gravityY - height/3.5 ){
        strokeWeight(1)
        stroke(255)
        noFill(255);
        rect(width/1.145, height/4.32, width/12, height/13, 10 )
        if(mouseIsPressed && mouseButton === LEFT && lifeControl1C === true){
          lifeCounter --
          lifeControl1C = false
        }  
      }else{
        lifeControl1C = true
      }
    }
  }
////////////////////QUESTAO 2
  if(correctQuestion2 === false){
    if(width/5+movimentoXfase1 > width*1.23 - (width/6)/2 && width/5+movimentoXfase1 < width*1.23 + (width/4)/2 && height-height/3.5 + gravityY < height/2.9 + (height/3)/2 && height-height/3.5 + gravityY > height/2.9 - (height/3)/2 ){
      strokeWeight(2)
      stroke(20)
      fill(20, 150)
      rect(width*1.09, height/1.8, width/3, height/5)
      image(questoes[1], width*1.258, height/1.52, width/3.4, height/6)
//////////////////ATERNATIVA "A"
      if(mouseX > width*1.11 - movimentoXfase1 + width/5 + width/10 && mouseX < width*1.11 + width/10 - movimentoXfase1 + width/5 + width/12 && mouseY  <  height/1.505 - gravityY - height/4 && mouseY > height/1.505 - height/13 - gravityY - height/4 ){
        strokeWeight(1)
        stroke(255)
        noFill(255);
        rect(width*1.11, height/1.505, width/12, height/13, 10 )
        if(mouseIsPressed && mouseButton === LEFT && lifeControl2A === true){
          lifeCounter --
          lifeControl2A = false
        }  
      }else{
        lifeControl2A = true
      }
/////////////////ALTERNATIVA "B"
      if(mouseX > width*1.215 - movimentoXfase1 + width/5 + width/10 && mouseX < width*1.215 + width/10 - movimentoXfase1 + width/5 + width/12 && mouseY  <  height/1.505 - gravityY - height/4 && mouseY > height/1.505 - height/13 - gravityY - height/4 ){
        strokeWeight(1)
        stroke(255)
        noFill(255);
        rect(width*1.215, height/1.505, width/12, height/13, 10 )
        if(mouseIsPressed && mouseButton === LEFT && lifeControl2B === true){
          lifeCounter --
          lifeControl2B = false
        }  
      }else{
        lifeControl2B = true
      }
/////////////////ALTERNATIVA "C"
      if(mouseX > width*1.324 - movimentoXfase1 + width/5 + width/10 && mouseX < width*1.324 + width/10 - movimentoXfase1 + width/5 + width/12 && mouseY  <  height/1.505 - gravityY - height/4 && mouseY > height/1.505 - height/13 - gravityY - height/4 ){
        strokeWeight(1)
        stroke(255)
        noFill(255);
        rect(width*1.324, height/1.505, width/12, height/13, 10 )
        if(mouseIsPressed && mouseButton === LEFT && lifeControl2C === true){
        correctQuestion2 = true
          points += 1
        }  
      }
    }
  }
///////////////////ELEMENTOS ACOMPANHANDO A TELA
////////////////CENTRO
  if(movimentoXfase1 > (width/2)-(width/5) && movimentoXfase1 < (width*2)-(width/2)-(width/5) && gravityY < -(height/2) + (height/3.5)/2 && gravityY > -(height*2) + (height/2) + (height/3.5)/2 ){
    if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
      image(life, width/20 + movimentoXfase1-((width/2)-(width/5)), height/15 + gravityY - (-(height/2) + (height/3.5)/2), width/15, height/10)
    }
    if(lifeCounter === 2 || lifeCounter === 3){
      image(life, width/8 + movimentoXfase1-((width/2)-(width/5)), height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
    }
    if(lifeCounter === 3){
      image(life, width/5 + movimentoXfase1-((width/2)-(width/5)), height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
    }
  }else{
///////////CENTRO LATERAL SUPERIOR
    if(movimentoXfase1 > (width/2)-(width/5) && movimentoXfase1 < (width*2)-(width/2)-(width/5) && gravityY < -(height/2) + (height/3.5)/2){
      if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
        image(life, width/20 + movimentoXfase1-((width/2)-(width/5)) , height/15-height,  width/15, height/10)
      }
      if(lifeCounter === 2 || lifeCounter === 3){
        image(life, width/8 + movimentoXfase1-((width/2)-(width/5)) , height/15-height,  width/15, height/10)
      }
      if(lifeCounter === 3){
        image(life, width/5 + movimentoXfase1-((width/2)-(width/5)) , height/15-height,  width/15, height/10)
      }
    }else{
//////////CENTRO LATERAL INFERIOR
      if(movimentoXfase1 > (width/2)-(width/5) && movimentoXfase1 < (width*2)-(width/2)-(width/5) && gravityY > -(height*2) + (height/2) + (height/3.5)/2){
        if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
          image(life, width/20 + movimentoXfase1-((width/2)-(width/5)) , height/15,  width/15, height/10)
        }
        if(lifeCounter === 2 || lifeCounter === 3){
          image(life, width/8 + movimentoXfase1-((width/2)-(width/5)) , height/15,  width/15, height/10)
        }
        if(lifeCounter === 3){
          image(life, width/5 + movimentoXfase1-((width/2)-(width/5)), height/15,  width/15, height/10)
        }
      }else{
/////////CENTRO LATERAL ESQUERDO
        if(movimentoXfase1 < (width*2)-(width/2)-(width/5) && gravityY < -(height/2) + (height/3.5)/2 && gravityY > -(height*2) + (height/2) + (height/3.5)/2){
          if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
            image(life, width/20 , height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
          }
          if(lifeCounter === 2 || lifeCounter === 3){
            image(life, width/8 , height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
          }
          if(lifeCounter === 3){
            image(life, width/5 , height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
          }
        }else{
////////////CENTRO LATERAL DIREITO
          if(movimentoXfase1 > (width*2)-(width/2)-(width/5) && gravityY < -(height/2) + (height/3.5)/2 && gravityY > -(height*2) + (height/2) + (height/3.5)/2){
            if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
              image(life, width/20+width , height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
            }
            if(lifeCounter === 2 || lifeCounter === 3){
              image(life, width/8+width , height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
            }
            if(lifeCounter === 3){
              image(life, width/5+width , height/15 + gravityY - (-(height/2) + (height/3.5)/2),  width/15, height/10)
            }
          }else{
/////////////CANTO INFERIOR ESQUERDO
            if(movimentoXfase1 < (width*2)-(width/2)-(width/5) && gravityY > -(height*2) + (height/2) + (height/3.5)/2){
              if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
                image(life, width/20 , height/15,  width/15, height/10)
              }
              if(lifeCounter === 2 || lifeCounter === 3){
                image(life, width/8 , height/15,  width/15, height/10)
              }
              if(lifeCounter === 3){
                image(life, width/5 , height/15,  width/15, height/10)
              }
            }else{
/////////////CANTO SUPERIOR ESQUERDO
              if(movimentoXfase1 < (width*2)-(width/2)-(width/5) && gravityY < -(height/2) + (height/3.5)/2){
                if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
                  image(life, width/20 , height/15-height,  width/15, height/10)
                }
                if(lifeCounter === 2 || lifeCounter === 3){
                  image(life, width/8 , height/15-height,  width/15, height/10)
                }
                if(lifeCounter === 3){
                  image(life, width/5 , height/15-height,  width/15, height/10)
                }
              }else{
/////////////CANTO INFERIOR DIREITO
                if(movimentoXfase1 > (width*2)-(width/2)-(width/5) && gravityY > -(height*2) + (height/2) + (height/3.5)/2){
                  if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
                    image(life, width/20+width , height/15, width/15, height/10)
                  }
                  if(lifeCounter === 2 || lifeCounter === 3){
                    image(life, width/8+width , height/15,  width/15, height/10)
                  }
                  if( lifeCounter === 3){
                    image(life, width/5+width , height/15,  width/15, height/10)
                  }
                }else{
/////////////CANTO SUPERIOR DIREITO
                  if(movimentoXfase1 > (width*2)-(width/2)-(width/5) && gravityY < -(height/2) + (height/3.5)/2){
                    if(lifeCounter === 1 || lifeCounter === 2 || lifeCounter === 3){
                      image(life, width/20+width , height/15-height,  width/15, height/10)   
                    }
                    if(lifeCounter === 2 || lifeCounter === 3){
                      image(life, width/8+width , height/15-height,  width/15, height/10)
                    }
                    if(lifeCounter === 3){
                      image(life, width/5+width , height/15-height,  width/15, height/10)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
///////////////GAME OVER
  if(lifeCounter <= 0 || gravityY > 200){
    tela = 2
  }
  keyPressed();
}

////////////////////////////////////////CLOSE TELA 1 - FASE 1

///////////////////////////////////////TELA 2 - GAME OVER

var ControlSound = true
var ControlSound2 = true
var failSound;
var mouseClick = false

function gameOver(){
  
  background(20)
  imageMode(CENTER)
  image(plataformaFloresta[7], width/2, height/1.6, width/5, height/5)
  image(plataformaFloresta[8], width/2-width/5, height/1.6, width/5, height/5)
  image(plataformaFloresta[17], width/2+width/5, height/1.6, width/5, height/5)
  DieKnight(width/2, height/2.25, width/4.8, height/3.4, 0.25)
  image(scenaryForestElements[1], width/3.2, height/2.7, width/4.5, height/3)
  image(scenaryForestElements[4], width/1.4, height/3.5, width/4.5, height/2)
  noStroke()
  if(mouseX > width/2-(width/4)/2 && mouseX < width/2+(width/4)/2 && mouseY > height/1.21 && mouseY < height/1.21 + height/8){
    strokeWeight(10)
    stroke(200, 255, 0)
    if(mouseIsPressed && mouseButton === LEFT && mouseClick === true){
      lifeCounter = 3 //vida
      correctQuestion1 = false //zombie 1
      correctQuestion2 = false //zombie2
      whicFrameDieK = 0 //animação de morte
      points = 0 // pontos
      movimentoXfase1 = 0 // posição inicial
      gravityY = 0 // posição inicial
      whicFrameDieLZ = 0 //Zombie die reset
      whicFrameDieLZ2 = 0 //Zombie die reset
      //ajustes de gravidade
      jumpCounter = 0
      jump = false;
      direction = 1
      velocity = 2
      jumpPower = 12
      fallingSpeed = 5
      minHeight = 0
      maxHeight = -800
      menuSoundSelect.play()
      victoryS = true
      failS = true
      counterSoundZombie = 120
      counterSoundZombie2 = 1800
      tela = 1
    }
    if(ControlSound === true){
      menuSSound.play()
      ControlSound = false
    }
  }else{
    ControlSound = true
  }
  fill(200, 255, 0)
  rect(width/2-(width/4)/2, height/1.21, width/4, height/8, 10)
  
  image(textos[1],width/2, height/1.13, width/4.5, height/9)
  
  noStroke()
  if(mouseX > width/2-(width/5)/2 && mouseX < width/2+(width/5)/2 && mouseY > height/1.48 && mouseY < height/1.48 + height/8.5){
    strokeWeight(10)
    stroke(50, 150, 50)
    if( mouseIsPressed && mouseButton === LEFT && mouseClick === true){
      lifeCounter = 3 //vida
      correctQuestion1 = false //zombie 1
      correctQuestion2 = false //zombie2
      whicFrameDieK = 0 //animação de morte
      points = 0 // pontos
      movimentoXfase1 = 0 // posição inicial
      gravityY = 0 // posição inicial
      whicFrameDieLZ = 0 //Zombie die reset
      whicFrameDieLZ2 = 0 //Zombie die reset
      //ajustes de gravidade
      jumpCounter = 0
      jump = false;
      direction = 1
      velocity = 2
      jumpPower = 12
      fallingSpeed = 5
      minHeight = 0
      maxHeight = -800
      menuSoundSelect.play()
      victoryS = true
      failS = true
      counterSoundZombie = 120
      counterSoundZombie2 = 1800
      tela = 0 // fase 0
    }
    if(ControlSound2 === true){
      menuSSound.play()
      ControlSound2 = false
    }
  }else{
    ControlSound2 = true
  }
  fill(50, 150, 50)
  rect(width/2-(width/5)/2, height/1.48, width/5, height/8.5, 10)
  
  image(textos[5],width/2, height/1.365, width/6, height/10)
  
  if(mouseIsPressed){
    mouseClick = false
  }else{
    mouseClick = true
  }
} 

//////////////////////////////////////CLOSE TELA 2 - GAME OVER

///////////////////////////////////////TELA 3 - WIN

var speedBgwin = 0;
var speedPW = 0
var EfectControl = true
var victorySound;

function win(){
  imageMode(CENTER)
  for(c = 0; c < 2; c++){
    image(fundoMenu, width/2 + c*width+speedBgwin, height/2, width, height)
  }
  if(speedBgwin >= -width){
    speedBgwin -= width/320
  }else{
    speedBgwin = 0
  }
  for(p = -2; p < 7; p++){
    image(plataformaFloresta[1], (width-p*(width/5))+speedPW, height, width/5, height/2.6)
  }
  if(speedPW > -width/5){
    speedPW -= width/320
  }else{
    speedPW = 0
  }
  noStroke()
  runRight(width/8, height/1.4, width/6, height/3, 0.25)
  if(mouseX > width/2-(width/5)/2 && mouseX < width/2+(width/5)/2 && mouseY > height/1.5 && mouseY < height/1.5 + height/8){
    strokeWeight(10)
    stroke(50,150,50)
    if(mouseIsPressed && mouseButton === LEFT){
      lifeCounter = 3 //vida
      correctQuestion1 = false //zombie 1
      correctQuestion2 = false //zombie2
      whicFrameDieK = 0 //animação de morte
      points = 0 // pontos
      movimentoXfase1 = 0 // posição inicial
      gravityY = 0 // posição inicial
      whicFrameDieLZ = 0 //Zombie die reset
      whicFrameDieLZ2 = 0 //Zombie die reset
      //ajustes de gravidade
      jumpCounter = 0
      jump = false;
      direction = 1
      velocity = 2
      jumpPower = 12
      fallingSpeed = 5
      minHeight = 0
      maxHeight = -800
      menuSoundSelect.play()
      victoryS = true
      failS = true
      counterSoundZombie = 120
      counterSoundZombie2 = 1800
      tela = 0 // fase 0
    }
    if(EfectControl === true){
      menuSSound.play()
      EfectControl = false
    }
  }else{
    EfectControl = true
  }
  
  fill(50, 150, 50)
  rect(width/2-(width/5)/2, height/1.5, width/5, height/8, 10)
  
  image(textos[5], width/2, height/1.37, width/6, height/9)
  image(textos[4], width/2, height/3, width/1.5, height/3)
  playSound();
} 
//////////////////////////////////////CLOSE TELA 3 - WIN

////////////////////////////////////////RUN LEFT ANIMATION

var rlx;
var rly;
var rlw;
var rlh;
var speedrl;
var framesRL = [];
var whicFrameRL = 0;

////////////////////////////////////////

function runLeft(rlx, rly, rlw, rlh, speedrl){
  imageMode(CENTER);
  image(framesRL[parseInt(whicFrameRL)], rlx, rly, rlw, rlh)
  whicFrameRL += speedrl;
  if(whicFrameRL >= framesRL.length){
    whicFrameRL = 0;
  }
}

////////////////////////////////////////CLOSE RUN LEFT ANIMATION

////////////////////////////////////////RUN RIGHT ANIMATION

var rRx;
var rRy;
var rRw;
var rRh;
var speedrR;
var framesRR = [];
var whicFrameRR = 0;

////////////////////////////////////////

function runRight(rRx, rRy, rRw, rRh, speedrR){
  imageMode(CENTER);
  image(framesRR[parseInt(whicFrameRR)], rRx, rRy, rRw, rRh)
  whicFrameRR += speedrR;
  if(whicFrameRR >= framesRR.length){
    whicFrameRR = 0;
  }
}

////////////////////////////////////////CLOSE RUN RIGTH ANIMATION

////////////////////////////////////////IDLE LEFT ANIMATION

var IdleLx;
var IdleLy;
var IdleLw;
var IdleLh;
var speedIdleL;
var framesIdleL = [];
var whicFrameIdleL = 0;

////////////////////////////////////////

function IdleLeft(IdleLx, IdleLy, IdleLw, IdleLh, speedIdleL){
  imageMode(CENTER);
  image(framesIdleL[parseInt(whicFrameIdleL)], IdleLx, IdleLy, IdleLw, IdleLh)
  whicFrameIdleL += speedIdleL;
  if(whicFrameIdleL >= framesIdleL.length){
    whicFrameIdleL = 0;
  }
}

////////////////////////////////////////CLOSE IDLE LEFT ANIMATION

////////////////////////////////////////IDLE RIGHT ANIMATION

var IdleRx;
var IdleRy;
var IdleRw;
var IdleRh;
var speedIdleR;
var framesIdleR = [];
var whicFrameIdleR = 0;

////////////////////////////////////////

function IdleRight(IdleRx, IdleRy, IdleRw, IdleRh, speedIdleR){
  imageMode(CENTER);
  image(framesIdleR[parseInt(whicFrameIdleR)], IdleRx, IdleRy, IdleRw, IdleRh)
  whicFrameIdleR += speedIdleR;
  if(whicFrameIdleR >= framesIdleR.length){
    whicFrameIdleR = 0;
  }
}

////////////////////////////////////////CLOSE IDLE RIGHT ANIMATION

////////////////////////////////////////IDLE LEFT ZOMBIE

var IdleLZx;
var IdleLZy;
var IdleLZw;
var IdleLZh;
var speedIdleLZ;
var framesIdleZombie = [];
var whicFrameIdleLZ = 0;

////////////////////////////////////////

function IdleLeftZombie(IdleLZx, IdleLZy, IdleLZw, IdleLZh, speedIdleLZ){
  imageMode(CENTER);
  image(framesIdleZombie[parseInt(whicFrameIdleLZ)], IdleLZx, IdleLZy, IdleLZw, IdleLZh)
  whicFrameIdleLZ += speedIdleLZ;
  if(whicFrameIdleLZ >= framesIdleZombie.length){
    whicFrameIdleLZ = 0;
  }
}

////////////////////////////////////////CLOSE DIE LEFT ZOMBIE

////////////////////////////////////////DIE LEFT ZOMBIE

var DieLZx;
var DieLZy;
var DieLZw;
var DieLZh;
var speedDieLZ;
var framesDieZombie = [];
var whicFrameDieLZ = 0;

////////////////////////////////////////

function DieLeftZombie(DieLZx, DieLZy, DieLZw, DieLZh, speedDieLZ){
  imageMode(CENTER);
  image(framesDieZombie[parseInt(whicFrameDieLZ)], DieLZx, DieLZy, DieLZw, DieLZh)
  if(whicFrameDieLZ > 11){
    whicFrameDieLZ = 11
  }else{
    whicFrameDieLZ += speedDieLZ
  }
}

////////////////////////////////////////CLOSE DIE LEFT ZOMBIE

////////////////////////////////////////DIE LEFT ZOMBIE 2

var DieLZ2x;
var DieLZ2y;
var DieLZ2w;
var DieLZ2h;
var speedDieLZ2;
var framesDieZombie = [];
var whicFrameDieLZ2 = 0;

////////////////////////////////////////

function DieLeftZombie2(DieLZ2x, DieLZ2y, DieLZ2w, DieLZ2h, speedDieLZ2){
  imageMode(CENTER);
  image(framesDieZombie[parseInt(whicFrameDieLZ2)], DieLZ2x, DieLZ2y, DieLZ2w, DieLZ2h)
  if(whicFrameDieLZ2 > 11){
    whicFrameDieLZ2 = 11
  }else{
    whicFrameDieLZ2 += speedDieLZ2
  }
}

////////////////////////////////////////CLOSE DIE LEFT ZOMBIE 2

////////////////////////////////////////DIE KNIGHT

var DieKx;
var DieKy;
var DieKw;
var DieKh;
var speedDieK;
var framesDieKnight = [];
var whicFrameDieK = 0;

////////////////////////////////////////

function DieKnight(DieKx, DieKy, DieKw, DieKh, speedDieK){
  imageMode(CENTER);
  image(framesDieKnight[parseInt(whicFrameDieK)], DieKx, DieKy, DieKw, DieKh)
  if(whicFrameDieK > 7){
    whicFrameDieK = 7
  }else{
    whicFrameDieK += speedDieK
  }
}

////////////////////////////////////////CLOSE DIE KNIGHT

////////////////////////////////////////PRELOAD

function preload(){

//////////SCENARY ELEMENTS - MENU
  for(z = 0; z < 3; z++){
    scenaryForestElements [z] = loadImage("CENARIO/FLORESTA/SCENARY/flower"+z+".png");
  }

  for(w = 3; w < 6; w++){
    scenaryForestElements [w] = loadImage("CENARIO/FLORESTA/SCENARY/arvore"+(w-3)+".png");
  }
  
  scenaryForestElements [6] = loadImage("CENARIO/FLORESTA/SCENARY/vinha.png");
  
  scenaryForestElements [7] = loadImage("CENARIO/FLORESTA/SCENARY/arbusto.png");
  
//////////BACKGROUND - FLORESTA - MENU
  fundoMenu = loadImage("CENARIO/FLORESTA/BACKGROUND_MENU/bg_jungle.png");
  
//////////RUN LEFT - ANIMATION
  for(var i = 0; i < 8; i++){
    framesRL [i] = loadImage("KNIGHT/ANIMATIONS/RUN/LEFT/2D_KNIGHT__Run_00"+i+".png");
  }
//////////RUN RIGHT - ANIMATION
  for(var p = 0; p < 8; p++){
    framesRR [p] = loadImage("KNIGHT/ANIMATIONS/RUN/RIGHT/2D_KNIGHT__Run_00"+p+".png")
  }
/////////IDLE LEFT - ANIMATION
  for(g = 0; g < 8; g++){
    framesIdleL [g] = loadImage("KNIGHT/ANIMATIONS/IDLE/LEFT/2D_KNIGHT__Idle_00"+g+".png")
  }
/////////IDLE RIGHT - ANIMATION
  for(y = 0; y < 8; y++){
    framesIdleR [y] = loadImage("KNIGHT/ANIMATIONS/IDLE/RIGHT/2D_KNIGHT__Idle_00"+y+".png")
  }
/////////DIE KNIGT
  for(q = 0; q < 8; q++){
    framesDieKnight [q] = loadImage("KNIGHT/ANIMATIONS/DIE/2D_KNIGHT__Die_00"+q+".png")
  }
//////////"X" BUTTON
  buttonX = loadImage("MENU/BOTOES/x.png");
  
/////////MENU SOUND BG
  menuBGSound = loadSound("MENU/SOUNDS/bloodpixel.mp3");

////////MENU SFX SELECT
  menuSSound = loadSound("MENU/SOUNDS/Wooden Button.mp3")
  menuSoundSelect = loadSound("MENU/SOUNDS/button sound.mp3")
  
//////////BACKGROUND - DESERTO
  for(l = 1; l < 6; l++){
    fundoDeserto [(l-1)] = loadImage("CENARIO/DESERTO/BACKGROUND/background"+l+".png")
  }
//////////BACKGROUND - FLORESTA
  for(a = 0; a < 7; a++){
     fundoFloresta [a] = loadImage("CENARIO/FLORESTA/BGLAYERS/bg5_"+a+".png")
  }

//////////PLATAFORMAS - FLORESTA
  for(b = 0; b < 21; b++){
    plataformaFloresta [b] = loadImage("CENARIO/FLORESTA/PLATAFORMAS/jungle_pack_0"+b+".png");
  }
  
/////////CARTAZ WANTED
  wanted = loadImage("CENARIO/DESERTO/SCENARY/WANTED.png")

////////TEXTO AJUDA
  textAjuda = loadImage("MENU/TEXTOS/ajuda.png")
  
///////ZOMBIE IDLE
  for(t = 0; t < 15; t++){
    framesIdleZombie [t] = loadImage("ZOMBIE/IDLE LEFT/Idle ("+(t+1)+").png");
  }
////////ZOMBIE DIE
  for(z = 0; z < 12; z++){
    framesDieZombie [z] = loadImage("ZOMBIE/DIE LEFT/Dead ("+(z+1)+").png");
  }
////////QUESTOES
  for(x = 0; x < 2; x++){
    questoes [x] = loadImage("QUESTOES/questão_"+x+".png")
  }
////////LIFE
  life = loadImage("KNIGHT/LIFE/life.png")
////////TEXTOS
  for(f = 0; f < 10; f++){
    textos [f] = loadImage("TEXT/"+f+".png")
  }
///////SOUND LEVEL 1
  soundLevel1 = loadSound("SOUNDS/jungle_menu.mp3")
///////ZOMBIES
  soundZombie = loadSound("SOUNDS/zombie_sound.mp3")
////////ZOMBIE 2
  soundZombie2 = loadSound("SOUNDS/zombie_sound.mp3")
////////VICTORY
  victorySound = loadSound("SOUNDS/victory_sound.mp3")
////////FAIL
  failSound = loadSound("SOUNDS/fail_sound.mp3")
}

////////////////////////////////////////CLOSE PRELOAD