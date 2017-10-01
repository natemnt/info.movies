import React,{Component} from 'react'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={}

        console.log(this.props)
        
        
    }
    render(){
        const imgSizes ={
            small: '350x150',
            medium:'760x250',
            bigScreen: '1024x400'
        }
        return(
            <div className="container">
                <h1 className="col-lg-8 col-lg-offset-2">Welcome to Your Dashboard</h1>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-9 col-sm-offset-1 col-xs-10">
                    <img src={'http://via.placeholder.com/'+imgSizes.bigScreen} alt="background"/>
                    </div>
                </div>
                <div className="row">
                    <div className="info_movies__user_movies">
                        <ul className="col-lg-8">
                            <li>Your movies</li>
                            <li>Friends</li>
                            <li>Messages</li>
                        </ul>
                        <span className="col-lg-offset-2">Sort</span>
                    </div>
                </div>
                <div className="top-buffer"></div>

                <div className="row">

                </div>
            </div>
        )
    }
}
export default Dashboard;