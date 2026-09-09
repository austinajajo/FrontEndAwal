import Greetings from "./component/props/Greetings";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-600">
            <h1>My Website</h1>
          </h1>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            <Greetings />
            <Greetings/>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A simple website built with React JS and Tailwind CSS.
            No additional libraries are required.
          </p>

          <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </section>

        {/* Cards */}
        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
          <Card
            title="Simple"
            description="Clean and simple interface that is easy to understand."
          />

          <Card
            title="Responsive"
            description="Works nicely on desktop, tablet, and mobile screens."
          />

          <Card
            title="React"
            description="Built using React components and Tailwind CSS."
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 MyWebsite. All rights reserved.
      </footer>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default App;