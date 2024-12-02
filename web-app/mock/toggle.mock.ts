import { defineMock } from "vite-plugin-mock-dev-server/helper";

let armed = false;
let sequencing = false;
let pins = [
    {
        id: 1,
        state: false,
    },
    {
        id: 2,
        state: false,
    },
    {
        id: 3,
        state: false,
    },
    {
        id: 4,
        state: false,
    },
    {
        id: 5,
        state: false,
    },
    {
        id: 6,
        state: false,
    },
    {
        id: 7,
        state: false,
    },
    {
        id: 8,
        state: false,
    },
];

type Params = {
    id: string;
};

export default defineMock([
    {
        url: '/arm',
        method: 'GET',
        body: () => ({armed}),
    },
    {
        url: '/sequencer',
        method: 'POST',
        body: async ({body: {delay}}) => {
            if (sequencing) {
                return {ok: false, message: 'Sequence in progress'};
            }

            if (!armed) {
                return {ok: false, message: 'Not armed'};
            }

            sequencing = true;
            await new Promise(r => setTimeout(r, delay.reduce((acc,v) => acc + parseInt(v), 0)));
            sequencing = false;

            armed = false;
            return {ok: true};
        },
    },
    {
        url: '/sequencer',
        method: 'GET',
        body: () => ({sequencing}),
    },
    {
        url: '/arm',
        method: 'PATCH',
        body: () => {
            if (sequencing) {
                return {armed};
            }
            armed = !armed;
            if (!armed) {
                pins.forEach((_, i) => pins[i].state = false);
            }
            return {armed};
        },
    },
    {
        url: '/pins',
        method: 'GET',
        body: pins
    },
    {
        url: '/toggle/:id',
        method: 'PATCH',
        body: ({params: {id: sid}}: { params: Params }) => {
            if (sequencing) {
                return {ok: false, message: 'Sequence in progress'};
            }

            if (!armed) {
                return {ok: false, message: 'Not armed'};
            }

            if (sid === 'all') {
                const state = !pins.some(v => v.state) && !pins.every(v => v.state);
                pins.forEach((_,i) => pins[i].state = state);

                return {
                    ok: true,
                };
            }

            const id = parseInt(sid, 10);
            pins[id].state = !pins[id].state;

            return {
                ok: true,
            };
        },
    }
]);