import React, {Component} from 'react';
//import postscribe from 'krux-postscribe';



class Boxoffice extends Component {
//fix this
  /*componentWillMount(){
    const script = document.createElement("script");

    script.src = "http://www.boxofficemojo.com/data/js/wknd5.php";
    script.async = true;

    document.body.appendChild(script);
   
    (function(){
      postscribe('.info_movies__boxOffice', script,{
        error:function(e){
          console.log(e);
        },
        done:function(){
          console.log('done box office');
        }
      });
    })();
}*/
  render() {
    return (
     <div className="container-fluid">

        <h1>
            Box Office Gross
        </h1>

        <p>
            Some content
        </p>
        <div className="info_movies__boxOffice">

        </div>
        
         </div>
    );
  }
}

export default Boxoffice;