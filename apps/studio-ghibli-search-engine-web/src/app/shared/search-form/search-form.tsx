import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Button, Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';

export interface SearchFormProps {
  searchText?: string;
  onSubmit: (searchText: string) => void;
  stackDirection?: 'row' | 'column';
}

export function SearchForm({
  searchText,
  onSubmit,
  stackDirection = 'column',
}: SearchFormProps) {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ search: searchText || '' }}
      onSubmit={(value, actions) => {
        onSubmit(value.search);
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Stack direction={stackDirection} spacing={2}>
          <Field
            id="search-text"
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
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              type="submit"
              variant="outlined"
              data-testid="search-submit-button"
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
}

export default SearchForm;
