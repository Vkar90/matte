import React, { FC, MouseEventHandler } from 'react';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { ChevronDown } from 'react-feather';
import { MatteTheme } from '../../utilities/createMatteTheme.component';
import styles from './select.module.scss';

export interface Items {
  value: string | number;
  text: string;
}

export interface SelectProps {
  /**
   * Whether the `input` element is disabled.
   */
  disabled?: boolean;
  /**
   * Whether error state is true.
   */
  error?: boolean;
  /**
   * Helper text that appears below the input, useful for showing hints.
   */
  helperText?: React.ReactNode;
  /**
   * The id of the `input` element.
   */
  id: string;
  /**
   * Any array of items that become select's `option` elements.
   */
  items?: Items[];
  /**
   * The content of the label, if empty no label will be shown.
   */
  label?: React.ReactNode;
  /**
   * Text for the placeholder.
   */
  placeholder?: string;
  /**
   * Whether this input is required, will append an asterisk if a label is used.
   */
  required?: boolean;
  /**
   * The value for the `input` element. Setting to an empty string '' selects
   * no option. Usually is controlled by the application state.
   */
  value?: any;
  /**
   * The function to be executed when an option is selected
   */
  // onChange?: (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>,
  //   child: React.ReactNode
  // ) => void;
  onChange?: any;
}

export const Select: FC<SelectProps> = ({
  id,
  placeholder,
  disabled = false,
  value,
  error = false,
  helperText,
  label,
  required = false,
  items = [],
  onChange,
}) => {
  return (
    <FormControl
      variant="outlined"
      className={styles.formControl}
      error={error}
    >
      {label && (
        <InputLabel
          variant="standard"
          className={styles.label}
          htmlFor={id}
          disableAnimation
          required={required}
          sx={{
            color: 'common.black',
            '&.Mui-focused': {
              color: 'common.black',
            },
          }}
        >
          {label}
        </InputLabel>
      )}
      <MuiSelect
        id={id}
        labelId="select"
        input={
          <InputBase
            id={`${id}-input`}
            fullWidth
            classes={{ input: styles.input }}
            sx={{
              border: ({ palette }) => `1px solid ${palette.grey[200]}`,
            }}
          />
        }
        IconComponent={ChevronDown}
        displayEmpty={!!placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {placeholder && (
          <MenuItem className={styles.menuItem} value="">
            {placeholder}
          </MenuItem>
        )}
        {items.map((item, i) => (
          <MenuItem value={item.value} className={styles.menuItem} key={i}>
            {item.text}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText error={error} id={`${id}-helper-text`}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
