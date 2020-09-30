// Third libs
import React from "react";
import { BsFolder } from "react-icons/bs";
import { useParams } from "react-router-dom";

// Local
import "./style.scss";

// Components
import Avatar from "../avatar";

function TaskDetail() {
  const { id } = useParams();
  //use this id to get the data from the backend

  return (
    <main className="h-100 w-100 monkeys-p-5">
      <div className="d-flex">
        <span className="task-tag monkeys-text-flame">Task Tag</span>
        <span className="task-tag-bolder monkeys-text-midnight-blue monkeys-ml-2">
          Task Tag
        </span>
      </div>
      <div className="d-flex monkeys-mt-2">
        <h1 className="task-name monkeys-text-dark-blue">Task Name Here</h1>
      </div>
      <div className="d-flex monkeys-mt-3 justify-content-between h-100 w-100">
        {/* TASK DETAIL ONE */}
        <div className="d-flex flex-column monkeys-bg-white shadow monkeys-p-2 task-detail-one h-100">
          <span className="task-description monkeys-text-midnight-blue">
            Task Description
          </span>

          {/* TASK DETAIL CONTENT */}
          <div className="d-flex flex-column monkeys-mt-2">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              maxime commodi tenetur quidem ipsum quia voluptatem perferendis
              in, sunt nesciunt officia molestiae delectus deserunt molestias
              quas assumenda corrupti omnis sit quam! Dolorem expedita quaerat
              cumque recusandae sunt perferendis doloribus maxime labore quidem
              similique, cupiditate quam ullam distinctio laudantium. Nobis
              culpa natus nulla repudiandae nisi odit atque aliquam delectus
              optio blanditiis, possimus excepturi eaque aut sit, ducimus
              accusamus voluptates, voluptatibus tenetur quidem provident! Ab
              tempore similique sint repellendus nulla velit fuga vitae numquam,
              nam sunt eum? Eveniet fuga similique aut doloremque suscipit at
              provident quod officiis iste! Alias dolore culpa eius?
            </div>
            <div className="monkeys-mt-3">
              <span className="monkeys-text-primary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                quibusdam harum sunt, aliquid maxime quod.
              </span>
            </div>
          </div>

          {/* TASK DETAIL FOOTER */}
          <div className="d-flex monkeys-mt-4 align-items-center user-select-none pointer">
            <BsFolder />
            <span className="monkeys-ml-2 monkeys-text-midnight-blue">
              assets
            </span>
          </div>
        </div>
        {/* TASK DETAIL TWO */}
        <div className="d-flex flex-column monkeys-bg-white shadow monkeys-p-2 task-detail-two h-100">
          <span className="task-detail-two-header">In Charge</span>
          <div className="d-flex align-items-center">
            <Avatar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TaskDetail;
