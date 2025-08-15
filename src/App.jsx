import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"
import { tracker } from '@openreplay/tracker';
import { useEffect } from "react";

tracker.configure({
  projectKey: "q9wjjEYLfTxOk8ZzY5lT", 
  ingestPoint: "https://openreplay.sobitjonzamonov.com/ingest" // only required if using the self-hosted version of OpenReplay
});

function App() {
  useEffect(() => {
    tracker.start();
}, [])

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
