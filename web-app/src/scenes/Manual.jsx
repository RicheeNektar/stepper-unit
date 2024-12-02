import {Toggle} from "../components/Toggle.jsx";

const Manual = ({ pins, setError, fetchPins, armed }) => {
    const onToggle = (relay) => {
        setError(null);

        fetch(`/toggle/${relay}`, {
            method: 'PATCH',
        })
            .then(r => r.json())
            .then(({ok, message}) => {
                if (ok) {
                    fetchPins();
                } else {
                    setError(message);
                }
            })
            .catch(error => setError(error));
    };

    return (
        <>
            <div className="row">
                <Toggle
                    outline={true}
                    className="w-100"
                    label='Toggle all'
                    color={armed ? 'danger' : 'secondary'}
                    state={pins?.every(pin => pin.state)}
                    onToggle={() => onToggle('all')}
                />
            </div>

            <br/>

            <div className="row">
                <div className="btn-group-vertical">
                    {
                        pins.map((pin, i) => (
                            <Toggle
                                outline={true}
                                key={pin.id}
                                label={`Relay ${i + 1}`}
                                color={armed ? 'danger' : 'secondary'}
                                state={pin.state}
                                onToggle={() => onToggle(i)}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Manual;