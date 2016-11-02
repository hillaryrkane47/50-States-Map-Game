var map = map || {}


map.obj = $('.us_map')


map.init = function (options) {
  if (arguments[0]) {
    var options = arguments[0]

    if (arguments[1]) {
      map.debug = true
    }

    if (options.enabledStates) {
      this.enableStates(options.enabledStates)
    }

    if (options.disabledStates) {
      this.disableStates(options.disabledStates)
    }

    if (options.tooltips) {
      this.addTooltips(options.tooltips)
    }
  }
}


map.addTooltips = function (tooltipList) {
  for (var x = 0, y = tooltipList.length; x < y; x++) {
    this.addTooltip(tooltipList[x])
  }
}


map.addTooltip = function (tooltip) {
  var normalizedStateName = this.utils.normalizeStateName(tooltip.state),
      obj = this.utils.createJqueryObject('.' + normalizedStateName)

  obj.attr('data-tooltip', tooltip.tooltip)
}





map.enableStates = function (states) {
  for (var x = 0, y = states.length; x < y; x++) {
    this.enableState(states[x])
  }
}





map.enableState = function (state) {
  var normalizedStateName = this.utils.normalizeStateName(state),
      stateObject = this.utils.createJqueryObject('.' + normalizedStateName)

  this.utils.removeSVGClass(stateObject, 'disabled')
  this.utils.addSVGClass(stateObject, 'enabled')

  if (map.debug) {console.log('Enabled ' + normalizedStateName)}
}





map.disableStates = function (states) {
  for (var x = 0, y = states.length; x < y; x++) {
    this.disableState(states[x])
  }
}





map.disableState = function (state) {
  var normalizedStateName = this.utils.normalizeStateName(state),
      stateObject = this.utils.createJqueryObject('.' + normalizedStateName)

  this.utils.removeSVGClass(stateObject, 'enabled')
  this.utils.addSVGClass(stateObject, 'disabled')

  if (map.debug) {console.log('Disabled ' + normalizedStateName)}
}





map.utils = {}





map.utils.normalizeStateName = function (state) {
  return state.replace(' ', '_').toLowerCase()
}





map.utils.createJqueryObject = function (identifier) {
  return $(identifier)
}





map.utils.addSVGClass = function (obj, newClass) {
  if (!obj.hasClass(newClass)) {
    obj.attr('class', function (index, oldClasses) {
      return oldClasses + ' ' + newClass
    })
  }
}





map.utils.removeSVGClass = function (obj, newClass) {
  if (obj.hasClass(newClass)) {
    obj.attr('class', function (index, oldClasses) {
      return oldClasses.replace(newClass, '')
    })
  }
}





$(document).ready(function(){
  var enabledStates = [
    'Kansas',
    'Massachusetts',
    'Michigan',
    'North Carolina',
    'Ohio',
    'Pennsylvania',
    'Texas',
    'Virginia',
    'Washington',
    'Wisconsin'
  ],
  tooltips = [
    {state: 'Kansas', tooltip: 'Kansas City, KS'},
    {state: 'Massachusetts', tooltip: 'New England/Boston, MA'},
    {state: 'Michigan', tooltip: 'Traverse City, MI'},
    {state: 'North Carolina', tooltip: 'Charlotte/Concord, NC'},
    {state: 'Ohio', tooltip: ['Cincinnati/Mason, OH', 'Sandusky, OH']},
    {state: 'Pennsylvania', tooltip: 'Pocono Mountains, PA'},
    {state: 'Texas', tooltip: 'Grapevine, TX'},
    {state: 'Virginia', tooltip: 'Williamsburg, VA'},
    {state: 'Washington', tooltip: 'Grand Mound, WA'},
    {state: 'Wisconsin', tooltip: 'Wisconsin Dells, WI'}
  ]

  map.init({
    enabledStates: enabledStates,
    tooltips: tooltips
  }, true)
})
