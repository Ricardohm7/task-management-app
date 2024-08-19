import React, { createContext, useState, useContext, ReactNode } from 'react'

interface MenuContextType {
  activeMenu: string | null;
  setActiveMenu: (id: string | null) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  return (
    <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
export default MenuProvider

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}