require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString("M/d/yyyy")
  }

  // Loop through args and merge all arrays
  for (let arrays of args) {
    combinedObject.users.push(...arrays);
  }

  return combinedObject;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};