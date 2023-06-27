import Button from './myButton'
import Page from "./mysection";
import "./styles.css";
import { AdminPanel,LoginForm } from './panel';


const Myp = ({props})=>{
  return <div>
    this is {props}
  </div>
}
export default function App() {
  const info = {
    name:'zhangsan',
    age:12,
    otherinfo:[1,2,3],
    son:{
      name:"test",
      age:1
    },
    sths:[
      {
       name:"a",
       age:12 
      },
      {
        name:"b",
        age:12
      }


    ]
      
  }
  const islogged = True;
  return (
    <div className="App">
    {
      islogged ?
      <AdminPanel/> :
      <LoginForm/>
    }
    <Button info={info} style={{borderRadius: 12+"px",borderColor: "red",backgroundColor: "yellow"}} >124</Button>
      <h1>Hello CodeSandbofafdasffex</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Myp prop={"infomation"}></Myp>
      <Page />
    </div>
  );
}

