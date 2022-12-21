import { FC, useState } from "react";
import TableCell from '@mui/material/TableCell';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';

interface IProps {
  title: string;
  menuItems: string[];
}

export const HeaderCell: FC<IProps> = ({ title, menuItems }) => {
  const [name, setName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof name>) => {
    const { target: { value } } = event;
    setName(typeof value === 'string' ? value.split(',') : value);
  }

  return (
    <TableCell align='center'>
      <Box className='header-item'>
        <h3>{title}</h3>
        <FormControl variant="standard" className='header-select'>
          <Select multiple value={name} onChange={handleChange}>
            {
              menuItems.map((item, index) => {
                return (
                  <MenuItem value={String(index)} key={item}>
                    <span className="header-select-item">{item}</span>
                  </MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </Box>
    </TableCell>
  )
}