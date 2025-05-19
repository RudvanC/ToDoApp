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

# Clonar repo

git clone https://github.com/tu-usuario/todo-app.git
cd todo-app

# Instalar dependencias

npm install
🛠️ Desarrollo


# Levantar JSON Server (para datos fake)

npx json-server --watch db.json --port 3001

# Levantar la app en modo desarrollo

npm run dev
🧪 Testing

# Ejecutar tests con cobertura

npx vitest run --coverage
✅ Cobertura mínima garantizada del 60% en:

components/

store/

🛡️ MSW intercepta peticiones en tests para aislarlos del backend.

📂 Estructura del proyecto
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

