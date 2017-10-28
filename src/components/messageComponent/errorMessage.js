import React from 'react'

function ErrorM(props){
    const classes={
        hide:'hide',
        show:'show'
    }
    //console.log(props)
    if(props.errorMessage === ''){
        return <span className={"alert alert-danger fade in info_movies__error "+classes.hide}>
        {props.errorMessage}
    </span>
    }else{
        return <span className={"alert alert-danger fade in info_movies__error "+classes.show} id="show">
        {props.errorMessage}
    </span>
    }
    
}

export default ErrorM;