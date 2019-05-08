import React from 'react';

const timerContext = React.createContext({
    timer: '00:00:00',
    start: () => {},
    stop: () => {},
    reset: () => {},
    save: () => {}
});

export default timerContext;