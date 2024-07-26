import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
  },
  columnOrder: ['column-1'],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const newTaskIds = Array.from(data.columns[source.droppableId].taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, result.draggableId);

    const newColumn = {
      ...data.columns[source.droppableId],
      taskIds: newTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ padding: 10, width: 250, minHeight: 500, background: '#f4f4f4' }}
              >
                <h3>{column.title}</h3>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: 10,
                          marginBottom: 10,
                          background: '#fff',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};

export default KanbanBoard;
