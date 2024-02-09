'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        currentState = {};
        break;
      case 'addProperties':
        currentState = {
          ...currentState, ...action.extraData,
        };
        break;
      case 'removeProperties':
        currentState = { ...currentState };

        for (const key of action.keysToRemove) {
          if (currentState.hasOwnProperty(key)) {
            delete currentState[key];
          }
        }
        break;
      default:
    }
    result.push(currentState);
  }

  return result;
}

module.exports = transformStateWithClones;
