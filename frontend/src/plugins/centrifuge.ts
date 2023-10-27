import { Centrifuge } from 'centrifuge'
import type { App } from 'vue'

const $centrifuge = new Centrifuge(import.meta.env.VITE_CENTRIFUGE_URL)
$centrifuge.setToken(import.meta.env.VITE_CENTRIFUGE_TOKEN)
export default {
  install: (app: App) => {
    app.provide('$centrifuge', $centrifuge)
  }
}
