import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import { Link, useLocation } from 'wouter'

interface SidebarItemProps {
  href: string;
  Icon: React.ElementType;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, Icon, text }) => {
  const [location] = useLocation()
  const isActive = location === href

  return (
    <ListItemButton selected={isActive} LinkComponent={Link} href={href}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <SidebarItem href='/' Icon={DashboardIcon} text='Dashboard' />
        <SidebarItem href='/settings' Icon={SettingsIcon} text='Settings' />
      </List>
    </Drawer>
  )
}

export default Sidebar