class NationalGame
{
    gameip:string;

    constructor(ip:string)
    {
        this.gameip=ip;

    switch (this.gameip)
     {
        case'India':  
      console.log("India National Game is = Hockey");  
      break;
      
      case'China':  
      console.log("China National Game is = Table Tennis");  
      break;

      case'Bangladesh':  
      console.log("Bangladesh National Game is = Kabbadi");  
      break;

      case'Italy':  
      console.log("Italy National Game is = Football");  
      break;

      case'United State':  
      console.log("US National Game is = BaseBall");  
      break;
    
        default: console.log("Invalid Country")
        break;
    }

  }
}

let coun1=new NationalGame("India");