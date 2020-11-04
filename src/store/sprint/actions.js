import { SprintStore } from "./store";

import actions from "./constants";
import faker from "faker";

export default function useActions() {
  const [state, dispatch] = SprintStore.useSprint();

  async function loadSprints() {
    try {
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "sprints",
          value: [],
        },
      });
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "loadSprintsStatus",
          value: "loading",
        },
      });

      //   API CALL
      setTimeout(() => {
        dispatch({
          type: actions.SET_VAL,
          payload: {
            key: "sprints",
            value: [
              {
                id: 1,
                title: "MC-1",
                start_date: "2020-04-20",
                end_date: "2020-10-11",
                issues: [
                  {
                    id: 1,
                    title: faker.random.words(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    description: faker.lorem.paragraph(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    status: "done",
                    attachments: [],
                    comments: [],
                    assignee: {
                      id: faker.random.uuid(),
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: Math.round(Math.random())
                        ? faker.image.avatar()
                        : null,
                      color: faker.internet.color(),
                    },
                    reporter: {
                      id: faker.random.uuid(),
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: Math.round(Math.random())
                        ? faker.image.avatar()
                        : null,
                      color: null,
                    },
                    development: faker.random.words(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    labels: [],
                    original_estimate: Math.round(Math.random() * (10 - 0) + 0),
                    time_tracking: `${Math.round(
                      Math.random() * (10 - 0) + 0
                    )}w logged`,
                    priority: "medium",
                    components: [],
                    fix_versions: [],
                    epic_link: "",
                    completed_sprints: [],
                  },
                ],
              },
              {
                id: 2,
                name: "MC-2",
                start_date: "2020-06-20",
                end_date: "2020-11-21",
                issues: [
                  {
                    id: 1,
                    title: faker.random.words(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    description: faker.lorem.paragraph(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    status: "done",
                    attachments: [],
                    comments: [],
                    assignee: {
                      id: faker.random.uuid(),
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: Math.round(Math.random())
                        ? faker.image.avatar()
                        : null,
                      color: faker.internet.color(),
                    },
                    reporter: {
                      id: faker.random.uuid(),
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: Math.round(Math.random())
                        ? faker.image.avatar()
                        : null,
                      color: null,
                    },
                    development: faker.random.words(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    labels: [],
                    original_estimate: Math.round(Math.random() * (10 - 0) + 0),
                    time_tracking: `${Math.round(
                      Math.random() * (10 - 0) + 0
                    )}w logged`,
                    priority: "medium",
                    components: [],
                    fix_versions: [],
                    epic_link: "",
                    completed_sprints: [],
                  },
                ],
              },
              {
                id: 3,
                name: "MC-3",
                start_date: "2020-07-20",
                end_date: "2020-12-31",
                issues: [
                  {
                    id: 1,
                    title: "Create task detail",
                    description: "www.google.com",
                    status: "done",
                    attachments: [],
                    comments: [],
                    assignee: {
                      id: 1,
                      first_name: "Juan",
                      last_name: "Solis",
                      image: null,
                      color: faker.internet.color(),
                    },
                    reporter: {
                      id: 2,
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: faker.image.avatar(),
                      color: null,
                    },
                    development: "create branch",
                    labels: [],
                    original_estimate: 0,
                    time_tracking: "2w logged",
                    priority: "medium",
                    components: [],
                    fix_versions: [],
                    epic_link: "",
                    completed_sprints: [],
                  },
                ],
              },
            ],
          },
        });
        dispatch({
          type: actions.SET_VAL,
          payload: {
            key: "loadSprintsStatus",
            value: "success",
          },
        });
      }, 500);
    } catch (err) {
      // Showing error and rolling back
      console.error(err, "loadSprints");
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "sprints",
          value: [],
        },
      });
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "loadSprintsStatus",
          value: "error",
        },
      });
    }
  }

  return {
    state,
    dispatch,
    loadSprints,
  };
}
