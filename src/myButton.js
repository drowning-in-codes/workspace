export default function Button() {
    return (
        <button><i>Click</i> me !
        <br/>
        <Lable phase="你好"/>
        </button>
        )
}

function Lable(phases) {
    return (
        <div>{phases}</div>
    )
}