interface ExperienceCardProps {
  company: string;
  year: string;
  city: string;
  title: string;
  description: string;
}

function ExperienceCard(props: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border shadow-md">
      <div className="p-6 space-y-3">
        <p className="text-xl font-semibold">{props.title}</p>
        <div>
          <div className="flex items-baseline-last justify-between">
            <p className="text-lg font-medium">{props.company}</p>
            <p className="text-sm font-medium">{props.city}</p>
          </div>
          <p className="text-sm font-medium">{props.year}</p>
        </div>

        <p className="text-justify">{props.description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;