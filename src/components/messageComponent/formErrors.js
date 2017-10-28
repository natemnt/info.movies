import React from 'react'

export const FormErrors = ({formErrors}) => 
    <div className="formErrors">
        {Object.keys(formErrors).map((fieldName,i) =>{
            if(formErrors[fieldName].length > 0){
                return(
                    <p key={i} className={"info_movies__error"}
                        style={{fontSize:12+'px', textAlign:'center'}}>{fieldName} {formErrors[fieldName]}</p>                  
                )
            }else{
                return '';
            }
        })}
    </div>