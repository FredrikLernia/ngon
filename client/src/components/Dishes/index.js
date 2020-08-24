import Desktop from './Desktop'
import Mobile from './Mobile'

const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints

export default isTouch ? Mobile : Desktop