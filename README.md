# Aprende Chino por Familias y Radicales

Aplicación educativa React + TypeScript + Vite + Tailwind CSS, diseñada como sitio estático y basada en datos externos.

## Fuente de contenido

El contenido educativo se ha estructurado a partir de `Cuaderno_Definitivo_Total_Chino.md` y `Cuaderno_Ampliacion_Personas_Hogar_Frases.md`, sin corregir silenciosamente sus posibles inconsistencias. El archivo fuente de la aplicación es:

`public/data/cursos_chino.json`

El Nivel 7 no se inventa: la aplicación está preparada para recibirlo posteriormente.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Producción

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Arquitectura

- `src/components/`: componentes genéricos de interfaz.
- `src/hooks/`: carga del curso y gestión de progreso.
- `src/utils/`: almacenamiento, voz, validación de datos y puntuación visual.
- `src/data/types.ts`: tipos TypeScript.
- `public/data/cursos_chino.json`: contenido educativo externo.

No hay componentes específicos por familia o nivel. El código recorre los datos dinámicamente.

## Perfiles y progreso

El perfil se normaliza a mayúsculas y se almacena localmente. El progreso usa claves como:

```text
chino_progress_ALUMNO01
```

No se envían datos personales a ningún servidor.

## Cómo añadir contenido

### Añadir una palabra

Añade un objeto al array `palabras` de una familia con un ID estable:

```json
{
  "id": "nuevo-caracter",
  "caracter": "新",
  "pinyin": "xīn",
  "traduccion": "Nuevo",
  "analisis": "..."
}
```

Las palabras nuevas aparecen como pendientes. El progreso existente no se marca automáticamente como completado.

### Añadir una frase

```json
{
  "id": "nueva-frase",
  "frase": "这是新的。",
  "pinyin": "Zhè shì xīn de.",
  "traduccion": "Esto es nuevo.",
  "analisis": "..."
}
```

### Añadir una familia

```json
{
  "id": "ropa",
  "nombre": "Familia de la Ropa",
  "radical": "衣",
  "radicalPinyin": "yī",
  "descripcion": "...",
  "palabras": [],
  "frases": []
}
```

### Añadir un nivel

```json
{
  "id": 8,
  "orden": 8,
  "titulo": "Nivel 8",
  "descripcion": "...",
  "desbloqueo": {"tipo":"nivel_anterior"},
  "familias": []
}
```

No es necesario crear `Nivel8.tsx` ni modificar `App.tsx`.

## Flujo de mantenimiento

1. Edita `public/data/cursos_chino.json`.
2. Añade el nuevo elemento con un ID estable.
3. Guarda.
4. Ejecuta `npm run dev`.
5. Comprueba el resultado.
6. Haz commit.
7. Haz push a GitHub.
8. Vercel/GitHub Pages volverá a desplegar el proyecto según su configuración.

## GitHub

```bash
git init
git add .
git commit -m "Primera versión de la aplicación de chino"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

No se debe subir `node_modules`, `dist` ni archivos `.env`.

## Despliegue

### Vercel

Importa el repositorio y utiliza:

- Build Command: `npm run build`
- Output Directory: `dist`

### GitHub Pages

El proyecto usa `base: './'` en Vite y carga los datos con `import.meta.env.BASE_URL`, por lo que los recursos estáticos se resuelven respecto a la ubicación del despliegue. Para automatizar GitHub Pages puede añadirse posteriormente un workflow de Actions.

## Validación de escritura

La primera versión realiza una estimación visual básica basada en tinta, densidad, distribución y centro de gravedad. No comprueba profesionalmente el orden de los trazos.

La puntuación mínima para marcar una palabra como superada está configurada en el JSON (`70` por defecto). El botón `Marcar como aprendida` permite completar manualmente una palabra.

## Contenido pendiente

El material proporcionado desarrolla los niveles 1 a 6. No se ha inventado contenido del Nivel 7. Cuando exista, basta con añadirlo al JSON usando la misma estructura.

El segundo documento contiene una frase poética con texto latino mezclado (`明月照 Hǎi 上， Píng ān zài 间。`) y sin pinyin completo. Se conserva de forma transparente y no se inventa un pinyin.
