import { faCheckSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";
import { Button } from "react-bootstrap";
import "./Tasks.css";

const TASKS = [
    {
        id: 1,
        description: "Task 1",
        completed: false,
    },
    {
        id: 2,
        description: "Task 2",
        completed: false,
    },
    {
        id: 3,
        description: "Task 3",
        completed: false,
    },
    {
        id: 4,
        description: "Task 4",
        completed: false,
    },
    {
        id: 5,
        description: "Task 5",
        completed: false,
    },
];

const TaskActions = {
    Completed: "completed",
    Deleted: "deleted",
};

function reducer(state, action) {
    switch (action.type) {
        case TaskActions.Completed:
            return state.map((task) => {
                if (task.id === action.data.taskId) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            });
    }

    return state;
}

export default function Tasks() {
    const [tasks, dispatch] = useReducer(reducer, TASKS);

    return (
        <div className="container">
            {tasks.map((task, index) => {
                return (
                    <div
                        key={index}
                        className={`task ${task.completed ? "completed" : ""}`}
                    >
                        <p className="text">
                            {task.id}.{" "}
                            <span className="description">
                                {task.description}
                            </span>
                        </p>
                        <div className="action-buttons">
                            {!task.completed && (
                                <Button
                                    onClick={() => {
                                        dispatch({
                                            type: TaskActions.Completed,
                                            data: { taskId: task.id },
                                        });
                                    }}
                                    variant="success"
                                >
                                    <FontAwesomeIcon icon={faCheckSquare} />
                                </Button>
                            )}
                            <Button variant="danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
