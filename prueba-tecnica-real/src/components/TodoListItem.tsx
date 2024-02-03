import { FC, useState, useRef, useEffect } from 'react';
import { Button, Checkbox, ListItem, SegmentInline, Input, Form, Grid, Segment, Confirm } from 'semantic-ui-react';
import { useForm, useTodos } from '../hooks';
import { Todo } from '../interfaces/todo.interface';

export const TodoListItem: FC<Props> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const { removeTodo, toggleTodo, editTodo } = useTodos();
  const editInputRef = useRef<Input | null>(null);

  const { handleChange, formState } = useForm({ todo: todo.description });

  const startEditingTodo = () => {
    if (isEditing) {
      return setIsEditing(false);
    }

    setIsEditing(true);
  };

  const handleSubmit = () => {
    if (formState.todo.length === 0) return;

    editTodo(todo.id, formState.todo);
    setIsEditing(false);
  };

  useEffect(() => {
    editInputRef.current?.focus();
  }, [isEditing]);

  return (
    <ListItem style={ListItemStyles}>
      <Segment
        columns={2}
        style={SegmentStyles}
      >
        <SegmentInline style={SegmentInlineStyles}>
          <Checkbox
            onClick={() => toggleTodo(todo.id)}
            checked={todo.completed}
          />
          {isEditing ? (
            <Form
              onSubmit={handleSubmit}
              style={ContainerEditingStyles}
            >
              <Input
                onChange={handleChange}
                ref={(ref) => (editInputRef.current = ref)}
                value={formState.todo}
                name="todo"
              />
              <Button color="black">Guardar</Button>
            </Form>
          ) : (
            <p
              style={{
                textDecoration: todo.completed ? 'line-through' : '',
                color: todo.completed ? 'gray' : '',
              }}
            >
              <strong>{formState.todo}</strong>
            </p>
          )}
        </SegmentInline>
        <Grid columns={2}>
          <Button
            color="red"
            inverted
            onClick={() => setShowConfirm(true)}
          >
            Eliminar
          </Button>
          <Button
            primary
            inverted
            onClick={startEditingTodo}
          >
            Editar
          </Button>
          <Confirm
            open={showConfirm}
            content="¿Estas seguro de querer eliminar esta tarea?"
            confirmButton="Si, borrar"
            cancelButton="No"
            size="mini"
            onConfirm={() => removeTodo(todo.id)}
            onCancel={() => setShowConfirm(false)}
          />
        </Grid>
      </Segment>
    </ListItem>
  );
};

type Props = {
  todo: Todo;
};

const ListItemStyles = {
  display: 'flex',
  width: '100%',
};

const SegmentInlineStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const SegmentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#f9f3f7',
};

const ContainerEditingStyles = {
  display: 'flex',
  gap: 5,
};
