import { FC } from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import { mockSelects } from '../mockData';
import { HeaderCell } from "./HeaderCell";
import { useDispatch } from "react-redux";
import { add, AppDispatch, deleteAll } from "../store";

export const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TableHead>
      <TableRow>
        {
          mockSelects.map((item, index) => {
            const { title, items } = item;
            return (
              <HeaderCell title={title} menuItems={items} key={title + index} />
            )
          })
        }
        <TableCell align='center'>
          <Box className='header-item'>
            <button className='header-btn' onClick={() => { dispatch(add({})) }}>&#43;</button>
            <button className='header-btn' onClick={() => { dispatch(deleteAll()) }}>&times;</button>
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  )
}