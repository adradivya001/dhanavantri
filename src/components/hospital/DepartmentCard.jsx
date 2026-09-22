import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Scissors, Stethoscope, Bone, Baby, Smile, Brain, Ear, Syringe } from 'lucide-react';
import Card from '../common/Card';

// Map icon names to Lucide components
const iconMap = {
  Activity, Heart, Scissors, Stethoscope, Bone, Baby, Smile, Brain, Ear, Syringe
};

const DepartmentCard = ({ department, basePath = "/dhanvanthari/departments" }) => {
  const IconComponent = iconMap[department.icon] || Activity;

  return (
    <Card className="p-6 flex flex-col h-full group">
      <div className="w-12 h-12 rounded-lg bg-[var(--hospital-primary)] bg-opacity-10 text-[var(--hospital-primary)] flex items-center justify-center mb-4 group-hover:bg-[var(--hospital-primary)] group-hover:text-white transition-colors duration-300">
        <IconComponent size={24} />
      </div>
      
      <h3 className="text-xl font-semibold text-[var(--hospital-heading)] mb-2">
        {department.title}
      </h3>
      
      <p className="text-[var(--hospital-text)] mb-6 flex-grow">
        {department.description}
      </p>
      
      <Link 
        to={`${basePath}/${department.slug}`} 
        className="inline-flex items-center text-[var(--hospital-primary)] font-medium hover:text-[var(--hospital-primary-dark)] group/link"
      >
        View Department 
        <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </Card>
  );
};

export default DepartmentCard;
