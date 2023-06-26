
export default function aButton({info,style,children}) {
    return (
    <div>
    
    <img className="avatar" src="https://placehold.co/600x400" alt="" />
        <p>{info.son.name}</p>
        <p>姓名:{info.name}</p>
        <p>年龄:{info.age}</p>
        {info.otherinfo              
            .map((value,index)=>
                <p>test{value},{index}</p>)}
        {
            info.sths.map((val)=>{
                return <p key={val.age}>{val.name},{val.age}</p> ;
            })
        }

        {
            children && children+'test'
        }
 
 
         {/*
            // children?    
            // children+'test':
            // children
        */}
        
        
        {
            info.otherinfo[1]
        }
        hello
        <button><i>Click</i> me !
        </button>
        <Lable phases="你好">react</Lable>
        </div>
        )
        
}

function Lable({phases,children}) {
    return (
        <>
        <div>{phases},say what you want say!</div>
        <div>{children}</div>
        </>
    )
}