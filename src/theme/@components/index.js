import Button from './Button';
import InputBase from './InputBase';
import TableCell from './TableCell';
import p from './p';

function Components(theme) {
  return {
    MuiButton: Button(theme),
    MuiInputBase: InputBase(theme),
    MuiTableCell: TableCell(theme),
    MuiTypography: p(theme),
  }
}

export default Components;
