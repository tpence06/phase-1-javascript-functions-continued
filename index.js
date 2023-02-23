// code your solution here
function saturdayFun(activity) {
    console.log(`This Saturday, I want to ${activity}!`);
    if (activity == null) 
        activity = 'roller-skate';
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(work) {
    console.log(`This Monday, I will ${work}.`)
    if (work == null)
        work = 'go to the office';
    return(`This Monday, I will ${work}.`)
}
let wrapAdjective = function(style="*") {
    return function(adj="special") {
      return `You are ${style}${adj}${style}!`
    }
  }