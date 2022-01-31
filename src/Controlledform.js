import react from "react"
import "./App.css"

var formData=[
    {
        label:"FirstName",
        key:"fname"
    },{
        label:"LastName",
        key:"lname"
    },
    
]

export default function Controlledform(){

    return (
        <div className="form1"> <h1>Form BEGINS</h1>
         <form>
           {formData.map((data)=>{
               return <div class="inside">
                  
                   <div>{data.label}<input/></div>
                   

                    
                   </div>
               
              
           })}
           </form>
            

        </div>

    
    )
}