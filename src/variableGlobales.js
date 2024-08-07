//let items = [];
import { obtenerComunicados } from "~/obtenerComunicados.js";

export function obtenerItems() {
    return comunicados;
}

export var comunicados = [];

export async function establecerItems() {
  comunicados = await obtenerComunicados;
}
