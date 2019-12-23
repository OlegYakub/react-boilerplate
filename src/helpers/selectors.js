import { createSelector } from 'reselect';
// import { setIsAnswered } from "./lifestyle";

const selector = data => data;

// EXAMPLE
export const selectHasCheckedInterest = createSelector(
  selector,
  interestsData => {
    if (interestsData) {
      let isChecked = false;
      for (let i in interestsData) {
        const {funds} = interestsData[i];
        if (isChecked) break;

        for (let j in funds) {
          if (isChecked) break;
          if (funds[j].checked) {
            isChecked = true;
          }
        }
      }
      return isChecked;
    }

    return null;
  }
);
