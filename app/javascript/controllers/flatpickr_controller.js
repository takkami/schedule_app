import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

export default class extends Controller {
  connect() {
    const baseClass = this.element.className

    this.fp = flatpickr(this.element, {
      disableMobile: true,
      allowInput: true,

      altInput: true,
      altFormat: "Y/m/d",
      dateFormat: "Y-m-d",

      altInputClass: baseClass,
    })
  }

  disconnect() {
    if (this.fp) this.fp.destroy()
  }
}