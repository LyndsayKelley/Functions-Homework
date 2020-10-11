var DragonHealth = 10

 

function attack(damage,type){
  if("FireAttack"==type){
    DragonHealth = DragonHealth - (damage - 1)
    document.body.querySelector(".DragonHealth").innerHTML = DragonHealth
  }
  
  if("IceAttack"==type){
    DragonHealth = DragonHealth - (damage + 1)
    document.body.querySelector(".DragonHealth").innerHTML = DragonHealth
  }
   
  if("PoisonAttack"==type){
    DragonHealth = DragonHealth - damage 
    document.body.querySelector(".DragonHealth").innerHTML = DragonHealth
  }
  if(DragonHealth<=0){
  document.body.querySelector(".Ending").innerHTML = "You Have Defeated the Dragon"
}
    }
    
      document.body.querySelector(".FireAttack").addEventListener("click", function(){
        attack(3,"FireAttack")
})
      document.body.querySelector(".IceAttack").addEventListener("click", function(){
        attack(1,"IceAttack")
})
      document.body.querySelector(".PoisonAttack").addEventListener("click", function(){
        attack(4,"PoisonAttack")
})



document.body.querySelector(".DragonHealth").innerHTML = DragonHealth