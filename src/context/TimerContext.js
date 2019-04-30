import React from 'react';

const timerContext = React.createContext({
    timeStr: '00:00:00',
    pushToArray: () => {}
});

export default timerContext;