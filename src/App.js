import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css'
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
//import Amplify, { Auth } from 'aws-amplify';

//import {HashLink} from 'react-router-hash-link'
var AWS = require('aws-sdk/dist/aws-sdk-react-native');
var poolData = {
  UserPoolId: "us-east-1_tLwgFiE9F",
  ClientId: "3pqs5drjnjggr6gn3hglsp1eu2"
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active: "Home"
        }
        this.changeBackground = this.changeBackground.bind(this)
    }
    async componentWillMount(){
      var cognitoUser = await userPool.getCurrentUser();
      
      console.log(cognitoUser)
      this.setState({
        active: "Home"
      })
      if (cognitoUser != null) {
        
        
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
            // other AWS actions ...
        });
    }

    }
    isActive(tab){
        this.setState({
            active: tab
        })
    }
    changeBackground(id){
        var currentValue = this.state.active
        if(currentValue == "Home"){
            let originalURL = document.getElementById(id).style.backgroundImage
            let newURL = 'https://hitconsultant.net/wp-content/uploads/2017/05/Biomedical-Engineering-to-Watch.jpg'
            document.getElementById('LinkContainer').style.backgroundImage = 'url(newURL)'
        }
    }
    render(){
        return (
            <div>
                {this.state.active == "Home" ? 
                (
                    <Router id = 'Router'>
                    <div>
                    <img className = 'Logo' height = "5%" width = "10px"src = 'https://i.pinimg.com/originals/21/66/52/2166520525df3b2c843091b1c832ad0b.jpg'></img>
                    <img className = 'CompanyName'height = "10%" width = "10px" src = 'https://s3.amazonaws.com/logos.brandpa.com/uploads/d98ac247a52a65c6cff7239de070162e/aloena.png'></img>
                    <div className="vertical_dotted_line">

                    </div>
                    <div className = 'visit_company'>
                        <img className = 'mapsLogo' height = "10%" width = "10px"src = 'https://i.pinimg.com/originals/71/c8/06/71c806428f9d8c76f8dd491ee177382c.png'></img>
                    </div>
                    <div className = 'address'>
                        <text ><strong>Visit Us: </strong> 3 Nashua Drive, Marlboro, New Jersey, USA</text>
                    </div>
                    <div className = 'CallUs'>
                    <img className = 'telephone_logo' height = "10%" width = "10px" src = 'https://cdn2.iconfinder.com/data/icons/market-and-economics-2-1/512/68-512.png'></img>
                    <a className = 'CallUsButton'>
                        <strong>Call Us:</strong> (848) 218-3004
                    </a>
                    </div>
                    <div className = 'SocialMedia'>
                        Social Media:
                        <img className = 'Instagram' height = '10%' width = '10px' src = 'http://pluspng.com/img-png/instagram-vector-png-instagram-insta-logo-new-images-710.png'></img>
                        <img className = 'Facebook' height = '10%' width = '10px' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9-oN3iUXB5m_pwyIFb6UE_4Xj2Rp0l2DBR6NV6stEb1vOZs2&s'></img>
                        <a href = "https://fitnessreactapp.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=3pqs5drjnjggr6gn3hglsp1eu2&redirect_uri=https://master.d19md7g5o94cab.amplifyapp.com/&scope=aws.cognito.signin.user.admin" style = {{textDecoration: 'none', color: 'blue', fontFamily: 'Garamond', fontWeight: 'bold',marginLeft: '25px'}}>Log In</a>
                        <a href = "https://fitnessreactapp.auth.us-east-1.amazoncognito.com/signup?response_type=token&client_id=3pqs5drjnjggr6gn3hglsp1eu2&redirect_uri=https://master.d19md7g5o94cab.amplifyapp.com/&scope=aws.cognito.signin.user.admin" style = {{textDecoration: 'none', color: 'blue', fontFamily: 'Garamond', fontWeight: 'bold',marginLeft: '25px'}}>Sign Up</a>
                    </div>
                    
                    </div>
                    <a name = 'section1'>
                    <div id = 'LinkContainer' className = 'LinkContainer' style = {{backgroundImage: "url('https://img.freepik.com/free-vector/2019-new-year-fitness-concept-workout-typography-alphabet-design_45996-1089.jpg?size=626&ext=jpg')", height: '700px',width: '1800px', backgroundSize: 'cover'}}>
                    <div class="navbar"  >
                        <Link onClick = {this.isActive.bind(this, 'Home')} style = {{textDecoration: 'none', color: 'blue', fontFamily: 'Garamond', fontWeight: 'bold'}} to = '/'>Home</Link>
                        <div class="dropdown">
                            <button class="dropbtn">
                            <Link  onClick = {this.isActive.bind(this, "About")} style = {{textDecoration: 'none', color: 'blue', fontFamily: 'Garamond', fontWeight: 'bold'}} to = '/about'>About</Link>
                            </button>
                        <div class="dropdowncontent">
                            <Link onClick = {this.isActive.bind(this, "About")} to = '/about/staff'>Our Staff</Link>
                            <Link onClick = {this.isActive.bind(this, "About")} to = '/about/services'>Our Services</Link>
                            <Link onClick = {this.isActive.bind(this, "About")} to = '/about/offices'>Our Offices</Link>
                        </div>
                    </div>
                    </div>
                    </div>
                    </a>
                    <Switch>
                        <Route path = '/about'>
                        </Route>
                        <Route path = '/'>
                            <Home changeParentState = {this.isActive.bind(this, "About")}/>
                        </Route>
                        
                    </Switch>
                </Router>   
                ): (
                    <Router id = 'Router'>
                        <div id = 'LinkContainer' className = 'LinkContainer' style = {{backgroundImage: "url('https://hitconsultant.net/wp-content/uploads/2017/05/Biomedical-Engineering-to-Watch.jpg')", height: '900px', backgroundSize: 'cover'}}>
                    <div class="navbar">
                        <Link onClick = {this.isActive.bind(this, 'Home')} style = {{textDecoration: 'none', color: 'white', fontFamily: 'Garamond', fontWeight: 'bold'}} to = '/'>Home</Link>
                        <div class="dropdown">
                            <button class="dropbtn">
                            <Link  onClick = {this.isActive.bind(this, "About")} style = {{textDecoration: 'none', color: 'white', fontFamily: 'Garamond', fontWeight: 'bold'}} to = '/about'>About</Link>
                            </button>
                        <div class="dropdowncontent">
                            <Link onClick = {this.isActive.bind(this, "About")} to = '/about/staff'>Our Staff</Link>
                            <Link onClick = {this.isActive.bind(this, "About")} to = '/about/services'>Our Services</Link>
                            <Link onClick = {this.isActive.bind(this, "About")} to = '/about/offices'>Our Offices</Link>
                        </div>
                    </div>
                    </div>
                    </div>
                <Switch>
                    <Route path = '/about'>
                    </Route>
                    <Route path = '/'>
                        <Home changeParentState = {this.isActive.bind(this, "About")}/>
                    </Route>
                    
                </Switch>
            </Router>
                )}
            </div>

            
        )
    }
}
function callAppFunctions(name){
    var myApp = new App()
    
}
const Home = ({changeParentState}) => (
    <div>
            <div className = 'dotContainer'>
                <a  href = '#section1'id = "dot1" class="dot">
                    <text id = "t1" class="text">HOME</text>
                </a>
                <a href = '#section2'id = "dot2" class="dot">
                    <text id = "t2" class="text">ABOUT</text>
                </a>
                <a href = '#section3'id = "dot3" class="dot">
                    <text id = "t3" class="text">CONTACT</text>
                </a>
                <a href = '#section4'id = "dot4" class="dot">
                    <text id = "t4" class="text">SUBSCRIBE</text>
                </a>
            </div>
            <a name = 'section2'>
            <div style = {{marginTop: '50px', textAlign: 'center'}}>
                <h1 style = {{textAlign: 'center'}}>Customize Your Fitness Schedule<br/></h1>
            </div>
            <div style = {{marginTop: '10px', textAlign: 'center'}}>
              <img style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%'}} src = 'https://img.freepik.com/free-vector/calendar-set-flat-style_98396-1386.jpg?size=626&ext=jpg'></img>

              </div>
            <img style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '20%'}} src = 'https://i.dlpng.com/static/png/5484511-fancy-lines-png-abeoncliparts-cliparts-vectors-fancy-line-640_480_preview.png'></img>
            <div style = {{marginTop: '0px', textAlign: 'center'}}>
                <div style = {{textAlign: 'center', marginLeft: '105px', marginRight: '105px', marginTop: '40px'}}>
                    <img style = {{float: "left", width: '30%'}} src = 'https://uirehabpa.com/wp-content/uploads/2019/04/medical-services-1024x683.jpg' ></img>
                    <img style = {{float: "center", width: '30%'}} src = 'https://officesnapshots.com/wp-content/uploads/2019/04/northern-trust-offices-pune-13-700x467.jpg' ></img>
                    <img style = {{float: "right", width: '30%'}} src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-trainer-2-1533576998.png' ></img>
                </div>
                <div style = {{textAlign: 'center', marginLeft: '100px', marginRight: '360px', marginTop: '20px'}}>
                    <text style = {{float: "left", fontWeight: 'bold', fontSize :'25px'}} > Our Services</text>
                    <text style = {{float: "center", fontWeight: 'bold', fontSize :'25px'}}>Our Offices</text>
                    <text style = {{float: "right", fontWeight: 'bold', fontSize :'25px', transform: 'translateX(90px)'}}>Our Trainers</text>
                </div>
                <div style = {{textAlign: 'center', marginLeft: '100px', marginRight: '300px', marginTop: '20px'}}>
                    <Link onClick = {changeParentState} to = '/about/services' style = {{transform: 'translateY(-9px)',float: "left", fontWeight: 'bold', backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}} > Learn More →</Link>
                    <Link onClick = {changeParentState} to = '/about/offices' style = {{float: 'center', fontWeight: 'bold', backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}}>Learn More →</Link>
                    <Link onClick = {changeParentState} to = '/about/staff' style = {{transform: 'translateY(-9px)',transform: 'translateX(45px)',float: "right", fontWeight: 'bold',  backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}}>Learn More →</Link>
                </div>
            </div>
            </a>
            <a name = 'section3'>
            <div className = 'ContactUs'>
                <h1>Contact Us</h1>
            </div>
            </a>
            <a name = 'section4'>
            <div className = 'Subscribe'>
            </div>
            </a>
        </div>
)
/*function Home(){
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
                    <Link  to = '/about/staff' style = {{transform: 'translateY(-9px)',float: "right", fontWeight: 'bold',  backgroundColor: '#be2826', padding: '12px 45px', borderRadius: '2px', fontSize: '12px',color: 'white', border: '0px'}}>Learn More →</Link>
                </div>
            </div>
        </div>
    )
}*/
export default App;