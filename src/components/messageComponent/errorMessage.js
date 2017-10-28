import React from 'react'

function ErrorM(props){
    /*const classes={
        hide:'hide',
        show:'show'
    }*/
    //console.log(props)
    if(props.errorMessage === ''){
        return <span></span>
    }else{
        return <span className={"info_movies__error "}>
                    {props.errorMessage}
                </span>
    }
    
}

export default ErrorM;