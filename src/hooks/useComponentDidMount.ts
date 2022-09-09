import {useEffect} from 'react';

const useComponentDidMount = (onMountHandler: (...args: any) => any) => {
    useEffect(() => {
        onMountHandler();
    }, []);
};
export default useComponentDidMount;