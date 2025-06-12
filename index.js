const letters = ["B", "e", "a", "r"];
let word = letters.join("");
function stringToArray(str) {
    return str.split("")
}
function variar(str){
    let arr = stringToArray(str)
    for (let i = arr.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr.join("")
}

class Bear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { word: variar(word) };
        this.randomizeWord = this.randomizeWord.bind(this);
    }

    randomizeWord() {
        this.setState({ word: variar(word) });
    }

    render() {
        return (
            <div id="corpo" className="center">
                <div>
                    <h1>{this.state.word}</h1>
                    <button onClick={this.randomizeWord}>Randomizar</button>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Bear />, document.querySelector("#app"));

