import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback For Your Dream Job" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Applications & Resume Ratings</h1>
        <h2>Review Your Submissions and check AI-Powered Feedback.</h2>
      </div>
    </section>
  </main>
}
