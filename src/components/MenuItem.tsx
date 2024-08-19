import MenuItemComponent from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import { SvgIconProps } from '@mui/material'

interface MenuItemProps {
  icon: React.ReactElement<SvgIconProps>;
  text: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => {
  return (
    <MenuItemComponent onClick={onClick}>
      <ListItemIcon>
        {React.cloneElement(icon, { fontSize: 'small' })}
      </ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItemComponent>
  )
}

export default MenuItem