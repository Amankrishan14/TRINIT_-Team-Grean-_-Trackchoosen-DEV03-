import { Link } from "react-router-dom"
import '../css/Error.css'

export default function Error() {
  return (
    <div class="layout">
		<div class="title">404 ERROR!!</div>
		<div class="text icon_500">PAGE NOT FOUND</div>
		<div class="buttons">
      <p class="text_buttons_intro">GO BACK!</p>
		</div>
  </div>
  )
}
