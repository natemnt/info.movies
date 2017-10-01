import React from 'react';

function WarningM(props){
    const classes={
        hide:'hide',
        show:'show'
    }
    if(props.warningMessage === ''){
    return <span className={"alert alert-warning fade in info_movies__warning "+classes.hide}>
    {props.warningMessage}
</span>}else{
    return <span className={"alert alert-warning fade in info_movies__warning "+classes.show}>
    {props.warningMessage}
</span>
}
}

export default WarningM;