const useTimeout = (callback, delay) => {
    const savedCallback = React.useRef();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay != null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay])
};

//Example

const ExampleTimerFiveSeconds = props => {
    const [seconds, setSeconds] = React.useState(0);
    useTimeout(() => {
        setSeconds(seconds + 1);
    }, 5000);

    return <p>{seconds}</p>
};

ReactDOM.render(<ExampleTimerFiveSeconds />, document.getElementById('root'));