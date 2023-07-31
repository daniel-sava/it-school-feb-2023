import { faCheckSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";
import { Button } from "react-bootstrap";
import "./Tasks.css";
import useGetData from "./custom-hooks/useGetData";

const TASKS = [
    {
        id: 1,
        title: "Task 1",
        completed: false,
    },
    {
        id: 2,
        title: "Task 2",
        completed: false,
    },
    {
        id: 3,
        title: "Task 3",
        completed: false,
    },
    {
        id: 4,
        title: "Task 4",
        completed: false,
    },
    {
        id: 5,
        title: "Task 5",
        completed: false,
    },
];

const TaskActions = {
    Completed: "completed",
    Deleted: "deleted",
};

function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case TaskActions.Completed:
            const updatedTasks = state.map((task) => {
                if (task.id === action.payload.taskId) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            });

            updatedTasks.sort((a, b) => (a.completed ? 1 : -1));
            return updatedTasks;
    }

    return state;
}

export default function Tasks() {
    const [tasks, dispatch] = useReducer(reducer, TASKS);
    const [tasksFromApi, setTasksFromApi] = useGetData(
        "https://jsonplaceholder.typicode.com/todos"
    );

    return (
        <div className="container">
            {tasks &&
                tasks.map((task, index) => {
                    return (
                        <div
                            key={index}
                            className={`task ${
                                task.completed ? "completed" : ""
                            }`}
                        >
                            <p className="text">
                                {task.id}.{" "}
                                <span className="description">
                                    {task.title}
                                </span>
                            </p>
                            <div className="action-buttons">
                                {!task.completed && (
                                    <Button
                                        onClick={() => {
                                            dispatch({
                                                type: TaskActions.Completed,
                                                payload: { taskId: task.id },
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
