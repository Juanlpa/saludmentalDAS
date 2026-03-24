# Hito 2 — Definir necesidades principales del consultorio virtual

**Fecha límite:** 24 de marzo de 2026  
**Estudiante:** Juan Lopez  
**Proyecto:** Consultorio Virtual de Salud Mental Comunitaria

---

## 1. Lista de necesidades principales del sistema

A partir de la conversación con el stakeholder (profesional de salud mental en comunidad rural), se identifican las siguientes necesidades:

| # | Necesidad | Justificación del stakeholder |
|---|---|---|
| N1 | Contacto directo con un solo clic | "Lo que quiero es que la gente pueda conectarse y buscar ayuda fácil y rápido" |
| N2 | Cero registros ni formularios | "La prioridad es que puedan hacer una consulta rápida, sin tener que llenar formularios o esperar mucho" |
| N3 | Accesible desde cualquier celular | "Que puedan acceder a ayuda mental sin complicaciones, en cualquier momento y desde cualquier lugar" |
| N4 | Sin costo elevado de implementación | "Cómo puedo llegar a más gente sin gastar tanto" |
| N5 | Mínimo consumo de tiempo del profesional | "No tengo tiempo para crear páginas o cosas así" / "que no me quite tiempo" |
| N6 | Canal de comunicación inmediato (WhatsApp o videollamada) | "Que puedan chatear o hacer videollamada fácilmente" |
| N7 | Eliminar la barrera geográfica | "Sin que tengan que ir hasta la ciudad" |

---

## 2. Prioridades de funcionalidades

Basado en la urgencia y frecuencia con que el stakeholder mencionó cada aspecto, se establece la siguiente priorización:

### Prioridad Alta — Implementar de inmediato

| Funcionalidad | Descripción | Estado actual |
|---|---|---|
| Botón de WhatsApp directo | Un enlace/botón que abra chat de WhatsApp sin pasos intermedios | Enlace creado en PR (parcial — falta botón visible en UI) |
| Diseño mobile-first | La página debe funcionar perfectamente en celulares de gama baja | Por verificar con pruebas |
| Carga sin registro | El usuario accede y contacta sin crear cuenta ni llenar datos | Implementado en concepto |

### Prioridad Media — Implementar en segunda iteración

| Funcionalidad | Descripción |
|---|---|
| Opción de videollamada | Agregar un segundo botón para iniciar videollamada (Google Meet, Zoom o Jitsi) |
| Información básica del servicio | Texto breve que explique qué tipo de ayuda se ofrece y horarios de disponibilidad |
| Número de contacto definitivo | Reemplazar número de prueba por el número real del profesional |

### Prioridad Baja — Mejoras futuras

| Funcionalidad | Descripción |
|---|---|
| Difusión comunitaria | Textos para compartir en grupos de Facebook y cadenas de WhatsApp |
| Múltiples profesionales | Ampliar el sistema para conectar con más de un profesional |
| Métricas de uso | Rastreo básico de clics y contactos realizados |
| Recursos de autoayuda | Sección con información y recursos de salud mental |

---

## 3. Resumen de objetivos inmediatos

El consultorio virtual tiene un objetivo central claro expresado por el stakeholder: **que cualquier persona de la comunidad pueda pedir ayuda de salud mental desde su celular, con un solo toque, sin trámites y sin desplazarse.**

### Objetivos para las próximas 2 semanas

1. **Completar la implementación del botón visible** en la página web con accesibilidad (aria-label, navegación por teclado).
2. **Verificar funcionamiento real** del enlace en dispositivos móviles y desktop, documentando evidencia.
3. **Configurar el número de WhatsApp definitivo** del profesional en el sistema.
4. **Publicar la página** en un dominio o enlace accesible para la comunidad.
5. **Preparar un mensaje de difusión** corto para que líderes comunitarios compartan el enlace.

### Criterios de éxito

- Una persona de la comunidad puede abrir el enlace desde su celular y llegar al chat de WhatsApp del profesional en menos de 10 segundos.
- El sitio carga correctamente en conexiones lentas y celulares de gama baja.
- El profesional no necesita realizar ninguna acción técnica para recibir consultas.

---

*Documento generado el 24 de marzo de 2026 — Somos Yura*
