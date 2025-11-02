'use client';

import { Button } from "@/components/ui/button"

interface PortoCardProps {
  title: string;
  description: string;
  image?: string;
  projectLink?: string;
}

function PortoCard(props: PortoCardProps) {
  return (
    <div className="bg-white rounded-lg p-0 overflow-hidden border shadow-md flex flex-col">
      {props.image && (
        <img src={props.image} alt={props.title} className="w-full h-48 border-b object-cover" />
      )}

      <div className="p-6 space-y-3 grow">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-justify">{props.description}</p>
      </div>
      
      <div className="px-6 pb-6">
        <Button 
          variant="outline"
          className="w-full transition-colors rounded-3xl hover:bg-black hover:text-white"
          onClick={() => props.projectLink && window.open(props.projectLink, '_blank')}
          disabled={!props.projectLink}
        >
          Visit Project
        </Button>
      </div>
    </div>
  );
}

export default PortoCard;