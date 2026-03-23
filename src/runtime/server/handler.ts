import { defineEventHandler, toWebRequest } from "h3"
import { useServerAuth } from "#imports"

export default defineEventHandler((event) => useServerAuth().auth.handler(toWebRequest(event)))
