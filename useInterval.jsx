// If you want to implement setInterval in a declarative manner you can use this hook called useInterval.
// First, we have to create a custom hook taking in a callback and a delay. Then we use useRef to create a ref for the callback. Finally, we use useEffect to remember the latest callback and to set up the interval and clean up.

const useInterval = (callback, delay) => {
    savedCallback = React.useRef();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
};

//Example

const ResourceCounter = props => {
    const [resources, setResources] = React.useState(0);
    useInterval(() => {
        setResources(resources + 2);
    }, 200)

    return <p>{resources}</p>
};

ReactDOM.render(<MoneyCount />, document.getElementById('root'));