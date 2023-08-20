import { useContext } from 'react';
import { TabsContext } from '../context/tabs/TabsContext';

export const useTabs = () => {
    const context = useContext(TabsContext);

    if (context === undefined) {
        throw new Error('You must envolve you application into a TabsProvicer');
    }

    return context;
}
