import { Component } from "react";



class ClassCounter extends Component{

    state={
        isClicked:false,
        counter :0
    }
   increment =()=>{
    this.setState((next)=>{

        return {
            isClicked:true,
            counter:next.counter+1
              
        }
    })
   }


   decrement =()=>{
    this.setState((prev)=>{
        return{
            isClicked:false,
            counter:prev.counter-1
            
        }
    })
   }
    render(){
        const{counter,isClicked} =this.state;
        return(
            <>
              <button onClick={this.increment}></button>
              { isClicked ?(<p>{counter}</p>):(<p>{counter}</p>) }
              
              <button onClick={this.decrement}></button>

            </>
        )
    }
}

export default ClassCounter;