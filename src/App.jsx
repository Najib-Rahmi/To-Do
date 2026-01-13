import "./App.css";
import Todo from "./pages/Todo";
function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-950 to-zinc-900 flex flex-col items-center p-4 pt-8">
      <Todo />
    </div>
  );
}

export default App;
