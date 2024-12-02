import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import {Toggle} from "./components/Toggle.jsx";
import {Spinner} from "./components/Spinner.jsx";
import Stepper from "./scenes/Stepper.jsx";
import Manual from "./scenes/Manual.jsx";

export const MODE_STEPPER = 'stepper';
export const MODE_MANUAL = 'manual';

export const App = () => {
    const [armed, setArmed] = useState(false);
    const [mode, setMode] = useState(MODE_MANUAL);
    const [loading, setLoading] = useState(null);

    const [pins, setPins] = useState(null);
    const [error, setError] = useState(null);
    const [state, setState] = useState(null);

    const isStepper = mode === MODE_STEPPER;
    const Component = isStepper ? Stepper : Manual;

    const fetchPins = () => {
        setError(null);

        fetch('/pins')
            .then(r => r.json())
            .then(setPins)
            .catch(error => setError(error));
    };

    const fetchArmed = (patch) => {
        setError(null);

        fetch('/arm', {
            method: patch ? 'PATCH' : 'GET',
        })
            .then(r => r.json())
            .then(({armed}) => {
                if (!armed) {
                    fetchPins();
                }
                setArmed(armed);
            })
            .catch(error => setError(error));
    }

    const fetchSequencing = () => {
        fetch('/sequencer')
            .then(r => r.json())
            .then(({sequencing}) => setLoading(sequencing))
            .catch(setError);
    };

    useEffect(() => {
        if (armed) {
            fetchArmed(true);
        }
    }, [mode]);

    useEffect(fetchPins, []);
    useEffect(fetchArmed, []);
    useEffect(fetchSequencing, []);

    return (
        <div className="container">
            {!loading && (
                <div className="row w-100">
                    <div className="btn-group">
                        <Toggle
                            color="primary"
                            label={`Switch to ${isStepper ? 'manual' : 'stepper'} mode`}
                            state={isStepper}
                            onToggle={() => setMode(isStepper ? MODE_MANUAL : MODE_STEPPER)}
                        />
                        <Toggle
                            color={armed ? 'danger' : 'secondary'}
                            label="Arm"
                            state={armed}
                            onToggle={() => fetchArmed(true)}
                        />
                    </div>
                </div>
            )}

            <br/>

            {!loading && pins ? <Component
                    pins={pins}
                    setError={setError}
                    fetchPins={fetchPins}
                    armed={armed}
                    reloadArmed={() => fetchArmed()}
                    setLoading={setLoading}
                    setState={setState}
                    state={state}
                /> :
                <Spinner/>}

            {error && (
                <div className="fixed-bottom alert alert-danger">
                    <button className="btn btn-close" onClick={() => setError(null)}></button>
                    <span className="ms-1">{(typeof error == 'string') ? error : JSON.stringify(error)}</span>
                </div>
            )}
        </div>
    );
}

render(<App/>, document.getElementById('app'));
