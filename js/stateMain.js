var StateMain = {
  preload: function () {
    if (screen.width < 900){
      game.scale.forceOrientation(true, false);
    }

    game.load.spritesheet("dragon", "images/main/dragon.png", 120, 85, 4);
  },

  create: function () {
    //Dragon
    this.dragon = game.add.sprite(0, 0, "dragon");
    this.dragon.animations.add("fly", [0, 1, 2, 3], 12, true);

    this.dragon.animations.play("fly");

    this.setListeners();
  },

  setListeners: function(){

    if (screen.width<900){
      game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  },

  wrongWay: function(){
    //Check to see if it detects the enterIncorrectOrientation
    // console.log("wrongWay");
    //When in wrongWay make the div #wrongWay display BLOCK
    document.getElementById("wrongWay").style.display="block";
  },

  rightWay:function(){
    //Check to see if it detects the leaveIncorrectOrientation
    // console.log("rightWay");
    //When in the rightWay make the div #wrongWay display NONE
    document.getElementById("wrongWay").style.display="none";
  },


  update: function () {

  },

};
