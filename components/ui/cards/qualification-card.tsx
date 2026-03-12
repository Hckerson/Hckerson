import { WorkExperience } from "@/lib/interface";

export default function QulaificationCard({ data }: { data: WorkExperience }) {
    return (
        <div className="w-full">
            <div>
                <p>{data.title}</p>
                <p>{data.company}</p>
                <p>{data.location}</p>
                <p>{data.period}</p>
            </div>
            <div>
                <p>{data.description}</p>
                <ul>
                    {data.responsibilities.map((responsibility) => {
                        return <li>{responsibility}</li>;
                    })}
                </ul>
                <ul>
                    {data.skills.map((skill) => {
                        return <li>{skill}</li>;
                    })}
                </ul>
                <ul>
                    {data.achievements.map((achievement) => {
                        return <li>{achievement}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}
