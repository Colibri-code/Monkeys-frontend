import React, {} from "react";
import { FaShareAlt } from "react-icons/fa";


// Local
import "./style.scss";

function task_detail(props) {
    return (

    <main> 
        <div className="task_detail">

            <div className="container">
                <div className="detail">
                    <div className="Organization-Name">
                        <a href="#">Organization Name </a><span className="sl">/</span> <a href="#" className="appName" >App Name </a><span className="public">Public</span>

                    </div>
                    <div className="Task-Tag">
                        <a href="#">Task Tag </a><span>Task Tag</span>
                    </div>  
                    <div className="parent">
                        <div className="Task-Name-Here left-box">
                            <p>Task Name Here</p>
                        </div>



                    </div>

                </div>
                <div className = "Card-Base" >
                    <div className="descripcion">
                        <p>Task Description Here</p>
                    </div>
                    <div className="Lorem-ipsum-dolor-si">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <a href="#">Lorem Ipsum is simply dummy</a>
                    </div>

                    <div>
                        <i class="fas fa-folder-open" ></i>
                    </div>

                </div> 

                <div className="icono">
                        
                    <FaShareAlt/>
                </div>

                <div className="right-box">


                    <button className="boton">
                        Done
                    </button>
                    
                </div>

                <div className = "Card-Base1" >
                    <p className="In-Charge">In Charge</p>
                    <div className="Oval">
                        <div className="Online-Status"> <p className="User-Name-Last-Name">User Name Last Name</p></div>
                    </div>
                    <p className="Reporter">Reporter</p>
                    <div className="Oval">
                        <div className="Online-Status"> <p className="User-Name-Last-Name">User Name Last Name</p></div>
                    </div>

                    <p className="Task">Task</p>

                    <p className="Task-Tag-II">Task Tag</p>
                    <p className="Task-Tag-II Task-Black">Task Tag</p>

                </div>
                

            </div>

        </div>
    </main >
    );
}

export default (task_detail);