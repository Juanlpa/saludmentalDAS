# Plan de Trabajo — Consultorio Virtual de Salud Mental Comunitaria

**Proyecto:** Consultorio Virtual para acceso rápido a salud mental  
**Estudiante:** Juan Lopez  
**Organización:** Somos Yura  
**Fecha de inicio:** 23 de marzo de 2026  
**Última actualización:** 24 de marzo de 2026

---

## 1. Contexto del Proyecto

Un profesional de salud mental en una comunidad rural necesita una solución que permita a las personas acceder a ayuda psicológica de forma inmediata, sin trámites, sin costos elevados y sin necesidad de desplazarse hasta la ciudad. La solución debe ser extremadamente sencilla: un solo clic desde el celular que conecte al paciente directamente con el profesional.

### Necesidades identificadas en la conversación con el stakeholder

- Acceso inmediato a ayuda mental sin formularios ni registros.
- Funcionalidad desde cualquier celular (prioridad mobile).
- Sin costo adicional para la comunidad.
- Mínima inversión de tiempo por parte del profesional.
- Vía de contacto directa (WhatsApp o videollamada).
- Escalabilidad progresiva: empezar con lo mínimo viable e ir mejorando.

### Observaciones sobre la comunicación con el stakeholder

El cliente (profesional de salud mental) mostró urgencia y poca disposición a detenerse en detalles técnicos o de planificación. Priorizó la acción inmediata sobre la especificación detallada. En futuras interacciones se recomienda adaptar el ritmo de las preguntas y ofrecer opciones concretas en lugar de preguntas abiertas.

---

## 2. Hitos del Proyecto

### Hito 1 — Implementación del enlace directo a WhatsApp

| Campo | Detalle |
|---|---|
| **Fecha límite** | 23 de marzo de 2026 |
| **Estado** | VENCIDO — Parcialmente completado |

**Entregables:**

| # | Entregable | Estado |
|---|---|---|
| 1.1 | Enlace funcional a WhatsApp | ✅ Completado |
| 1.2 | Botón en la página web o en redes sociales | ❌ No completado |
| 1.3 | Prueba de conexión y accesibilidad | ❌ No completado |

**Evidencia entregada:** PR integrado (Merged) en GitHub con archivos de aplicación (index.html, App.tsx, main.tsx). El título y commits del PR indican implementación de enlace de contacto directo a WhatsApp.

---

### Hito 2 — Definir necesidades principales del consultorio virtual

| Campo | Detalle |
|---|---|
| **Fecha límite** | 24 de marzo de 2026 |
| **Estado** | VENCIDO — Pendiente |

**Entregables:**

| # | Entregable | Estado |
|---|---|---|
| 2.1 | Lista de necesidades principales del sistema | ⏳ Pendiente |
| 2.2 | Prioridades de funcionalidades | ⏳ Pendiente |
| 2.3 | Resumen de objetivos inmediatos | ⏳ Pendiente |

**Nota:** A partir de la conversación con el stakeholder ya se pueden extraer las siguientes necesidades prioritarias para completar este hito:

1. Botón de contacto directo vía WhatsApp (un solo clic).
2. Accesibilidad móvil total (diseño responsive, carga rápida).
3. Cero registros ni formularios para el usuario final.
4. Posibilidad futura de videollamada.
5. Difusión comunitaria (grupos de Facebook, cadenas de WhatsApp).

---

### Hito 3 (propuesto) — Completar entregables faltantes del Hito 1

| Campo | Detalle |
|---|---|
| **Fecha límite sugerida** | 28 de marzo de 2026 |
| **Estado** | Por iniciar |

**Entregables:**

| # | Entregable | Descripción |
|---|---|---|
| 3.1 | Botón visible en la UI | Implementar botón con `aria-label`, navegable por teclado, visible en la página principal |
| 3.2 | Prueba de conexión | Verificar que el enlace abre WhatsApp correctamente en mobile y desktop |
| 3.3 | Prueba de accesibilidad | Ejecutar Lighthouse (o equivalente) y documentar resultados en el PR |
| 3.4 | Test básico de render | Agregar test unitario que valide que el componente del botón/enlace se renderiza correctamente |

---

### Hito 4 (propuesto) — Difusión comunitaria

| Campo | Detalle |
|---|---|
| **Fecha límite sugerida** | 4 de abril de 2026 |
| **Estado** | Por iniciar |

**Entregables:**

| # | Entregable | Descripción |
|---|---|---|
| 4.1 | Texto de difusión para WhatsApp | Mensaje corto para que líderes vecinales compartan el enlace por cadenas de WhatsApp |
| 4.2 | Publicación para redes sociales | Post para grupos de Facebook comunitarios con el enlace al consultorio |
| 4.3 | Métricas iniciales | Definir cómo se medirá el alcance (clics, mensajes recibidos) |

---

## 3. Evaluación del Hito 1 — Resumen

### Calificación general: 33% completado

### Desglose de competencias (escala 0–100)

| Competencia | Puntaje | Nivel | Observación |
|---|---|---|---|
| Profundidad Técnica | 55 | Medio | Solo evidencia de archivos en el PR; sin justificación de arquitectura en conversaciones |
| Empatía del Stakeholder | 50 | Medio | Sin conversaciones registradas para evaluar clarificaciones o enfoque en usuario |
| Pensamiento Crítico | 50 | Medio | Sin evidencia de análisis de trade-offs, riesgos o decisiones justificadas |
| Resiliencia Adaptativa | 40 | Bajo | Sin historial de errores, bloqueos o pivotes; solo estado "Merged" del PR |
| Factibilidad de Negocio | 55 | Medio | Sin evidencia de tests, métricas o accesibilidad; implementación básica |

**Promedio del estudiante:** 50 / 100  
**Promedio de referencia:** 60 / 100

### Fortalezas

- El PR propone un enlace de contacto directo a WhatsApp (según título y commits).
- El PR fue integrado exitosamente (Merged).
- Se agregaron archivos de aplicación (index.html, App.tsx, main.tsx), sugiriendo una UI funcional básica.

### Áreas de oportunidad

- **Testing:** Agregar pruebas de que el enlace funciona en mobile y desktop, más un test de render.
- **Accesibilidad:** Implementar `aria-label` y validar con Lighthouse; documentar resultados.
- **UI/UX del botón:** Asegurar que el botón sea visible y navegable por teclado; documentar ubicación en la página.
- **Comunicación:** En la siguiente iteración, incluir en el chat: qué se verificó, qué falló y cómo se corrigió.
- **Mapeo de entregables:** Especificar en el PR qué archivos cubren cada entregable.

### Recomendaciones para el siguiente hito

1. Incluir captura o pasos de verificación del enlace WhatsApp en la web.
2. Implementar botón con `aria-label` y confirmar navegación por teclado.
3. Ejecutar Lighthouse y adjuntar el resultado en el PR.
4. Agregar un test básico (render/link) para asegurar el componente.
5. Documentar en el chat: qué se probó, qué errores hubo y cómo se solucionaron.

---

## 4. Cronograma Resumen

| Hito | Descripción | Fecha | Estado |
|---|---|---|---|
| 1 | Enlace directo a WhatsApp | 23 mar 2026 | ⚠️ Parcial (33%) |
| 2 | Definir necesidades del consultorio | 24 mar 2026 | ⚠️ Vencido |
| 3 | Completar entregables faltantes H1 | 28 mar 2026 | 🔜 Por iniciar |
| 4 | Difusión comunitaria | 4 abr 2026 | 🔜 Por iniciar |

---
