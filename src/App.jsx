import OPSDashboard from "./components/OPSDashboard/OPSDashboard.jsx";

function App() {
  return (
    <>
        <div className="container">
            <h1>MLB Batting Leader Board (OPS)</h1>
            <p>Data is collected each day at 04:00 AM CT (09:00 AM UTC).</p>
            <p>Eligibility for batting records requires a player to have an average &gt;= 3.1 plate appearances per team game played.</p>
            <hr/>
            <OPSDashboard/>
        </div>
    </>
  )
}

export default App
