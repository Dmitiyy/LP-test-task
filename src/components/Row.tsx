import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { SwitchBtn } from './SwitchBtn';
import TextField from '@mui/material/TextField';
import { TRows } from '../mockData';
import { useDispatch } from 'react-redux';
import { AppDispatch, deleteItemRed, highlightItem } from '../store';

export const Row: FC<TRows> = ({ name, id, icon: Icon, blocked }) => {
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [isIconsOpen, setIsIconsOpen] = useState<boolean>(false);
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const [ID, setID] = useState<number>(id);
  const [Name, setName] = useState<string>(name);

  const highlight = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    if ((event.target as Element).classList.contains('MuiTableCell-root') && !isBlocked) {
      setIsHighlighted(prev => !prev);
      dispatch(highlightItem({ id, value: !isHighlighted }));
    }
  }

  const openIcons = () => { if (!isBlocked) setIsIconsOpen(prev => !prev) }

  const deleteItem = () => {
    if (!isBlocked) {
      dispatch(deleteItemRed({ id }));
    }
  }

  return (
    <TableRow
      className={isHighlighted ? 'row row-highlighted' : 'row'}
      onClick={(event) => { highlight(event) }}
    >
      <TableCell align='center'>
        <div onClick={() => { setIsBlocked(prev => !prev) }}>
          <SwitchBtn />
        </div>
      </TableCell>
      <TableCell align='center'>хххх-</TableCell>
      <TableCell align='center' className='row-id'>
        <TextField
          variant="standard" defaultValue={id} onChange={(e) => { setID(+(e.target.value)) }}
          inputProps={{ readOnly: isBlocked }}
        />
      </TableCell>
      <TableCell align='center' className='row-input'>
        <Icon onClick={() => { openIcons() }} />
        <TextField
          variant="standard" defaultValue={name} onChange={(e) => { setName(e.target.value) }}
          inputProps={{ readOnly: isBlocked }}
        />
        {
          isIconsOpen && (
            <div className='row-icons'></div>
          )
        }
      </TableCell>
      <TableCell align='center'>
        <button className='delete-btn' onClick={() => { deleteItem() }}>&times;</button>
      </TableCell>
    </TableRow>
  )
}