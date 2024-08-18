import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import RuleIcon from '@mui/icons-material/Rule'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import AddBoxIcon from '@mui/icons-material/AddBox'
import DeleteIcon from '@mui/icons-material/Delete'

interface columnMenuProps {
  menuAnchor: HTMLButtonElement | null;
  handleMenuOpen?: (event: React.MouseEvent<HTMLButtonElement>, columnIndex: number) => void;
  handleMenuClose: () => void
}

const ColumnMenu: React.FC<columnMenuProps> = ({ menuAnchor, handleMenuClose, }) => {
  return (
    <Menu
      anchorEl={menuAnchor}
      open={Boolean(menuAnchor)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <RuleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Add rule to section</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <DriveFileRenameOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Rename section</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AddBoxIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Add section</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <Typography color="error">Delete section</Typography>
        </ListItemText>
      </MenuItem>
    </Menu>
  )
}

export default ColumnMenu