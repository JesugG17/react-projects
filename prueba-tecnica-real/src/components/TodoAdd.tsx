import { Form, Header, Grid, Input, Button } from 'semantic-ui-react';
import { useForm, useTodos } from '../hooks';

export const TodoAdd = () => {
  const { formState, handleChange, resetForm } = useForm({ todo: '' });
  const { addTodo } = useTodos();

  const handleSubmit = () => {
    if (formState.todo.length === 0) return;

    addTodo(formState.todo);
    resetForm();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={FormStyles}
    >
      <Header as="h2">TODO - List</Header>
      <Grid columns={2}>
        <Input
          onChange={handleChange}
          value={formState.todo}
          name="todo"
          placeholder="Ingresa la descripcion de la tarea"
          autoComplete="false"
        />
        <Button positive>Guardar</Button>
      </Grid>
    </Form>
  );
};

const FormStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginBottom: 30,
};
