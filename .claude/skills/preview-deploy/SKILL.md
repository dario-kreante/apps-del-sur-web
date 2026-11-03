---
name: preview-deploy
description: Publica una vista previa de la rama actual en Vercel y deja el enlace en el PR y en el ticket de Linear. Úsala cuando un PR de apps-del-sur-web necesite vista previa. Nunca publica en producción.
---

# Vista previa con la CLI de Vercel

Vercel no está conectado a GitHub, así que el agente lanza la vista previa.

1. Confirma que los cambios están en un commit y que la rama está subida, si tiene PR. Subir la rama requiere la aprobación de Darío.
2. Corre:

   ```bash
   npm run preview:deploy
   ```

   El comando despliega a preview, comprueba el destino y crea o actualiza el comentario en el PR. Termina con error, sin publicar enlace, si hay cambios sin commit, si el PR no tiene ese commit o si el despliegue falla.

3. Deja el enlace en el ticket con `save_comment` del conector `linear-appsdelsur`. No uses el conector de Linear de claude.ai.
4. Comprueba la vista previa. Requiere sesión en Vercel; desde la terminal:

   ```bash
   vercel curl /ruta/ --deployment <url>
   ```

## Límites

- Nunca uses `--prod`, `vercel promote`, `vercel rollback` ni `vercel alias`. La salida a producción la decide Darío.
- En la vista previa el formulario de los diagnósticos no guarda: falta `AIRTABLE_BASE_ID` en ese entorno. Dilo al entregar el enlace.
- Cuentas por servicio: `docs/cuentas-y-conectores.md`.
