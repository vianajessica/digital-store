import Header from "./header";
import AppRouter from "../routes";
import "./App.css"; // se quiser manter

const App = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <AppRouter />
      </main>
    </>
  );
};

export default App;
