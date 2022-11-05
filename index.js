class Bear extends React.Component {
    render() {
        return (
            <div id="corpo" className="center">
                <div>
                    <h1>Bear!</h1>

                </div>
            </div>
        );
    }
}
ReactDOM.render(<Bear />, document.querySelector("#app"));