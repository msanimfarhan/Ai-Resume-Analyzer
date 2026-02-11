import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
    return [
        {title: "Resumide"},
        {name: "description", content: "Smart feedback for your dream job letsss gooo!!"},
    ];
}

export default function Home() {
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar/>
        <section className="page-heading">
            <div>

                <h1>Track Your Application & Resume Ratings</h1>
                <h2>Review your submissions and check AI-powered feedback</h2>
            </div>

        </section>

        {resumes.length > 0 && (
            <div className="resume-section">
                {resumes.map(resume => (
                    <ResumeCard key={resume.id} resume={resume}/>
                ))}
            </div>

        )}


    </main>
}
