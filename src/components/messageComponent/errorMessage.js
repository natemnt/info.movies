import React from 'react'

function ErrorM(props){
    const classes={
        hide:'hide',
        show:'show'
    }
    console.log(props)
    return <span className={"alert alert-danger fade in info_movies__error "+classes.hide}>
        {props.errorMessage}
    </span>
}

export default ErrorM;