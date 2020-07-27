import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div style = {{marginTop: '100px', textAlign: 'center'}}>
                    <h1 style = {{textAlign: 'center'}}>The future is uncertain<br/>but your health shouldn't be.... </h1>
                    <img style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '20%'}} src = 'https://cdn.dribbble.com/users/757310/screenshots/6692596/medical-cross-pill.jpg'></img>
                </div>
                <img style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '20%'}} src = 'https://i.dlpng.com/static/png/5484511-fancy-lines-png-abeoncliparts-cliparts-vectors-fancy-line-640_480_preview.png'></img>
                <div style = {{marginTop: '0px', textAlign: 'center'}}>
                    <h1 style = {{textAlign: 'center'}}>We help organizations and consumers <br/>navigate their medical needs with <br/>custom and innovative solutions</h1>
                    <div style = {{textAlign: 'center', marginLeft: '105px', marginRight: '105px', marginTop: '40px'}}>
                        <img style = {{float: "left", width: '30%'}} src = 'https://uirehabpa.com/wp-content/uploads/2019/04/medical-services-1024x683.jpg' ></img>
                        <img style = {{float: "center", width: '30%'}} src = 'https://officesnapshots.com/wp-content/uploads/2019/04/northern-trust-offices-pune-13-700x467.jpg' ></img>
                        <img style = {{float: "right", width: '30%'}} src = 'https://abuyamaantutors.com/wp-content/uploads/2015/03/q12.jpg' ></img>
                    </div>
                    <div style = {{textAlign: 'center', marginLeft: '100px', marginRight: '360px', marginTop: '40px'}}>
                        <text style = {{float: "left", fontWeight: 'bold', fontSize :'25px'}} > Our Services</text>
                        <text style = {{float: "center", fontWeight: 'bold', fontSize :'25px'}}>Our Offices</text>
                        <text style = {{float: "right", fontWeight: 'bold', fontSize :'25px'}}>Our Staff</text>
                    </div>
                    <div style = {{textAlign: 'center', marginLeft: '100px', marginRight: '300px', marginTop: '40px'}}>
                        <Link style = {{transform: 'translateY(-9px)',float: "left", fontWeight: 'bold', backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}} > Learn More →</Link>
                        <Link style = {{float: 'center', fontWeight: 'bold', backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}}>Learn More →</Link>
                        <Link to = '/about/staff' style = {{transform: 'translateY(-9px)',float: "right", fontWeight: 'bold',  backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}}>Learn More →</Link>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Home