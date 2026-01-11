import { ResearchProject } from '@/data/cv-data';

interface ProjectCardProps {
  project: ResearchProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {project.lab} • {project.period}
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        {project.description}
      </p>
      <ul className="space-y-2">
        {project.details.map((detail, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
