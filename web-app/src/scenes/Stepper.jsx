import {useEffect, useRef, useState} from "preact/hooks";
import {Fragment} from "preact";

const Stepper = ({ pins, setError, fetchPins, armed, setLoading, state, setState, reloadArmed }) => {
    const [form, setForm] = useState(state ?? pins.map((_,id) => ({delay: 100, relay: id})));
    const fileRef = useRef(<input />);

    const changeValue = (id, key, value) => {
        const nForm = form;
        nForm[id][key] = value;
        setForm(nForm);
    };

    const submit = () => {
        setState(form);

        const body = new FormData();

        form.forEach(({delay, relay}, i) => {
            body.append(`delay[${i}]`, delay);
            body.append(`relay[${i}]`, relay);
        });

        setLoading(true);
        fetch('/sequencer', {
            method: 'POST',
            body,
        })
            .then(r => r.json())
            .then(({ok, message}) => {
                reloadArmed();
                setLoading(false);
                if (!ok) {
                    setError(message);
                }
            });
    };

    const saveFile = e => e.target.href = `data:application/json,${JSON.stringify(form)}`;

    const handleLoadSelector = () => fileRef.current.click();

    const handleLoad = () => {
        setLoading(true);

        const verifyJson = (json) => json.every(
            ({delay, relay}) => typeof(delay) === 'number' && (typeof(relay) === 'number' || relay === 'skip')
        );

        const reader = new FileReader();
        reader.addEventListener('loadend', (e) => {
            if (e.type === 'error') {
                setError('Could not load file');
            } else {
                try {
                    const loaded = JSON.parse(reader.result);

                    if (!verifyJson(loaded)) {
                        setError('Invalid data');
                    } else if (
                        loaded.length !== form.length
                    ) {
                        setError('File uses different amount of relays!');
                    } else {
                        setState(loaded);
                    }
                } catch (e) {
                    setError('File contains invalid JSON');
                }
            }

            setLoading(false);
        });
        reader.readAsText(fileRef.current.files[0]);
    };

    const renderForm = () => form?.map(({delay, relay}, i) => (
        <Fragment key={i}>
            <div className="row mb-1">
                <select
                    className="form-select"
                    onSelect={console.log}
                    onChange={e => {
                        const v = e.target.value === 'skip' ? e.target.value : parseInt(e.target.value);
                        changeValue(i, 'relay', v);
                    }}
                    value={relay}
                >
                    <option value="skip">Skip</option>
                    {pins.map((_, i) => <option value={i}>Relay {i + 1}</option>)}
                </select>
            </div>
            <div className="row mb-1">
                <div className="input-group">
                    <input
                        className="form-control"
                        type="number"
                        value={delay}
                        onChange={e => changeValue(i, 'delay', parseInt(e.target.value))}
                    />
                    <span className="d-block badge bg-black">ms</span>
                </div>
            </div>
        </Fragment>
    ));

    useEffect(() => {
        if (pins.some(pin => pin.state)) {
            fetch('/toggle/all', {method: 'PATCH'})
                .then(() => fetchPins())
                .catch(setError);
        }
    }, [pins]);

    return (
        <>
            <div className="row">
                <button className={`btn btn-${armed ? 'danger' : 'secondary'}`} onClick={submit}>Fire!</button>
            </div>

            <br/>

            {renderForm()}

            <br/>

            <div className="row">
                <div className="btn-group w-100">
                    <a
                        onClick={saveFile}
                        className="btn btn-primary"
                        download="sequencer.json"
                    >
                        Save to file
                    </a>
                    <button className="btn btn-primary" onClick={handleLoadSelector}>
                        Load from file
                        <input ref={fileRef} type="file" onChange={handleLoad} hidden/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Stepper;