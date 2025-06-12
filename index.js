let word = "Bear"
function stringToArray(str) {
    let arr = []
    for (let i = 0; i < str.length; i++){
        arr.push(str[i])
    }
    return arr
}
function variar(str){
    let arr = stringToArray(str)
    for (let i = arr.length -1; i>0; i--){
        const j= Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr.join('')
}

class Bear extends React.Component {
    render() {
        return (
            <div id="corpo" className="center">
                <div>
                    <h1>{variar(word)}</h1>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Bear />, document.querySelector("#app"));
