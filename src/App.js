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
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ]
  const listItems = products.map(product => 
    <li key={product.id}>
    {product.title}
    </li>)
  const islogged = true;
  return (
    <div className="App">
    {listItems}
    {
      islogged ?
      <AdminPanel/> :
      <LoginForm/>
    }
    hi+{islogged}
    or
    {
      islogged && <AdminPanel></AdminPanel>
    }
    <Button info={info} style={{borderRadius: 12+"px",borderColor: "red",backgroundColor: "yellow"}} >124</Button>
      <h1>Hello CodeSandbofafdasffex</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Myp prop={"infomation"}></Myp>
      <Page />
    </div>
  );
}


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]
function ShoppingList() {
  const listItems = products.map(product => 
    <li
    key={product.id}
    style={{
      color:product.isFruit? 'magenta':'darkgreen'
    }}
    >
    console.log(listItems);
    {product.title}
    
    </li>)

    return (
      {listItems}
    )
}