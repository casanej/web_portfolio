import React, { useEffect } from 'react'

interface Props { }

const HomeApp = (props: Props) => {
    useEffect(() => {
        console.log('[HomeApp] Started with success');
    }, []);
    return (
        <div>HomeApp</div>
    );
};

export { HomeApp };
