📝 ToDo App con Zustand & JSON Server
Una aplicación de tareas minimalista pero poderosa, con estado global usando Zustand, obtención de datos mockeados con JSON Server, y tests con cobertura del 60% (mínimo) usando Vitest y MSW.

🚀 Tecnologías usadas
🟢 React 19 + Vite

🐻 Zustand (global state management)

🐱‍👤 MSW (Mock Service Worker para tests)

📝 JSON Server (API fake para desarrollo)

🧪 Vitest + Testing Library

🎨 TailwindCSS (estilos rápidos y bonitos)

📦 Instalación
bash
Copiar
Editar

# Clonar repo

git clone https://github.com/tu-usuario/todo-app.git
cd todo-app

# Instalar dependencias

npm install
🛠️ Desarrollo
bash
Copiar
Editar

# Levantar JSON Server (para datos fake)

npx json-server --watch db.json --port 3001

# Levantar la app en modo desarrollo

npm run dev
🧪 Testing
bash
Copiar
Editar

# Ejecutar tests con cobertura

npx vitest run --coverage
✅ Cobertura mínima garantizada del 60% en:

components/

store/

🛡️ MSW intercepta peticiones en tests para aislarlos del backend.

📂 Estructura del proyecto
bash
Copiar
Editar
src/
├── components/ # Componentes UI (TodoList, TodoItem, etc.)
├── store/ # Zustand stores (estado global)
├── mocks/ # MSW handlers & server para tests
├── styles/ # Tailwind configs
└── App.jsx # Root component
📝 Features
🔄 Listado y gestión de tareas (CRUD).

🐻 Estado global simple con Zustand.

🔌 Datos mockeados con JSON Server en dev.

🧪 Tests unitarios y de integración con MSW.

📊 Reportes de cobertura detallados (lcov, html).

💡 Futuras mejoras
Persistencia en localStorage.

Drag & Drop para reordenar tareas.

Tests e2e con Playwright.

Dark Mode.

🐱‍🏍 Autor
Hecho con ❤️ por Rud.

¿Quieres que también te dé un badge bonito de cobertura + estado de tests en el README?
Solo dime:
"Rud quiere los badges de la victoria 🏅"
y te los armo visualmente chulos. 😎
