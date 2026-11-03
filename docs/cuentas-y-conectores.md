# Cuentas y conectores por servicio

Qué cuenta usar en cada servicio de Apps del Sur. El repo es público: aquí no van claves ni tokens.

| Servicio | Usar | No usar |
| --- | --- | --- |
| GitHub | Cuenta `dario-kreante`, con `GH_TOKEN="$(gh auth token --user dario-kreante)"` en cada comando | La cuenta activa de `gh` ("Kreante"), que no tiene permiso en el repo |
| Vercel | Proyecto `apps-del-sur-web`. Vista previa con `npm run preview:deploy` | `--prod` y cualquier publicación a producción desde un agente |
| Linear | Conector `linear-appsdelsur`, equipo `APP` | El conector de Linear de claude.ai, que apunta a Kreante |
| Airtable: diagnósticos | Base `Apps del Sur - Assessment IA` | Escribir registros de prueba sin autorización: es la base de producción |
| Airtable: CRM | Base `Pipeline Apps del Sur` | Notion, descontinuado aunque otros documentos aún lo citen |
| Brevo | Cuenta propia de Apps del Sur, con `BREVO_API_KEY` en Vercel | **El conector de Brevo de Claude: es de ONLY4FREE, otra empresa** |
| Engram | Nada | Prohibido en este proyecto |

Si un conector no aparece en esta tabla, revisa a qué cuenta pertenece antes de escribir con él.

## Worktrees

```bash
npm run worktree:new -- feat/mi-cambio
```

Crea una carpeta hermana desde `origin/master`, en una rama nueva que no sigue a `master`. Un `git worktree add` desde `origin/master` sin `--no-track` deja la rama siguiendo a `master`, y un push descuidado puede terminar en el lugar equivocado.

## Vista previa

```bash
npm run preview:deploy
```

Vercel no está conectado a GitHub, así que un PR no genera vista previa por sí solo. Los pasos están en `.claude/skills/preview-deploy/SKILL.md`.

En la vista previa, el envío de formularios no guarda porque `AIRTABLE_BASE_ID` solo existe en Production. La vista previa requiere sesión en Vercel.

## Guardia contra producción

`scripts/agent/guard-production-deploy.mjs` es un hook `PreToolUse` que detiene comandos Bash del agente que publicarían en producción.

**Es una defensa parcial, no un freno definitivo.** No cubre:

- La sesión de la CLI de Vercel usada por una persona o por otra herramienta: tiene permiso para publicar.
- Scripts que despliegan por dentro, por ejemplo `bash deploy.sh` o `cat deploy.sh | bash` si el comando no menciona vercel, o un script del proyecto que llame a `vercel --prod`.
- Conectores MCP y llamadas directas a la API de Vercel.
- Sesiones que no carguen la configuración de este repo.

Un control real exige quitarle a la sesión del agente el permiso de producción en Vercel.

Para activarla, `.claude/settings.json` necesita esta entrada, que requiere el visto bueno de Darío:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{ "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/scripts/agent/guard-production-deploy.mjs\"" }]
      }
    ]
  }
}
```

## Verificación local

```bash
npm run test:assessment-api
```

```bash
npm run test:agent
```

```bash
npm run build
```

```bash
npm run test:e2e
```

El recorrido usa el build, los handlers reales y Airtable simulado. No escribe en servicios externos. Si corre `scripts/qa-assessment-server.mjs` junto a `astro dev`, Astro debe escuchar en `127.0.0.1`.
