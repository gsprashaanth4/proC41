class Form
{
   constructor()
   {
      this.nameInput = createInput("name");
      this.enter = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      //this.resetButton = createButton('reset');
    }

   hide() 
   {
      this.nameInput.hide();
      this.title.hide();
      this.enter.hide();
      this.greeting.hide();
   }
   display() 
   {
      this.title.html("VACCINATOR GAME");
      this.title.position(530, 160);
 
      this.nameInput.position(560,300);
      this.enter.position(625,350);
      //this.resetButton.position(900, 660);

      this.enter.mousePressed(()=>
      {
         this.nameInput.hide();
         this.enter.hide();
 
         player.name = this.nameInput.value();
         playerCount += 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
 
         this.greeting.html("Hello " + player.name)
         this.greeting.position(560,300);
      });

    //this.resetButton.mousePressed(()=>{
      //player.updateCount(0);
    //});

  }
}