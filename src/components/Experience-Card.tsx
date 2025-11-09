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
        <p className="text-lg font-medium">{props.company}</p>
        <hr />
        <p className="text-justify">{props.description}</p>
        <hr />
        <div className="flex justify-between">
          <p className="text-sm font-medium">{props.city}</p>
          <p className="text-sm font-medium">{props.year}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;