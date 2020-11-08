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
            value: Array.from(
              { length: Math.round(Math.random() * (99 - 0) + 0) },
              (v, i) => ({
                id: faker.random.uuid(),
                name: `MC-${faker.random.uuid()}`,
                start_date: faker.date.past().toLocaleString("en-US"),
                end_date: faker.date.future().toLocaleString("en-US"),
                issues: Array.from(
                  { length: Math.round(Math.random() * (49 - 0) + 0) },
                  (a, j) => ({
                    id: faker.random.uuid(),
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
                  })
                ),
              })
            ),
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
