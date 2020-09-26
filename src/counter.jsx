import React ,{useState} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default function Counter()
{
   // var i=0;
   const [i,setI]=useState(0);
   const [name,setName] = useState("tammi");
    function up()
    {
        if(i==0)
           setI(i+1);
               if(name=="tammi")
                 setName(name+i);
        
       // i++; 
    }
    // up();
   // setInterval(up,1000) ;<span>{name}:{i}</span>
   function increase()
   {
       setI(i+1)

   }
    return <div><p>{i}</p><button onClick={increase}>click me</button></div>;
}