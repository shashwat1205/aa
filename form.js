class Form{
    constructor(){
 this.input = createInput("name")
  this.button = createButton("play")
this.greeting = createElement('h3')


    }
   
    display(){

        var title = createElement('h2')
        title.html(" multiplayer car racing game")
        title.position(displayWidth/2-50,0)

       
        this.input.position(displayWidth/2-40,displayHeight/2-80)

       
        this.button.position(displayWidth/+30,displayHeight/2)

        
        this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            

            player.name = this.input.value()
            playercount = playercount +1
            player.index = playercount
            player.update()
            player.updateCount(playercount)
this.greeting.html("hello "+player.name)
           this.greeting.position(displayWidth/2-70,displayHeight/4)





        })
      
        
        
    }

    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }

}