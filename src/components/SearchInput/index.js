import React from 'react';
import { Form, Input, Button } from './styles';
function index({ placeholder, query, setQuery, handleSubmit, Icon }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        data-testid='input'
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></Input>
      <Button type='submit'>{Icon}</Button>
    </Form>
  );
}

export default index;
