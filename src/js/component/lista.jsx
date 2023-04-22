import React, { useState } from "react";

export const Lista = () => {
    const [inputValue, setInputValue] = useState("");
    const [taskList, setTaskList] = useState([{
        description: "Tarea 1",
        status: true
    }
    ]);

    const handleAddTask = (event) => {
        setInputValue(event.target.value)
        if(event.key == "Enter"){
            console.log(event.key)
            setTaskList([...taskList,
            {
                 description: inputValue,
                 status: false
            }])
        setInputValue(" ")
        }
    }

    const eliminarTarea = (taskIndex) => {
        console.log(taskIndex)
        setTaskList(taskList.filter((task, index) => index != taskIndex))
    }

    return (
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">

                        <div className="card">
                            <div className="card-body p-5">

                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <div className="form-outline flex-fill">
                                        <input type="text" className="form-control" onKeyUp={handleAddTask}/>
                                    </div>
                                    {/* <button type="submit" className="btn btn-info ms-2">Add</button> */}
                                </div>

                                {/* <!-- Tabs content --> */} 
                                <div>
                                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                                        aria-labelledby="ex1-tab-1">
                                        <ul className="list-group mb-0 col-12">
                                            {
                                                taskList.map ((element, index) => {
                                                    return (
                                                        <li key={index} className="col-12 list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded">
                                                            {" "}
                                                            {element.description} {" "}
                                                            <button type="submit" onClick={() => eliminarTarea (index)} className="btn btn-info">X</button>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Tabs content --> */}

                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </section>
);
};