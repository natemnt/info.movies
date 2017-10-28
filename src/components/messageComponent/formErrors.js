import React,{Component} from 'react'

export const FormErrors = ({formErrors}) => 
    <div className="formErrors">
        {Object.keys(formErrors).map((fieldName,i) =>{
            if(formErrors[fieldName].length > 0){
                return(
                    <p key={i} className={"info_movies__error alert alert-danger fade in"}
                        >{fieldName} {formErrors[fieldName]}</p>
                    
                )
            }else{
                return '';
            }
        })}
    </div>