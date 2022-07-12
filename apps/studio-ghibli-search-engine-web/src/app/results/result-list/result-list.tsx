import { List, Divider, Alert } from '@mui/material';
import { FilmEntity, PeopleEntity } from '@studio-ghibli-search-engine/models';

import ResultListItem from '../result-list-item/result-list-item';

export interface ResultListProps {
  results: (FilmEntity | PeopleEntity)[];
}

export function ResultList({ results }: ResultListProps) {
  if (!results.length) {
    return (
      <Alert variant="outlined" severity="info">
        Nothing found!
      </Alert>
    );
  }
  return (
    <List>
      {results.map((result) => (
        <div key={result.id}>
          <ResultListItem listItem={result} />
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}

export default ResultList;
