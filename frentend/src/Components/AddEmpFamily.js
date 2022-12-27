import React, {  useState } from 'react';
import "./AddEmpFamily.css"
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const AddEmpFamily=()=>{
    const[emp, setEmp]=useState({
       regEmployeeCode: "",
       regDependencyType: "",
       regDependencyDob:"",
       regAge: "",
       regDependencyOccupation: "",
       regDependencyAadhaarNumber: "",
       regDependencyPanNumber: "",
    })
    //Dropdown values
    const options = [
        { value: 'Father', label: 'Father' },
    { value: 'Mother', label: 'Mother' },
    { value:'Daghter',label:'Daughter'},
    { value:'Son', label: 'Son'}
]

//validation//

function oninputChange1() {
    var txt = document.getElementById("s7").required=("please enter your SlabName");
                     
    document.getElementById("valid").innerHTML = txt;


    var txtee = document.getElementById("s1").required=("please enter your SlabName");
                     
    document.getElementById("vd").innerHTML = txtee;

    var txteee = document.getElementById("s6").required=("please enter your SlabName");
                     
    document.getElementById("Aa").innerHTML = txteee;


   //only for Allow the numbers
    let x = document.getElementById("s1").value;
    let text;
       if (isNaN(x)|| x <= 1 || x<=7) {
        window.alert("please enter your 6 digits ");
              } else {
            text = "Input OK";
            }
         document.getElementById("vd").innerHTML = text;


         var regDependencyPanNumber = document.getElementById("s7")
         if (regDependencyPanNumber.value === "") {
             window.alert("please enter your 6 digits Area PIN");
             regDependencyPanNumber.focus();
             return false;
         }
       }

        //Age Calculation
       function Display() {

        var day = document.getElementById("s3").value;
        var DOB = new Date(day);
        var today  = new Date();
        var Age = today.getTime() - DOB.getTime();
        Age= Math.floor(Age / (1000 * 60 * 60 * 24 * 365.25));
        console.log("ok")
        setEmp({...emp,regAge:Age.toString() });
      }
       

       
    const{regEmployeeCode,regDependencyDob,regAge, regDependencyOccupation,regDependencyAadhaarNumber, regDependencyPanNumber}=emp;

    const oninputChange= e=>{

    setEmp({...emp,[e.target.name]: e.target.value});
    }
    //fetch the backend data
    const onSubmit = async =>{
        
       axios.post("https://localhost:7006/api/EmpFamilys/InsertEmp",emp);
        alert ("Data inserted");
    };


    return(
       <div className='overall'>
            <div className='text-center'>
                
                <form onSubmit={e =>onSubmit(e)}>
                    <h1>Add Emp Familys</h1>
            
                <div className="form-group">
                    <div id="Code">
                   <p id="a1">RegEmployeeCode</p> 
                    <input id="s1"
                     type="text" 
                     placeholder="RegEmployeeCode"
                     name="regEmployeeCode"
                     value={regEmployeeCode}
                    onChange={e =>oninputChange(e)}
                   
                    />
                    <p onClick={oninputChange}id="vd"></p>
                     
                    </div>
                </div>
                

                <div className='r43'>
                    <p id="a2">RegDependencyType</p>
                    <Dropdown class="drop" 
                    options={options}
                     name='regDependencyType'
                      onChange={(value) => setEmp({...emp,
                    regDependencyType:value.value})} 
                    value={emp.regDependencyType}
                    placeholder="Select ">

                    </Dropdown>
                   
                </div>
                

                <div id="DOB">
                  <p id="a3">RegDependencyDob</p>
                   <input id="s3"
                    type ="date"
                     placeholder="RegDependencyDob"
                     name="regDependencyDob"
                     value={regDependencyDob}
                    onChange={e => oninputChange(e)}
                    />
                </div>


                <div>
                    <p id="a4">RegAge</p>
                   <input type="text" 
                  
                     id="s4"
                     onMouseMove={Display}  
                      placeholder="RegAge"
                      name="regAge"value={regAge}
                    onChange={e =>oninputChange(e)}
                 
                    />
                </div>
                


                <div id="occ">
                   <p id="a5">RegDependencyOccupation</p>
                   <input id="s5" type ="text" placeholder="RegDependencyOccupation"name="regDependencyOccupation"value={regDependencyOccupation}
                    onChange={e =>oninputChange(e)}
                    />
                      <p onClick={oninputChange}id="Oc"></p>
                </div>


                <div id="Ad">
                    <p id="a6">RegDependencyAadhaarNumber</p>
                   <input id="s6" type ="text" 
                    placeholder="RegDependencyAadhaarNumber"
                    name="regDependencyAadhaarNumber"
                    value={regDependencyAadhaarNumber}
                   
                    onChange={e => oninputChange(e)}
                    
                    
                   
                    
                    />
                     <p onClick={oninputChange}id="Aa"></p>
                 
                    
                </div>


                <div>
                    <p id="a7">RegDependencyPanNumber</p>
                   <input id="s7" type ="text" placeholder="RegDependencyPanNumber"name="regDependencyPanNumber"value={regDependencyPanNumber}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={oninputChange}id="valid"></p>
                </div>
                <button className='btn'type="Submit"  onClick={oninputChange1}value="Submit" >AddEmpFamily</button>

                </form>
            
            
                </div>
                </div>
        
    )
}
export default AddEmpFamily;
