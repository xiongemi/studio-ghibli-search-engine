import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Button, Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';

export interface SearchFormProps {
  searchText?: string;
  onSubmit: (searchText: string) => void;
}

export function SearchForm({ searchText, onSubmit }: SearchFormProps) {
  return (
    <Formik
      initialValues={{ search: searchText || '' }}
      onSubmit={(value, actions) => {
        onSubmit(value.search);
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Field
          component={TextField}
          label="Search"
          name="search"
          variant="outlined"
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button type="submit" variant="outlined">
            Search
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
}

export default SearchForm;
