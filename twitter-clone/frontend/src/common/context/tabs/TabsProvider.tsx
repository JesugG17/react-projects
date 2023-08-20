import { TabsContext } from "./TabsContext"
import { useState, PropsWithChildren, FC } from 'react';

export const TabsProvider: FC<Props> = ({ children }) => {
    const [tabSelected, setTabSelected] = useState(0);
  return (
    <TabsContext.Provider value={{
        tabSelected,
        setTabSelected
    }}>
        {children}
    </TabsContext.Provider>
  )
}

type Props = PropsWithChildren;
