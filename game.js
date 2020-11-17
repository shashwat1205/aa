class Game{
    constructor(){

    }
 getState(){
     var gamestateref=database.ref('gamestate')
     gamestateref.on("value",function (data){
         gamestate = data.val()
     })
 }
 update(state){
     database.ref('/').update({
         gamestate: state
     })
 }
 async start(){
   if( gamestate === 0){
       player = new Player();
       player.getCount();
       form = new Form();
       form.display();

       
   }  
   car1 = createSprite(100,200)
   car2 = createSprite(300,200)
   car3 = createSprite(500,200)
   car4 = createSprite(700,200)


cars =[car1,car2,car3,car4]


 }
 play(){ form.hide();
  textSize(30); 
  text("Game Start", 120, 100)
   Player.getPlayerInfo();
    if(allPlayers !== undefined)
    { 
        var index = 0,x = 0,y;

        var display_position = 130;
     for(var plr in allPlayers){
         index = index+1
         x = x+200
         y = displayHeight-allPlayers[plr].distance

         cars[index -1].x = x
         cars [index-1].y=y
          if (plr ===  player.index) 
          fill("red")
           else fill("black"); 
          display_position+=20; 
          textSize(15);
           text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
           } 
           }

            if(keyIsDown(UP_ARROW) && player.index !== null)
            { 
                player.distance +=50 
                player.update(); 

            } 
 }
}